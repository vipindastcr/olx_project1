import Details from "./assets/components/Details"
import Main from "./assets/components/Main"
// import Navbar from "./assets/components/Navbar"
import { Route, Routes } from "react-router-dom"


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Main/> }/>
        <Route path="/details" element={ <Details/> }/>
      </Routes>
      
    </>
  )
}

export default App
