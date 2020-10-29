import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "./MovieDisplay.css";
import axios from 'axios';

import Images from "./Image";

const BACKEND_API_URL = 'https://sometimes-maybe-flaky-api.gdshive.io';

class MovieDisplay extends Component {
  state = {
    movies: ["Deadpool", "AfterEarth", "Hours", "Barnyard", "Duplex", "Tomorrowland", "AliceinWonderland","Mowgli"]
  };

  constructor() {
    super();
  }
  
  componentDidMount () {
     axios.get(`${BACKEND_API_URL}`).then(
         res => {
             console.log(res);
         }
     );
  }

  renderRows() {
    let movies = this.state.movies;
    let toRender = [],
      columns = [];
    movies.forEach((movie, index) => {
      columns.push(
        <Col md={4} key={index}>
          <Images name={movie} />
        </Col>
      );
      if (((index + 1) % 3 === 0) || (index === (movies.length - 1))) {
        toRender.push(<Row key={index}>{columns}</Row>);
        columns = [];
      }
    });
    return toRender;
  }

  render() {
    return (
      <div className="MovieList">
        {this.renderRows()}
      </div>
    );
  }
}
export default MovieDisplay;
