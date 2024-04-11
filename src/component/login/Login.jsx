import React, { useState } from "react";
import login from "../assets/images/loginimg.jpg"
import "../assets/main.css"
import { Link  } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Login(){
  const navigate = useNavigate()

   const[name, setName]=useState("")
   const[email, setEmail]=useState("")
   const[Password,setPassword]=useState("")

   const loginSubmt = (e) =>{
    e.preventDefault()
    navigate('/Home')
    console.log("Error")
    if(name.trim() == false ){
     alert("Please Enter Name")
     return
    }
    if(name.trim().length <= 3 ){
      alert("Name should be use 3 digit")
      return
     }
    if(email.trim() == false ){
      alert("Please Enter Email")
      return
     }
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if(!emailRegex.test(email.trim())){
      alert("Please enter valid email ")
      return
     }
     if(Password.trim() == false ){
      alert("Please Enter Password")
      return
     }
     if(Password.trim().length <= 8 ){
      alert("password should be 8 digit long")
      return
     }

   }

    return(

        <>
        <div className="container" >
            <div className="col-md-12 col-sm-12">

        
      <div className="LoginForm" style={{marginTop:"10%"}}>
        <div className="container">
          <div className="row">
        <div className="LoginImg col-md-6 col-sm-6 col-lg-6">
            <img src={login} alt="" style={{height:"70vh",marginLeft:"15%",marginTop:"10%"}}/>
        </div>
        <div className="LoginIn col-md-6 col-sm-6 col-lg-6">
            <h1 className="text-center bg-warning p-2t">Login</h1>
        <label htmlFor="">Enter the Name</label> <br /> 
            <input type="Email" size={30} value={name} onChange={(e) => setName(e.target.value)} /> <br /> <br />
            <label htmlFor="">Enter the Email</label> <br />
            <input type="Email" size={30} value={email} onChange={(e) => setEmail(e.target.value)}/>
            <br /> <br />
            <label htmlFor="">Enter the Password</label> <br />
            <input type="Email" size={30}value={Password} onChange={(e) => setPassword(e.target.value)} />
            <br /> <br />
            <Link to="/Home">
            <button className="btn btn-warning mb-3 SignUPForm_Button" type="submit" onClick={loginSubmt}> Login</button> </Link><br />
              <h3 style={{marginLeft:"17%"}}>
                <Link to="/signup">Create a account </Link> </h3> 
        </div>
        </div>
        </div>
      </div>
      </div>
        </div>
        </>
    )
}
export default Login