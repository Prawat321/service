import React from "react";
import login from "../assets/images/loginimg.jpg"
import "../assets/main.css"
import { Link } from "react-router-dom";

function Login(){
    return(

        <>
        <div className="container" >
            <div className="col-md-12 col-sm-12">

        
      <div className="LoginForm">
        <div className="LoginImg">
            <img src={login} alt="" />
        </div>
        <div className="LoginIn">
            <h1 className="text-center bg-warning p-2t">Login</h1>
        <label htmlFor="">Enter the Name</label> <br /> 
            <input type="Email" size={30} /> <br /><br />
            <label htmlFor="">Enter the Email</label> <br />
            <input type="Email" size={30} />
            <br /><br />
            <label htmlFor="">Enter the Password</label> <br />
            <input type="Email" size={30} />
            <br /> <br />
            <button className="btn btn-warning mb-3 SignUPForm_Button"> Login</button> <br />
              <h3 style={{marginLeft:"17%"}}>
                <Link to="/signup">Create a account </Link> </h3> 
        </div>
      </div>
      </div>
        </div>
        </>
    )
}
export default Login