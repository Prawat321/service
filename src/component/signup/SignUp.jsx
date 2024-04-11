import React, {useEffect, useState} from "react";
import signuplogo1 from "../assets/images/signuplogo2.jpg"
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';

function SignUp(){

    const [username, setUserName]= useState("");
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [city,setCity]=useState("")

    const [userlist,setUserList]=useState([])


    useEffect(() => {
        
       // localStorage.removeItem("UserList")
        
        
        return () => {
            
        };
    }, []);

    const submitSubmit=(e)=>{
        e.preventDefault()
        if(username.trim()==false){
            alert("Please Enter the Username")
            return
        }
        if(username.trim().length<=3){
          alert("Username Should be 3 digit")
          return
        }
        
        if(email.trim()==false){
            alert("Please Enter the Email")
            return
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email.trim())){
         alert("Please Enter Valid Email")
        }
        if(password.trim()==false){
            alert("Please Enter the Password")
            return
        }
        if(password.trim().length <=8){
            alert("password shoud be 8 digit ")
            return
        }
        if(city.trim()==false){
            alert("Please Enter the City")
            return
        }
        
        
        const data = {
            username : username,
            email:email,
            password:password,
            city:city
        }

        const GetList = JSON.parse(localStorage.getItem("UserList"))

        
        
        

        if(GetList !== null){
           
           for(let i = 0; i < GetList.length; i++){
            userlist.push(GetList[i])
           }
            
            const filter = userlist.filter(item => item?.email?.includes(email))
            if(filter.length > 0){
alert("user already registered")
return
            }

        console.log("filter", filter)
        
            const ss = [...userlist, data]
            localStorage.setItem("UserList", JSON.stringify(ss))

        }else{

            localStorage.setItem("UserList", JSON.stringify(data))
           
        }
        const gg = localStorage.getItem("UserList")

            console.log("user", gg)
        setUserName("")
        setEmail("")
        setPassword("")
        setCity("")


           
    }

    return(
        <>
        <div className="container sign" >
            <div className="row">
                <div className="col-md-6 col-sm-6 col-lg-6">
                    <img src={signuplogo1} alt="" style={{height:"80vh"}} />
                </div>
                <div className="col-md-6 col-sm-6 col-lg-6">
                <h1 className="text-center bg-danger p-2t">SignUp </h1>
        <label htmlFor="">Enter the username</label> <br /> 
            <input type="Email" name="username" value={username} size={30}  onChange={(e) => setUserName(e.target.value)}/> <br /> <br />
            <label htmlFor="">Enter the Email</label> <br />
            <input type="Email" name="email" value={email} size={30}  onChange={(e)=>setEmail(e.target.value)} />
            <br /> <br />
            <label htmlFor="">Create Password</label> <br />
            <input type="Email" name="password" value={password} size={30} onChange={(e)=>setPassword(e.target.value)} />
            <br /> <br />
            <label htmlFor="">Enter the City</label> <br />
            <input type="text" name="city" value={city} size={30} onChange={(e)=>setCity(e.target.value)} />
            <br /> <br />
            <Form>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Accept Terms and Conditions"
      />
     
    </Form>
            <button className="btn btn-danger mb-3 SignUPForm_Button" type="submit" onClick={submitSubmit}> Signup</button> <br />
           
            <h3 style={{marginLeft:"17%"}}>
                <Link to="/">All ready Have Account </Link> </h3> 
                </div>
            </div>
        </div>
        </>
    )
}
export default SignUp