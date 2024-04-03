import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "../assets/images/logo.jpg"
import "../assets/main.css"
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div> 
      <div className='Navbar'>
{[ 'sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 Navbar ">
          <Container fluid>
            <Navbar.Brand href="#">
            <img src={logo}alt="" style={{height:"50%", width:"50%", marginTop:"1%"}} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 head1">
                  <Link to="/" style={{textDecoration:"none", color:"black"}}>Home</Link>
                  <Link to="/About" style={{textDecoration:"none",color:"black"}}>About</Link>
                  <Link to="/Gallery" style={{textDecoration:"none" ,color:"black"}}>Gallery</Link>
             
                      
                  <NavDropdown 
                    title=  "Choices"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    style={{marginTop:"-1.5%"}} 
                  >
                  
                     
                    <NavDropdown.Item href="Cars">Cars</NavDropdown.Item>
                    <NavDropdown.Item href="Bikes">
                  Bikes
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="Scooty">
                      Scooty
                    </NavDropdown.Item>
                   

                  </NavDropdown>
                  <Link to="/Login" style={{textDecoration:"none"  ,color:"black"}}>Login</Link>
                </Nav>
                
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

</div>
   
  
      </div>
     
  )
}

export default Header
