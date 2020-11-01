import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { Nav, NavItem} from "react-bootstrap";
import filmLogo from "../assets/images/filmroll.png";
import { Route, Switch, Link } from "react-router-dom";
import MovieDetails from "../Details/MovieDetails";
import { connect } from "react-redux";
import MovieDisplay from "../Display/MovieDisplay";

import "./Navigation.css";

function mapDispatchToProps(dispatch) {
  return {
    addQuery: (query) => dispatch(query),
  };
}

class NavbarCustom extends Component {
  state = {
    filterBy: "Search By",
    searchBy: "",
  };

  render() {
    return (
      <div className="NavigationList">
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
          <Navbar.Brand>
            <a href="/">Gallery</a>
            <img
              src={filmLogo}
              alt="film logo"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="mr-auto">
            <NavItem>
              <Link className="nav-link" to="/MovieDetails">
                Movie Details
              </Link>
            </NavItem>
            <NavDropdown title={this.state.filterBy} id="basic-nav-dropdown">
              <NavDropdown.Item
                onSelect={() => {
                  this.setState({filterBy: "Genre"});
                  this.props.addQuery({ type: "Filter By", payload: "Genre" });
                }}
              >
                Genre
              </NavDropdown.Item>
              <NavDropdown.Item
                onSelect={() => {
                  this.setState({filterBy: "Year"});
                  this.props.addQuery({ type: "Filter By", payload: "Year" });
                }}
              >
                Year
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search By..."
              className="mr-sm-2"
              onChange={(e) => {
                this.props.addQuery({
                  type: "Search By",
                  payload: e.target.value,
                });
              }}
            />
          </Form>
        </Navbar>
        <Switch>
          <Route path="/MovieDetails" component={MovieDetails} />
          <Route path="/" component={MovieDisplay} />
        </Switch>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(NavbarCustom);
