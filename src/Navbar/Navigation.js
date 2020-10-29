import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import filmLogo from "../assets/images/filmroll.png";

class NavbarCustom extends Component {
  state = {
      filter: "",
      searchBy: ""
  }

  componentDidUpdate (props,prevState) {
      if(prevState.filter !== this.state.filer) {
          //console.log("Filter changed " + this.state.filter);
          //console.log("SearchBy: " + this.state.searchBy);
      }
  }

  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand>
          Gallery
          <img
            src={filmLogo}
            alt="film logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <NavDropdown title="Search By" id="basic-nav-dropdown">
            <NavDropdown.Item
              onSelect={() => {
                this.props.filterCallBack("Genre");
              }}
            >
              Genre
            </NavDropdown.Item>
            <NavDropdown.Item
              onSelect={() => {
                this.props.filterCallBack("Year");
              }}
            >
              Year
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search..."
            className="mr-sm-2"
            onChange={e => 
               this.props.searchCallBack(e.target.value)}
          />
        </Form>
      </Navbar>
    );
  }
}

export default NavbarCustom;
