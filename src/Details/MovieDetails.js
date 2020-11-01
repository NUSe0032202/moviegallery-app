import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Card } from "react-bootstrap";

import "./MovieDetails.css";

class MovieDetails extends Component {
   state = {
      movieData: {}
   };

  constructor(props) {
    super(props);
    if (!(this.props.location.state === null)) {
      console.log("In movie details");
      console.log(this.props.location.state);
      this.state.movieData = this.props.location.state;
    }
  }
  render() {
    return (
      <div>
        <div className="spacer"></div>
        {this.state.movieData ? (
          <Card bg="light">
            <Card.Body>
              <Card.Title>{this.state.movieData.name}</Card.Title>
            </Card.Body>
            <Card.Text>
              <p>Genre: {this.state.movieData.genre}</p>
              <p>Year of Release: {this.state.movieData.productionYear}</p>
              <p>Synopsis: {this.state.movieData.synopsis.replaceAll("<br />","\n")}</p>
            </Card.Text>
          </Card>
        ) : (
          <h2>Click on a movie in the main page for details!</h2>
        )}
      </div>
    );
  }
}

export default withRouter(MovieDetails);
