import React from 'react';

import Hours from '../assets/images/127Hours.jpg';
import Deadpool from '../assets/images/Deadpool.jpg';
import AfterEarth from '../assets/images/AfterEarth.jpg';
import AliceinWonderland from '../assets/images/AliceinWonderland.jpg';
import Barnyard from '../assets/images/Barnyard.jpg';
import Duplex from '../assets/images/Duplex.jpeg';
import Mowgli from '../assets/images/Mowgli.jpg';
import Tomorrowland from '../assets/images/Tomorrowland.jpg';

const icons = Object.freeze({Hours,Deadpool,AfterEarth,AliceinWonderland,Barnyard,Duplex
,Mowgli,Tomorrowland});

const Images = (props) => {
  return(
    <img alt="icon" src={icons[props.name]} width="380" height="380"/>
  );
};

export default Images;