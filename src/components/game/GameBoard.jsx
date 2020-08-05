import React from 'react';
import { useCharacter, useFam } from '../../hooks/gameContext';
import CharacterStats from '../character/CharacterStats';
import styles from './GameBoard.css';
import Controls from '../controls/Controls';

const GameBoard = () => {
  const character = useCharacter();
  const fam = useFam();

  return (
    <section className={styles.GameBoard}>
      <CharacterStats character={character} />
      <Controls />
      <CharacterStats character={fam} />
    </section>
  );
};

export default GameBoard;
