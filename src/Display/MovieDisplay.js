import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "./MovieDisplay.css";
import axios from 'axios';

import Images from "./Image";

const BACKEND_API_URL = 'https://sometimes-maybe-flaky-api.gdshive.io';

class MovieDisplay extends Component {
  state = {
    movieData: []  
};

  constructor() {
    super();
  }
  
  componentDidMount () {
     axios.get(`${BACKEND_API_URL}`).then(
         res => {
             console.log(res);
             this.setState({movieData: res.data});
         }
     );
  }

  renderRows() {
    let ref = this.state.movieData;
    if(this.props.searchBy) {
        if(this.props.filterBy === "Genre") {
            console.log("List component genre");
            ref = ref.filter(movie => {
                return movie.genre.includes(this.props.searchBy);
            });
        }

        if(this.props.filterBy === "Year") {
            console.log("List component year");
            ref = ref.filter(movie => {
                return movie.productionYear === Number(this.props.searchBy);
            });
        }
    }
    let toRender = [], columns = [];
    ref.forEach((movie, index) => {
     let getMovie = movie.image.split('.')[0];
      columns.push(
        <Col md={4} key={index}>
          <Images name={getMovie} />
        </Col>
      );
      if (((index + 1) % 3 === 0) || (index === (ref.length - 1))) {
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
