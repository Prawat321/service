import React from "react";
import Header from "../header/Header";
import Mid from "../mid/Mid";
import Swip from "../swip/Swip";
import Abso from "../abso/Abso";
import Footer from "../footer/Footer";
import show from "../assets/images/showroom.jpg"

function Gellery(){
    return(
        <>
          <Header />
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-ld-12">
        <h1 className=" forlearn1 text-center">
          Looking for the Right <br />
Vehical Repair Service? <br />
          <span >Gallery</span>  </h1>
        </div>
      </div>
     </div>

<div className="gallery">
<div className="container-fluid">

<div className="row">

  <div className="col-lg-3 col-sm-6 col-md-4">
    <h2> <li>Our Service</li></h2>
  </div>
  <div className="col-lg-3 col-sm-6 col-md-4 value1">
    <h2> <li>Custom service</li></h2>
  </div>

  <div className=" col-lg-3 col-sm-6 col-md-4 value2">
    <h2> <li>Winter Service </li></h2>
  </div>
  <div className="col-lg-3 col-sm-6 col-md-4 value3">
    <h2> <li>How to work</li></h2>
  </div>
</div>
</div></div>
<br />

<div className="service1">
  <h1>Bike Car and Scooty Servie Available in Jaipur</h1>
  {/* <h4>we have exoerinced from five year in this field</h4> */}
</div>
<br />



<Mid />
<Swip />
<Abso />
<br />
<Footer />
        </>
    )
}
export default Gellery