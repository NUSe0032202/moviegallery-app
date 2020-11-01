import React, { Component } from "react";
import { Row, Col, Fade } from "react-bootstrap";
import "./MovieDisplay.css";
import axios from "axios";
import { CSSTransition } from "react-transition-group";
import ReactSpinner from "react-bootstrap-spinner";
import "./DisplayTransition.css";
import { connect } from "react-redux";
import {withRouter } from 'react-router-dom';

import Images from "./Image";

const BACKEND_API_URL = "https://sometimes-maybe-flaky-api.gdshive.io";

const mapStateToProps = (state) => {
  return { query: state };
};

class MovieDisplay extends Component {
  state = {
    movieData: [],
    inProp: false,
    searchBy: "",
    filterBy: "",
  };

  constructor() {
    super();
  }

  componentDidMount() {
    axios.get(`${BACKEND_API_URL}`).then((res) => {
      this.setState({ movieData: res.data, inProp: true });
    }).catch(()=> {
        alert("Please try refreshing the page");
    });
  }
  
  renderRows() {
    let ref = this.state.movieData;

    if (this.props.query.query.payload === "Genre") {
      ref = ref.filter((movie, index) => {
        return movie.genre.includes(this.props.query.search.payload);
      });
    }

    if (this.props.query.query.payload === "Year") {
      if (this.props.query.search.payload !== "") {
        ref = ref.filter((movie, index) => {
          return (
            movie.productionYear === Number(this.props.query.search.payload)
          );
        });
      }
    }

    let toRender = [],
      columns = [];
    ref.forEach((movie, index) => {
      let getMovie = movie.image.split(".")[0];
      columns.push(
        <Col md={4} key={index} onClick={() => this.props.history.push({pathname:'/MovieDetails',state:this.state.movieData[index]}) }>
          <Images name={getMovie}/>
        </Col>
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
        <div className="spacer"></div>
        {/* {setInterval(() => {console.log("Int");
        console.log(this.props.query.query.searchBy);
        console.log(this.props.query.query.filterBy);
        console.log(this.props.query.query)},1000)} */}
        {/* <CSSTransition
          in={this.state.inProp}
          timeout={200}
          classNames="list"
          unmountOnExit
        > */}
        {/* <h2>Welcome, click on a movie to get started</h2> */}
        {/* </CSSTransition> */}
        {this.state.inProp ? (
          this.renderRows()
        ) : (
          <ReactSpinner type="border" color="primary" size="5" />
        )}
      </div>
    );
  }
}
export default connect(mapStateToProps)(MovieDisplay);
