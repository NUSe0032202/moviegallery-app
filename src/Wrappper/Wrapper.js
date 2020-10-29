import React, { Component } from "react";

import MovieDisplay from "../Display/MovieDisplay";
import Navigation from "../Navbar/Navigation";

import "./Wrapper.css";

class Wrapper extends Component {
  state = {
    filter: "",
    searchBy: "",
  };

  filterChangeHandler = (filterBy) => {
    console.log("Called from wrapper: " + filterBy);
    this.setState({ filter: filterBy });
  };

  searchChangeHandler = (searchBy) => {
    console.log("Called from wrapper: " + searchBy);
    this.setState({ searchBy: searchBy });
  };

  render() {
    return (
      <div className="Wrapper">
        <Navigation filterCallBack={this.filterChangeHandler} searchCallBack={this.searchChangeHandler}/>
        <div className="spacer"></div>
        <MovieDisplay filterBy={this.state.filter} searchBy={this.state.searchBy}/>
      </div>
    );
  }
}

export default Wrapper;
