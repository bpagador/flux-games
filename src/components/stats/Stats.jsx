import React from 'react';
import PropTypes from 'prop-types';

const Stats = ({ food, water, movement, gov }) => (
  <dl>
    <dt>Food</dt>
    <dd>{food}</dd>

    <dt>Water</dt>
    <dd>{water}</dd>

    <dt>Movement</dt>
    <dd>{movement}</dd>

    <dt>Capitalism</dt>
    <dd>{gov}</dd>

    <dt></dt>
  </dl>
);

Stats.propTypes = {
  food: PropTypes.number.isRequired,
  water: PropTypes.number.isRequired,
  movement: PropTypes.number.isRequired,
  gov: PropTypes.number.isRequired
};
