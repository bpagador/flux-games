import React, { useEffect } from 'react';
import { useCharacter, useFam, useDispatch } from '../../hooks/gameContext';
import CharacterStats from '../character/CharacterStats';
import styles from './GameBoard.css';
import Controls from '../controls/Controls';

const GameBoard = () => {
  const dispatch = useDispatch();
  const character = useCharacter();
  const fam = useFam();

  useEffect(() => {
    if(fam.total === 1000) dispatch({
      type: 'SET_NEW_FAM',
      payload: {
        image: 'https://lh3.googleusercontent.com/proxy/4FkCq9-jKy2ZpfDDsnKRfx1tNt0gste5iORxiArXeVGxOva-AhSc_AG0noq_SMNRGVP_yWfLGeFWB4P-uyKyvES3ZK1dXpJqHO0cx6SY62GGsQhWBqpCziIfGuSYej-L20JeuLrhr3VEalM',
        food: 10,
        water: 10,
        cheer: 20,
        gov: 0,
        total: 0
      }
    });
  }, [fam.total]);

  useEffect(() => {
    if(character.food === 0) dispatch({
      type: 'SET_NEW_CHARACTER',
      payload: {
        image: 'https://vignette.wikia.nocookie.net/parody/images/0/01/Rosie_the_Spider.jpg/revision/latest/scale-to-width-down/340?cb=20200728001539',
        food: 100,
        water: 100,
        cheer: 20,
        gov: 0,
        total: 0
      }
    });
  });

  return (
    <section className={styles.GameBoard}>
      <CharacterStats character={character} />
      <Controls />
      <CharacterStats character={fam} />
    </section>
  );
};

export default GameBoard;
