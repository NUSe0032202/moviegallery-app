import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Card } from "react-bootstrap";

import "./MovieDetails.css";

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    if (!(this.props.location.state === null)) {
      console.log("In movie details");
      console.log(this.props.location.state);
    }
  }
  render() {
    return (
      <div>
        <div className="spacer"></div>
        {this.props.location.state ? (
          <Card bg="light">
            <Card.Body>
              <Card.Title>{this.props.location.state.name}</Card.Title>
            </Card.Body>
            <Card.Text>
              <p>Genre: {this.props.location.state.genre}</p>
              <p>Year of Release: {this.props.location.state.productionYear}</p>
              <p>Synopsis: {this.props.location.state.synopsis.replaceAll("<br />","\n")}</p>
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
