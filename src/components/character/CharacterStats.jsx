import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import Stats from '../stats/Stats';



const CharacterStats = ({ character }) => (
  <section>
    <Character image={character.image} />
    <Stats
      food={character.food}
      water={character.water}
      movement={character.movement}
      gov={character.gov}
      total={character.total}
    />
  </section>
);

CharacterStats.propTypes = {
  character: PropTypes.shape({
    image: PropTypes.string.isRequired,
    food: PropTypes.number.isRequired,
    water: PropTypes.number.isRequired,
    movement: PropTypes.number.isRequired,
    gov: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
  })
};

export default CharacterStats;
