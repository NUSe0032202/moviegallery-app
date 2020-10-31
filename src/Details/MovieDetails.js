import React, { Component } from "react";
import {withRouter } from 'react-router-dom';

import "./MovieDetails.css";

class MovieDetails extends Component {
  render() {
    return (<div> <div className="spacer"></div>
    <h2>Movie Details!</h2></div>);
  }
}

export default withRouter(MovieDetails);
