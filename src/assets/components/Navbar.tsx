
import olx from '../olx.png'
import lens from '../lens.png'
import arrow from '../arrow.png'
import search from '../search.png'
import Login from './Login'
// import { useState } from 'react'

// import { Link } from 'react-router-dom';


type searchProp = {
  setSearch: any
}

const Navbar = ( props: searchProp) => {

  // const [loginPop, setLoginPop] = useState(false)

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

      <div className='flex h-12 p-3 ml-4 cursor-pointer underline hover:no-underline'>
  <a href="/login" className='font-bold text-lg'>login</a>
</div>

      
      <div className='w-28 flex h-12 p-2 ml-4 cursor-pointer rounded-full border border-yellow-500'>
        <h1 className='font-bold text-lg ml-3'>+SELL</h1>
      </div>
    </div>
    {/* { loginPop && <Login   setLoginPop = { setLoginPop}/>  } */}
    </>
  )
}

export default Navbar
