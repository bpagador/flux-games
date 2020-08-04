import React from 'react';
import PropTypes from 'prop-types';

const Stats = ({ food, water, cheer, gov, total }) => (
  <dl>
    <dt>Food</dt>
    <dd>{food}</dd>

    <dt>Water</dt>
    <dd>{water}</dd>

    <dt>Cheer</dt>
    <dd>{cheer}</dd>

    <dt>Grasshopper Attack</dt>
    <dd>{gov}</dd>

    <dt>Overall Wellness</dt>
    <dd>{total}</dd>

    <dt></dt>
  </dl>
);

Stats.propTypes = {
  food: PropTypes.number.isRequired,
  water: PropTypes.number.isRequired,
  cheer: PropTypes.number.isRequired,
  gov: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default Stats;
