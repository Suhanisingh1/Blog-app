import {BrowserRouter,Routes,Route} from "react-router-dom"
import React from 'react'
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

export const App = () => {
  return (
    <div >
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>} ></Route>
   </Routes>
   </BrowserRouter>

    </div>
  )
}

export default App;