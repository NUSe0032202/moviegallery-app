import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import filmLogo from "../assets/images/filmroll.png";

const navbar = () => {
  return( 
  <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
       <Navbar.Brand>Gallery
          <img src={filmLogo}
            alt = "film logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />   
       </Navbar.Brand>
       <Nav clasName="mr-auto">
           <NavDropdown title="Search By" id="basic-nav-dropdown">
               <NavDropdown.Item>Genre</NavDropdown.Item>
               <NavDropdown.Item>Year</NavDropdown.Item>
           </NavDropdown> 
       </Nav>
       <Form inline>
           <FormControl type="text" placeholder="Search..." className="mr-sm-2"/>
       </Form>
  </Navbar>
  );
};

export default navbar;
