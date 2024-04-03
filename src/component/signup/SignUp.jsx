import React from "react";
import signup from "../assets/images/signuplogo.jpg"

function SignUp(){
    return(
        <>
         <div className="container" >
            <div className="row">
          
           
         
            <img src={signup} alt="" className="col-md-4 col-sm-4" />
            <div className="col-md-3 col-sm-3">
               <label htmlFor="">Enter The Name</label>
               <input type="text" size={30} /> <br />
               <label htmlFor="">Enter The Name</label>
               <input type="text" size={30} /> <br />
               <label htmlFor="">Enter The Name</label>
               <input type="text" size={30} /><br />
            </div>
            
            </div>
      
      
        </div>
        </>
    )
}
export default SignUp