import React from "react";
import Header from "../header/Header";
import Aboutimg from "../assets/images/About.jpg"
import "../assets/main.css"
import logo from "../assets/images/aboutlogo.jpg"
import bike from"../assets/images/bike3.jpg"
import scooty from"../assets/images/scooty3.jpg"
import { MdLocationOn } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import Footer from "../footer/Footer"
function About(){
    return(
        <>
        <div className="container-fluid">
        <Header/> 
        </div>
        <div className="cotainer-fluid">
          <h1 className=" forlearn text-center">
          Looking for the Right <br />
Vehical Repair Service? <br />
            About us</h1>
        </div>
        <br />
        <div className="container-fluid">
          <div className="row">
          <div className="col-md-6 col-sm-6col-lg-6" >
           
             
        <h1>A Reputation of 25 <br />Years in the Making</h1>
        <p>AutoMechanica’s mission is to enable
             premium quality care for your car
              bikes and scooty service at affordable pricing.
               We ensure real time updates for 
               complete vehical care needs with a fair
                and transparent pricing mechanism. 
                Skilled technicians, working at our
                 state of the art German technology
                  workshop further ensure that only 
                  genuine OEM parts are used for your vehical care needs.</p>
                  <p>Customer satisfaction is the core of all initiatives 
                    at AutoMechanica. Online appointment scheduling
                     with door-step, same day pick-up and drop anywhere
                      in Pune is our constant endeavor to maximize 
                      customer convenience. Our commitment stands 
                      for reliability and unequalled professionalism
                       to provide dealer quality auto-service at a fair price.</p>
                       {/* <button className="contbutton">contect us</button> */}
       
                       </div>
                     
        <img src={Aboutimg}alt="" className="col-md-6 col-sm-6col-lg-6" />
        </div> <br />
       
        </div>
        <div className="container-fluid">
          <div className="row">
          <img src={bike}alt="" className="col-md-6 col-sm-6col-lg-6" style={{height:"51vh"}}/>
          <div className="col-md-6 col-sm-6col-lg-6" >
           
             
        <h1>There are best work<br />from our company</h1>
        <p>AutoMechanica’s mission is to enable
             premium quality care for your car
              bikes and scooty service at affordable pricing.
               We ensure real time updates for 
               complete vehical care needs with a fair
                and transparent pricing mechanism. 
                Skilled technicians, working at our
                 state of the art German technology
                  workshop further ensure that only 
                  genuine OEM parts are used for your vehical care needs.</p>
                  <p>Customer satisfaction is the core of all initiatives 
                    at AutoMechanica. Online appointment scheduling
                     with door-step, same day pick-up and drop anywhere
                      in Pune is our constant endeavor to maximize 
                      customer convenience. Our commitment stands 
                      for reliability and unequalled professionalism
                       to provide dealer quality auto-service at a fair price.</p>
                       {/* <button className="contbutton">contect us</button> */}
       
                       </div>
                     <br />
                       <div className="container-fluid">
          <div className="row">
          <div className="col-md-6 col-sm-6col-lg-6" >
           
             
        <h1>This is The best  <br />Service of Scooty</h1>
        <p>AutoMechanica’s mission is to enable
             premium quality care for your car
              bikes and scooty service at affordable pricing.
               We ensure real time updates for 
               complete vehical care needs with a fair
                and transparent pricing mechanism. 
                Skilled technicians, working at our
                 state of the art German technology
                  workshop further ensure that only 
                  genuine OEM parts are used for your vehical care needs.</p>
                  <p>Customer satisfaction is the core of all initiatives 
                    at AutoMechanica. Online appointment scheduling
                     with door-step, same day pick-up and drop anywhere
                      in Pune is our constant endeavor to maximize 
                      customer convenience. Our commitment stands 
                      for reliability and unequalled professionalism
                       to provide dealer quality auto-service at a fair price.</p>
                       {/* <button className="contbutton">contect us</button> */}
       
                       </div>
                     
        <img src={scooty}alt="" className="col-md-6 col-sm-6col-lg-6" style={{height:"51vh"}}/>
        </div> <br />
       
        </div>
        </div> <br />
       
        </div>
       
         <br /> <br />
     
     <div className="container-fluid"> 
     <div className="row" >
                <div className="col-md-4 col-sm-12 col-lg-4 text-justify  ">
                <img src={logo} alt="" style={{height:"15vh"}}/>
                <p>AutoMechanica’s mission is to
                     enable premium quality care 
                     for your luxury car service
                      at affordable pricing . 
                    We ensure real-time updates
                     for complete car care needs
                      with a fair and transparent 
                      pricing mechanism.</p>
                      </div>
                      <div className="col-md-4 col-sm-12 col-lg-4 text-justify"> 
               <h2>Service</h2>
               <p>
                <ul>
               <li>Periodic</li> 
               <li> Dent &  </li>
               <li>Paint</li>
                    <li> Bumper Repair</li>
                    <li>Accidental Repair</li> 
                      <li>Scratch Removal</li>  
                </ul>
                </p>
                </div> 
                <div className="col-md-4 col-sm-12 col-lg-4 text-justify"> 
                <h2>Links</h2>
                <ul><li>contect</li>
                <li>for workshop</li>
                <li>vehicl name</li>
                <li>near by service</li>
                <li>best location</li></ul>
            </div>
                </div> 
                </div>
                <br />
                <div class="jumbotron text-center">
                  <h3>About This Learn </h3>
                 
                  </div> <br />
                  <div className="container-fluid">
                  <h1><FaFacebookSquare /> <FaInstagramSquare /><FaSquareTwitter /><FaLinkedin /></h1>
                  <h5><MdLocationOn /> Parasme Softwere and Technology Niwaru road Jhotwara Jaipur Rajasthan</h5>
                 <h5><IoCall /> This is our contect number for any inquary 9783887270</h5> 
                 <h5><BsWhatsapp /> This is our Whatsapp number for any inquary 9783887270</h5> 
                  </div> <br /><br />
                  <Footer/>
        </>
    )
}
export default About