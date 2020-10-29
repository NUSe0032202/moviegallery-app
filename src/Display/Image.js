import React from 'react';

import Hours from '../assets/images/127Hours.jpg';
import Deadpool from '../assets/images/Deadpool.jpg';
import AfterEarth from '../assets/images/AfterEarth.jpg';

const icons = Object.freeze({Hours,Deadpool,AfterEarth});

const Images = (props) => {
  return(
    <img alt="icon" src={icons[props.name]} />
  );
};

export default Images;