import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import bikehd from"../assets/images/bikehd.jpg"
import scooty from"../assets/images/scootyhd.jpg"
import carhd from"../assets/images/carhd.jpg"
function Swip(){
    return(
        <>
         
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bikehd}
          alt="First slide"
          style={{marginTop:"5%", height:"100vh", width:"70vh"}}/>
        {/* <Carousel.Caption> */}
          {/* <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        {/* </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={scooty}
          alt="Second slide"
         style={{height:"90vh", marginTop:"5%"}}/>
        <Carousel.Caption>
          {/* <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carhd}
          alt="Third slide"
          style={{height:"90vh", marginTop:"5%"}}/>
        <Carousel.Caption>
          {/* <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   
        </>
    )
}
export default Swip