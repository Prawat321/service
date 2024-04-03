import React from "react";
import "../assets/main.css"
import { GrFormDown } from "react-icons/gr";
import Carousel from 'react-bootstrap/Carousel';
import man1 from"../assets/images/man1.jpg"
import woman from"../assets/images/woman.jpg"
import woman2 from"../assets/images/woman2.jpg"
import man2 from"../assets/images/man2.jpg"
import Footer from"../footer/Footer"

function Cust(){
    return(
        <>
        <div className="container-fluid">
         
          <div className="Cust">
        <h1><GrFormDown /></h1>
            <h1>Customer Testimonials </h1>
            <h4 style={{color:"rgb(160, 156, 150)"}}>What our custemer have to say</h4>
            <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <div className="container-fluid">
          <div className="row">
        
        <div className="col-md-6 col-sm-6 col-lg-6">
        <  img src={man1} alt="" style={{height:"10vh", width:"10%", borderRadius:"60%" }} />
      
       <h3>Experience has been smotth every time i have <br />
        opted for their service.Best part I think is the<br />
          door step picup service which everyone will<br />
        appreciate.I entered the  handed service center<br />
           and parked the car, over the key to the Toyota <br />
           service rep and entered the reception.The person<br />
            at the reception assigned a service advisor who <br />
           attending another customer and asked me to wait <br />
           few mins.<br />
           </h3>
           </div>
           
       
        <div className="col-md-6 col-sm-6 col-lg-6">
        <  img src={woman} alt="" style={{height:"10vh", width:"10%", borderRadius:"60%" }} />
       <h3>Experience has been smotth every time i have <br />
        opted for their service.Best part I think is the<br />
          door step picup  service which everyone   will<br />
        appreciate.  I entered the  handed service center<br />
           and parked the car, over the key to the   Toyota <br />
           service rep and entered the reception.The person<br />
             at the reception assigned a service advisor who <br />
           attending another customer and asked me to wait<br />
           few mins.<br />
           </h3>
           </div>
           </div>
           </div>
        
       
      </Carousel.Item>
      <Carousel.Item>
      <div className="container-fluid">
          <div className="row">
        
        <div className="col-md-6 col-sm-6 col-lg-6">
        <  img src={man2} alt="" style={{height:"10vh", width:"10%", borderRadius:"60%" }} />
      
       <h3>Experience has been smotth every time i have <br />
        opted for their service.Best part I think is the<br />
          door step picup service which everyone will<br />
        appreciate.I entered the  handed service center<br />
           and parked the car, over the key to the Toyota <br />
           service rep and entered the reception.The person<br />
            at the reception assigned a service advisor who <br />
           attending another customer and asked me to wait <br />
           few mins.<br />
           </h3>
           </div>
           
       
        <div className="col-md-6 col-sm-6 col-lg-6">
        <  img src={woman2} alt="" style={{height:"10vh", width:"10%", borderRadius:"60%" }} />
       <h3>Experience has been smotth every time i have <br />
        opted for their service.Best part I think is the<br />
          door step picup  service which everyone   will<br />
        appreciate.  I entered the  handed service center<br />
           and parked the car, over the key to the   Toyota <br />
           service rep and entered the reception.The person<br />
             at the reception assigned a service advisor who <br />
           attending another customer and asked me to wait<br />
           few mins.<br />
           </h3>
           </div>
           </div>
           </div>
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      
    
    </Carousel>

          </div>
         </div> <br />
         <div className="container-fluid">
          <div className="Header1 text-center">
          <h1>Get A Fair Quote Along With Free Doorstep <br /> 
          Pick-up & Drop Facility</h1>
          <h3>Whether you’re the driver of your own car or a rental, you’re covered 24/7, 365 days a year 
         
          </h3>
         
          </div>
         </div> <br />
         <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-lg-6">
              <h1>Our Company Fasility</h1> <br />
               <h3>This easy to work</h3>
               <br />
               <h3>We are given home service</h3> <br />
               <h3>We are given height discount</h3> <br />
               <h3>We are given many gifts for first service</h3>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6">
              <div className="side2">
             <h2>Before</h2>
             <h2 style={{marginLeft:"80%",}}>After</h2>
              </div>
              </div>
          </div>
         </div> <br />
         <Footer/>
        </>
    )
}
export default Cust