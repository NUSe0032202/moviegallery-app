import React from 'react';

import movie4 from '../assets/images/movie4.jpg';
import movie1 from '../assets/images/movie1.jpg';
import movie6 from '../assets/images/movie6.jpg';
import movie7 from '../assets/images/movie7.jpg';
import movie2 from '../assets/images/movie2.jpg';
import movie3 from '../assets/images/movie3.jpeg';
import movie8 from '../assets/images/movie8.jpg';
import movie5 from '../assets/images/movie5.jpg';

const icons = Object.freeze({movie1,movie2,movie3,movie4,movie5,movie6,movie7,movie8});

const Images = (props) => {
  return(
    <img alt="icon" src={icons[props.name]} width="380" height="380"/>
  );
};

export default Images;