import React from "react";
import Header from "../header/Header";
import"../assets/main.css"
import bikewa from"../assets/images/wash1.jpg"
import bikewa1 from "../assets/images/bikewa1.jpg"
import bikewa2 from "../assets/images/bikewa2.jpg"
import service from"../assets/images/service.jpg"
import service1 from "../assets/images/service1.jpg"
import service2 from"../assets/images/service2.jpg"
import { GrStatusGood } from "react-icons/gr";
import Footer from "../footer/Footer";
function Bikes(){
    return(
        <>
        <Header/>
      <div className="container-fluid text-center">
        <div className="Bikes">
        <h3>Some Examples of our Bike service</h3>
        <h4>We Have Done all Typer Bike Work</h4>

        </div>
      </div>
      <br />
      <div className="container">
        <div className="row">
            <div className="carw col-md-4 col-sm-4 col-lg-4"> 
            <img className="" src={bikewa} alt="" style={{height:"30vh", width:"100%"}}/> 
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
            <img className="" src={bikewa1} alt="" style={{height:"30vh", width:"100%"}}/>
            <h3>Down The Bike</h3>
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
            <img className="" src={bikewa2} alt="" style={{height:"30vh", width:"100%"}}/>
            <h3 >Uper the Bike</h3>
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
      <img className="carw col-md-3 col-sm-3 col-lg-3" src={service} alt="" style={{height:"30vh",width:"100%" }}/>
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
      <img className="carw col-md-3 col-sm-3 col-lg-3" src={service1} alt="" style={{height:"30vh",width:"100%" }}/>
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
      <img className="carw col-md-4 col-sm-4 col-lg-4" src={service2} alt="" style={{height:"30vh",width:"100%" }}/>
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
              $50 only.
              </h3> 
              <h6> <GrStatusGood /> Seats Washing <br />
              <GrStatusGood /> Vacuum Cleaning <br />
              <GrStatusGood /> Exterior Cleaning <br />
              <GrStatusGood /> Breack service<br />     
              <GrStatusGood /> Gear service</h6> <br />
              <button className="butt5">Book Now</button>
                 </div>
                 <div className="carw col-md-4 col-sm-4 col-lg-4" style={{marginTop:"5%"}}>
                
              <h3>  Premium Cleaning<br />
              $100 only.
              </h3>
              <h6> <GrStatusGood />Seats Washing <br />
              <GrStatusGood />Vacuum Cleaning <br />
              <GrStatusGood /> Exterior Cleaning <br />   
              <GrStatusGood />Breack service<br />
              <GrStatusGood />Gear service</h6> <br />
              <button className="butt5">Book Now</button>
                 </div>
                 <div className="carw col-md-4 col-sm-4 col-lg-4" style={{marginTop:"5%"}}>
                
              <h3 >  Complex Cleaning <br />
              $150 only.
              </h3>
              <h6> <GrStatusGood />Seats Washing <br />
              <GrStatusGood />Vacuum Cleaning <br />
              <GrStatusGood /> Exterior Cleaning <br />   
              <GrStatusGood />Breack service <br />
              <GrStatusGood />Gear service</h6> <br />
              <button className="butt5">Book Now</button>
                 </div>
        </div>
      </div><br />
      <Footer/>
        </>
    )
}
export default Bikes