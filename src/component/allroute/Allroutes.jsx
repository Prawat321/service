import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../home/Home";
import Login from "../login/Login";
import About from "../about/About";
import SignUp from "../signup/SignUp";
import Gallery from "../gallery/Gallery";


function Allroutes(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/Gallery" element={<Gallery/>}/>
        </Routes>
        </>
    )
}
export default Allroutes