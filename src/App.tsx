import Details from "./assets/components/Details"
import Login from "./assets/components/Login"
import Main from "./assets/components/Main"
import SignUp from "./assets/components/signup"
// import Navbar from "./assets/components/Navbar"
import { Route, Routes } from "react-router-dom"
import AuthRoute from "./assets/components/authRoute"
import CreateP from "./assets/components/create"




const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <AuthRoute> <Main/> </AuthRoute>  }/>
        <Route path="/details" element={ <Details/> }/>
        <Route path="/login" element={ <Login/> } />
        <Route path="/SignUp" element={ <SignUp/> } />
        <Route path="/sell" element={<CreateP/> }/>
      </Routes>
      
    </>
  )
}

export default App
