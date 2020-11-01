import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Card } from "react-bootstrap";

import "./MovieDetails.css";

class MovieDetails extends Component {
 
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="spacer"></div>
        {this.props.location.state ? (
          <Card bg="light" className="text-center p-3">
            <Card.Body>
              <Card.Title>{this.props.location.state.name}</Card.Title>
              <br/>
              <Card.Subtitle className="mb-2 text-muted"><p>Genre: {this.props.location.state.genre}</p>
              <p>Year of Release: {this.props.location.state.productionYear}</p>
              </Card.Subtitle>
              <Card.Text>
                <br/>
                {this.props.location.state.synopsis.replaceAll("<br />", "\n")}
              </Card.Text>
            </Card.Body>
          </Card>
        ) : (
          <h2>Click on a movie in the main page for details!</h2>
        )}
      </div>
    );
  }
}

export default withRouter(MovieDetails);
