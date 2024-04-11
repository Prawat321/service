import React from "react";
import Header from "../header/Header";
import"../assets/main.css"
import carrwa from"../assets/images/carrwa.jpg"
import carrwa1 from"../assets/images/carrwa1.jpg"
import carrwa2 from"../assets/images/carrwa2.jpg"

import carser from "../assets/images/carser.jpg"
import carser1 from "../assets/images/carser1.jpg"
import carser2 from "../assets/images/carser2.jpg"

import { GrStatusGood } from "react-icons/gr";
import Footer from "../footer/Footer";



function Cars(){
    return(
        <>
        <Header/>
      <div className="container-fluid text-center">
        <div className="Carss">
        <h3>Some Examples of our Cars Service</h3>
        <h4>We Have Done all Typer car Work</h4>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row">
            <div className="carw col-md-4 col-sm-4 col-lg-4"> 
            <img className="" src={carrwa} alt="" style={{height:"30vh", width:"100%"}}/> 
            <h3>washing work from us</h3>
            <p>Lorem ipsum dolor  
            sit amet, eque magnam 
            Contrary to popular belief, 
            Lorem Ipsum is not simply
             random text. It has roots
              in a piece of classical 
              Latin literature from 45
               BC, making it over 5 years old 
            inventore qui sequi this.</p>
            </div>
            
           
            <div className="carw col-md-4 col-sm-4 col-lg-4">
            <img className="" src={carrwa1} alt="" style={{height:"30vh", width:"100%"}}/>
            <h3>Down The Car</h3>
            <p >Lorem ipsum dolor  
            sit amet, eque magnam 
            Contrary to popular belief, 
            Lorem Ipsum is not simply
             random text. It has roots
              in a piece of classical 
              Latin literature from 45
               BC, making it over 5 years old 
            inventore qui sequi this.</p>
            </div>
            
           
            <div className="carw col-md-4 col-sm-4 col-lg-4">
            <img className="" src={carrwa2} alt="" style={{height:"30vh", width:"100%"}}/>
            <h3 >Uper the Car</h3>
            <p >Lorem ipsum dolor  
            sit amet, eque magnam 
            Contrary to popular belief, 
            Lorem Ipsum is not simply
             random text. It has roots
              in a piece of classical 
              Latin literature from 45
               BC, making it over 5 years old 
            inventore qui sequi this.</p>
            </div>
            </div>
           
      
      </div>
      <div className="container" > 
      <div className="row">
        <div className="carw col-md-4 col-sm-4 col-lg-4">
      <img className="carw col-md-3 col-sm-3 col-lg-3" src={carser} alt="" style={{height:"30vh",width:"100%" }}/>
      <h3 >Full Service</h3>
      <p >Lorem ipsum dolor  
            sit amet, eque magnam 
            Contrary to popular belief, 
            Lorem Ipsum is not simply
             random text. It has roots
              in a piece of classical 
              Latin literature from 45
               BC, making it over 5 years old 
            inventore qui sequi this.</p>
      </div>
      <div className="carw col-md-4 col-sm-4 col-lg-4">
      <img className="carw col-md-3 col-sm-3 col-lg-3" src={carser1} alt="" style={{height:"30vh",width:"100%" }}/>
       <h3 >Down service</h3>
       <p >Lorem ipsum dolor  
            sit amet, eque magnam 
            Contrary to popular belief, 
            Lorem Ipsum is not simply
             random text. It has roots
              in a piece of classical 
              Latin literature from 45
               BC, making it over 5 years old 
            inventore qui sequi this.</p>
       </div>
       <div className="carw col-md-4 col-sm-4 col-lg-4">
      <img className="carw col-md-4 col-sm-4 col-lg-4" src={carser2} alt="" style={{height:"30vh",width:"100%" }}/>
      <h3 >Front service</h3>
      <p >Lorem ipsum dolor  
            sit amet, eque magnam 
            Contrary to popular belief, 
            Lorem Ipsum is not simply
             random text. It has roots
              in a piece of classical 
              Latin literature from 45
               BC, making it over 5 years old 
            inventore qui sequi this.</p>
      </div>
      </div>
      </div> <br />
      <div className="container">
        <div className="row">
        <h2 className="text-center" style={{color:"red"}}>Choose Your Plan</h2>
        
            <div className="carw col-md-4 col-sm-4 col-lg-4" style={{marginTop:"5%"}}>
                
              <h3>  Basic Cleaning <br />
              $200 only.
              </h3> 
              <h6> <GrStatusGood /> Seats Washing <br />
              <GrStatusGood /> Vacuum Cleaning <br />
              <GrStatusGood /> Exterior Cleaning <br />
              <GrStatusGood /> Interior Wet Cleaning <br />     
              <GrStatusGood /> Window Wiping</h6> <br />
              <button className="butt1">Book Now</button>
                 </div>
                 <div className="carw col-md-4 col-sm-4 col-lg-4" style={{marginTop:"5%"}}>
                
              <h3>  Premium Cleaning<br />
              $250 only.
              </h3>
              <h6> <GrStatusGood />Seats Washing <br />
              <GrStatusGood />Vacuum Cleaning <br />
              <GrStatusGood /> Exterior Cleaning <br />   
              <GrStatusGood />Interior Wet Cleaning <br />
              <GrStatusGood />Window Wiping</h6> <br />
              <button className="butt1">Book Now</button>
                 </div>
                 <div className="carw col-md-4 col-sm-4 col-lg-4" style={{marginTop:"5%"}}>
                
              <h3 >  Complex Cleaning <br />
              $300 only.
              </h3>
              <h6> <GrStatusGood />Seats Washing <br />
              <GrStatusGood />Vacuum Cleaning <br />
              <GrStatusGood /> Exterior Cleaning <br />   
              <GrStatusGood />Interior Wet Cleaning <br />
              <GrStatusGood />Window Wiping</h6> <br />
              <button className="butt1">Book Now</button>
                 </div>
        </div>
      </div><br />
      <Footer/>
        </>
    )
}
export default Cars