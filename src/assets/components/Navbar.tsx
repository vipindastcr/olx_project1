
import olx from '../olx.png'
import lens from '../lens.png'
import arrow from '../arrow.png'
import search from '../search.png'

import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { auth, db } from "../../firebase/setup";


type searchProp = {
  setSearch: (value: string) => void;
};

const Navbar = ( props: searchProp) => {

  
  const [user, setUser] = useState<any>(null); // To store the authenticated user's details
  const [userName, setUserName] = useState<string>(""); // To store the user's name
  const navigate = useNavigate(); // Initialize useNavigate


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);

        // Fetch user data from Firestore
        try {
          const userDocRef = doc(db, "users", currentUser.uid);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            setUserName(userDoc.data().name); // Set the user's name
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        setUser(null);
        setUserName(""); // Clear the user's name on logout
      }
    });

    return () => unsubscribe(); // Cleanup listener on component unmount
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const handleSellClick = () => {
    navigate("/create"); // Navigate to the /create route
  };

  return (
    
    <>
    <div className='flex p-4 bg-slate-100 shadow-md'>
      <img src={olx} className='w-11 h-9'/>
      <div className='flex border-2 border-spacing-1 w-64 p-2 border-black ml-5 bg-white'>
        <img src={lens} className='w-6 h-5 mt-1'/>
        <input placeholder='location'className='ml-3 outline-none'/>
        <img src={arrow} className='w-8 h-7'/>
      </div>

      <div className='flex h-12 ml-4 border-2 border-black bg-white'>
        <input onChange={(e)=> props?.setSearch( e.target.value )} placeholder='Find Cars, Mobile Phones and more.' className='ml-3 w-96 outline-none'/>
        <img src={search} />
      </div>

      <div className='flex h-12 p-3 ml-10 cursor-pointer'>
        <h1 className='font-semibold'>ENGLISH</h1>
        <img src={arrow} className='w-8 h-7'/>
      </div>

      {user ? (
        <div className="flex items-center space-x-4 ml-6">
          <h1 className="font-bold text-lg">Hello, {userName || "User"}</h1>
          <button
            onClick={handleLogout}
            className="font-semibold text-red-500 underline hover:no-underline"
          >
            Logout
          </button>
        </div>
      ) : (
        <a
          href="/login"
          className="flex h-12 p-3 ml-6 cursor-pointer underline hover:no-underline"
        >
          <h1 className="font-bold text-lg">Login</h1>
        </a>
      )}
{/* 
      <div className='flex h-12 p-3 ml-4 cursor-pointer underline hover:no-underline'>
        <a href="/login" className='font-bold text-lg'>login</a>
      </div> */}

      <a href="/sell">
      <div className='w-28 flex h-12 p-2 ml-4 cursor-pointer rounded-full border border-yellow-500'>
        <h1 className='font-bold text-lg ml-3'>+SELL</h1>
      </div></a>
    </div>
    {/* { loginPop && <Login   setLoginPop = { setLoginPop}/>  } */}
    </>
  )
}

export default Navbar
