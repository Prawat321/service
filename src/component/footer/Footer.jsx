import React from "react";
import"../assets/main.css"
import { MdLocationOn } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";


function Footer(){
    return(
        <>
        
       
        <div className="container-fluid ">
        
        <div className="Footerr" style={{padding:"5% 5% 0% 5%"}}>
       
        
        <div className="container-fluid text">
            <div className="col-sm-6 col-md-6 col-lg-6">
                  <h3>Get Useful</h3>
                  <h5><MdLocationOn /> parasme S&T. jaipur</h5> <br />
                 <h5><IoCall /> inquary number 9783887270</h5> <br />
                 {/* <h5><BsWhatsapp /> inquary Whatsapp 9783887270</h5> <br /> */}
                 <h1><FaFacebookSquare /> <FaInstagramSquare /><FaSquareTwitter /></h1> <br />
                  </div>       
                  </div>

            
          
                
               <div className="col-sm-3 col-md-3 col-lg-3">
                <ul>
                   
                <h3>PopularArea</h3>
                    <li>Sanganer</li> <br />
                    <li>Gopalpura</li> <br />

                    <li>VeshaliNagar</li> <br />
                    <li>Jhotwara</li> <br />
                    <li>Vidyadar Nagar</li>
                </ul>
            </div>
            <div className="col-sm-3 col-md-3 col-lg-3">
                <h3>News Leter</h3> <br />
                <input type="text" placeholder="Fullname" size={30}/> <br /> <br />
                <input type="text" placeholder="Email"size={30}  /> <br /> <br />
                <button className="inbut" style={{padding:"3% 10%", borderRadius:"20px"}}> <Link to="/" style={{textDecoration:"none"}}> Submit</Link></button>
                
            </div>
         </div>
            </div>
            
        </>
    )
}
export default Footer