import React from 'react';
import { useCharacter, useFam } from '../../hooks/gameContext';
import CharacterStats from '../character/CharacterStats';

const GameBoard = () => {
  const character = useCharacter();
  const fam = useFam();

  return (
    <section>
      <CharacterStats character={character} />
      <CharacterStats character={fam} />
    </section>
  );
};

export default GameBoard;
