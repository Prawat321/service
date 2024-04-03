import React from "react";
import bike1 from "../assets/images/bike1.jpg"
import bike2 from "../assets/images/bike2.jpg"
import bike3 from "../assets/images/bike3.jpg"
import bike4 from "../assets/images/bike5.jpg"
import scooty1 from "../assets/images/scooty1.jpg"
import scooty2 from "../assets/images/scooty2.jpg"
import scooty3 from "../assets/images/scooty3.jpg"
import scooty4 from "../assets/images/scooty4.jpg"
import car3 from "../assets/images/car3.jpg"
import car4 from "../assets/images/car4.jpg"
import car5 from "../assets/images/car5.jpg"
import car6 from "../assets/images/car6.jpg"
import Button from 'react-bootstrap/Button';

function Mid() {
    return (
        <>
<div className="gallery">
<div className="container-fluid">

<div className="row">

            
                <img className="col-md-4 col-sm-4 col-lg-3-fluid" src={bike1} alt="" style={{height:"80%", width:"25%"}}/>

            

        
                <img className="col-md-4 col-sm-4 col-lg-3" src={bike2} alt="" style={{height:"20%", width:"25%"}}/>

           

          
                <img  className="col-md-4 col-sm-4 col-lg-3"src={bike3} alt="" style={{height:"20%", width:"25%"}}/>
            

           
                <img className="col-md-4 col-sm-4 col-lg-3" src={bike4} alt="" style={{height:"20%"}} />

                <img className="col-md-4 col-sm-4 col-lg-3" src={scooty1} alt="" />
           
           
                <img className="col-md-4 col-sm-4 col-lg-3"src={scooty2} alt="" />
            
                <img className="col-md-4 col-sm-4 col-lg-3"src={scooty3} alt="" />
            
                <img className="col-md-4 col-sm-4 col-lg-3" src={scooty4} alt="" />
            </div>


         
                

            <div className="row ">
            
                <img className="col-md-4 col-sm-4 col-lg-3" src={car3} alt=""  />
          
                <img className="col-md-4 col-sm-4 col-lg-3"src={car4} alt="" />
            
                <img className="col-md-4 col-sm-4 col-lg-3" src={car5} alt="" />
                
                    <img className="col-md-4 col-sm-4 col-lg-3"src={car6} alt="" />
                </div>
                   <div className="text-center " style={{marginTop:"3%", padding:"5px 15px"}}>
                <Button variant="danger " >Danger</Button>{' '}
                   </div>
                </div>
                </div>
            </>
            )
}
            export default Mid