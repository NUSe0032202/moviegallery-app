import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "./MovieDisplay.css";

import Images from "./Image";

class MovieDisplay extends Component {
  state = {
    movies: ["Deadpool", "AfterEarth", "Hours"]
  };
  
  constructor() {
    super();
  }

  render() {
    return (
      <div className="MovieList">
        <Row>
          {this.state.movies.map((item) => {
            console.log(item);
            return (
              <Col md={4} key={item}>
                <Images name={item} />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}
export default MovieDisplay;
