import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../home/Home";
import Login from "../login/Login";
import About from "../about/About";
import SignUp from "../signup/SignUp";
import Gallery from "../gallery/Gallery";
import Cars from "../cars/Cars";
import Bikes from"../Bikes/Bikes"
import Scooty from"../scooty/Scooty"



function Allroutes(){
    return(
        <>
        <Routes>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/" element={<Login/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/Gallery" element={<Gallery/>}/>
            <Route path="/Cars" element={<Cars/>}/>
            <Route path="/Bikes" element={<Bikes/>}/>
            <Route path="/Scooty" element={<Scooty/>}/>
          
            
        </Routes>
        </>
    )
}
export default Allroutes