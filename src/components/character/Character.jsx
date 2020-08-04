import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ image }) => (
  <figure>
    <img src={image}/>
  </figure>
);

Character.propTypes = {
  image: PropTypes.string.isRequired
};

export default Character;
