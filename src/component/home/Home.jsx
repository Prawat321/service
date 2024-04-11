import React from "react";
import Header from "../header/Header";
import Carousel from 'react-bootstrap/Carousel';
import slide from "../assets/images/forslide1.jpg"
import bike from "../assets/images/forbike2.jpg"
import scooty from "../assets/images/forscooty.jpg"
import carbike from "../assets/images/forcarser.jpg"
import "../assets/main.css"
import diag from "../assets/images/diagnostic.jpg"
import filter from "../assets/images/filter.jpg"
import dent from "../assets/images/dent and paint.jpg"
import breaks from "../assets/images/breaks.jpg"
import cont1 from "../assets/images/cont1.jpg"
import cont2 from "../assets/images/cont2.jpg"
import cont3 from "../assets/images/cont3.jpg"
import { AiFillAlert } from "react-icons/ai"; 
import { AiFillHome } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";
import popular from "../assets/images/popular.jpg"
import Midcard from "../midcard/MidCard";
import Cust from "../cust/Cust";
import { Link } from "react-router-dom";

function Home(){
  return(
    <>
    
    <div className="container-fluid">
   <Header/>
   </div>
   <div className='container-fluid'>
     
    </div>
   <div className="container-fluid">
   <Carousel data-bs-theme="dark">
      <Carousel.Item>
        
        <img
          className="d-block w-100"
          src={bike}
          alt="First slide" style={{height:"100vh", width:"70vh"}}
        />
        <Carousel.Caption>
        <h2 style={{color:"white"}}>Looking for the Right <br />
      Vehical Repair Service?</h2> <br />
      <h4 style={{color:"red"}}>This is the best and reliable site which you can trust. 
        Our 12K customers have also taken advantage of this</h4>
          
           
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide}
          alt="Second slide"  style={{height:"100vh", width:"70vh"}}
        />
        <Carousel.Caption>
        <h2 style={{color:"white"}}>Looking for the Right <br />
      Vehical Repair Service?</h2> <br />
      <h4 style={{color:"red"}}>This is the best and reliable site which you can trust. 
        Our 12K customers have also taken advantage of this</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={scooty}
          alt="Third slide" style={{height:"100vh", width:"70vh"}}
        />
        <Carousel.Caption>
        <h2 style={{color:"white"}}>Looking for the Right <br />
      Vehical Repair Service?</h2> <br />
      <h4 style={{color:"red"}}>This is the best and reliable site which you can trust. 
        Our 12K customers have also taken advantage of this</h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <br />
   <div className="container">
    <div className="row"> 
    <div className="col-md-6 col-sm-6 col-lg-6">
    <img src={carbike} alt="" style={{height:"50vh"}}/>
    </div>
    <div className="col-md-6 col-sm-6 col-lg-6">
      <h3 style={{color:"yellow"}}>On-spot Car, Bike and Scooty service</h3>
      <h6>instant onspot support for breakdown & 
        starting problem issues due to mechanical 
        issues, electrical issues, spark plug 
        problems, battery problems, fuse problems,
         wheel problems, cable problems, air locks,
          fuel tappet problems, chain link issues 
          etc within 30 minutes for your bikes & 
          cars from our experienced car mechanic 
          near me & bike mechanic near me. In case
           if the issue is major and cannot be fixed
            onspot then we will recommend the customer
             on further steps. We have the network of
              best car workshops, bike workshops which
               can provide all the major repairs support
                under mechanical work, electrical work, 
                tinkering & painting and AC work under 
                our end-to-end monitoring.</h6> <br />
                <button className="buuton1"> <Link to="/About" style={{textDecoration:"none"}}>About Us</Link></button>
    </div>
   </div>
   </div>
    <br /> 
    <div className="container-fluid text-center ">
  
      <div className="MainHome">
       
      <h1 >Why Choose Us</h1>
     <h4 > We Offer Full Service Auto Repair 
     </h4>
     
     {/* <div className="carimg ">
      <img src={carr} alt="" style={{height:"50vh", width:"100vh"}}/>
     </div> */}
       </div>
       </div>
       
       <br />
       <div className="container-fluid text-center">
        <div className="row">
          <div className="col-md-3 col-sm-3  ">
          <img src={diag} alt="" style={{height:"10vh", marginTop:"10%"}}/>
         <h2> Diagnostics</h2>
If your car needs  a mobile <br />
 diagnostic check done at <br />
 your home or office, let <br />
 AutoMechanica come to you.
          </div>
          <div className="col-md-3 col-sm-3  " >
          <img src={filter} alt=""  style={{height:"10vh", marginTop:"10%"}} />
             <h2>Filters</h2> 
            AutoMechanica proudly <br /> 
            serves the Lube,  Oil & <br />
             Filter change needs of  <br />
             customers' vehicle performance <br />
              while extending the life of your vehicle.
            </div>
            <div className="col-md-3 col-sm-3" >
            <img src={dent} alt="" style={{height:"10vh" , marginTop:"10%"}} />
           <h2> Dent & Paint</h2>
              AutoMechanica specializes <br />
               in car dent repair and car <br /> 
               painting services for a range of models.
              </div>
              <div className="col-md-1 col-sm-1"  style={{marginLeft:"8%"}}>
              <img src={breaks} alt=""  style={{height:"10vh" , marginTop:"10%"}}/>
             <h2> Breakes</h2>
              The breake systemconsists <br />
               of different <br /> parts that  <br />
               can be fixed <br /> individually.  <br />
              {/* A detailed quote is given  <br />
               to you after we perform  <br />
               our systematic brake evaluation. */}
                </div>
        </div>
       </div> <br /> <br />
       <h1 className="container text-center"> <b>The Advantage of our Site </b></h1> <br />
           <div className="container text-center">
          <div className="row">
            <div className="col-md-4 col-sm-4-col-lg-4">
            <img src={cont1} alt=""  style={{height:"27vh", }}/>
            <h1><AiFillAlert /></h1>
         <h1>11622</h1>
         <h3>Satisfied Customers</h3>
         </div>
         <div className="col-md-4 col-sm-4-col-lg-4">
         <img src={cont2} alt=""  style={{height:"27vh",}}/>
         <h1><AiFillHome /></h1>
         <h1>223</h1>
         <h3>Customer Jobs</h3>
         </div>
         <div className="col-md-4 col-sm-4-col-lg-4">
         <img src={cont3} alt="" style={{height:"27vh", }}/>
         <h1><IoEyeSharp /></h1>
         <h1>06</h1>
         <h3>Customer Jobs</h3>
         </div>
           </div>
          
           </div>
           <br />
         <div className="container-fluid">
          <div className="textcar text-center">
          <img src={popular} alt="" style={{width:"100%"}}/>
          <div className="text-work text-center">
            <h1>How It Work</h1>
            <h3>we offer full services Autp repair and Maintenance</h3>
          </div>
          <div className="forcorse">
          <Midcard/>
          </div>
         </div>
         </div>
        
         <Cust/>
    </>
  )
}
export default Home