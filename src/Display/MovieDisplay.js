import React, { Component } from "react";
import { Row, Col, Fade} from "react-bootstrap";
import "./MovieDisplay.css";
import axios from "axios";
import { CSSTransition } from "react-transition-group";
import ReactSpinner from 'react-bootstrap-spinner';
import "./DisplayTransition.css";

import Images from "./Image";

const BACKEND_API_URL = "https://sometimes-maybe-flaky-api.gdshive.io";

class MovieDisplay extends Component {
  state = {
    movieData: [],
    inProp: false,
  };

  constructor() {
    super();
  }

  componentDidMount() {
    axios.get(`${BACKEND_API_URL}`).then((res) => {
      console.log(res);
      this.setState({ movieData: res.data, inProp: true });
    });
  }
  renderRows() {
    let ref = this.state.movieData;
    if (this.props.searchBy) {
      if (this.props.filterBy === "Genre") {
        console.log("List component genre");
        ref = ref.filter((movie, index) => {
          return movie.genre.includes(this.props.searchBy);
        });
      }

      if (this.props.filterBy === "Year") {
        console.log("List component year");
        ref = ref.filter((movie, index) => {
          return movie.productionYear === Number(this.props.searchBy);
        });
      }
    }
    let toRender = [],
      columns = [];
    ref.forEach((movie, index) => {
      let getMovie = movie.image.split(".")[0];
      columns.push(
        <Fade in={this.state.inProp}>
          <Col md={4} key={index}>
            <Images name={getMovie} />
          </Col>
        </Fade>
      );
      if ((index + 1) % 3 === 0 || index === ref.length - 1) {
        toRender.push(<Row key={index}>{columns}</Row>);
        columns = [];
      }
    });
    return toRender;
  }

  render() {
    return (
      <div className="MovieList">
        {/* <CSSTransition
          in={this.state.inProp}
          timeout={200}
          classNames="list"
          unmountOnExit
        > */}
          {/* <h2>Welcome, click on a movie to get started</h2> */}
        {/* </CSSTransition> */}
        {this.state.inProp ?    
          this.renderRows()
         : 
         <ReactSpinner type="border" color="primary" size="5" />
        }
      </div>
    );
  }
}
export default MovieDisplay;
