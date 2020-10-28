import React from "react";
import Navbar from "react-bootstrap/Navbar";
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
  </Navbar>
  );
};

export default navbar;
