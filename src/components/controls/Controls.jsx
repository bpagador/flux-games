import React from 'react';
import styles from './Controls.css';
import { useDispatch } from '../../hooks/gameContext';

const Controls = () => {
  const dispatch = useDispatch ();

  return (
    <section className={styles.Controls}>
      <button onClick={() => dispatch({ type: 'SHARE_MEAL' })}>Share a meal</button>
      <button onClick={() => dispatch({ type: 'THROW_PARTY' })}>Throw a bug party</button>
      <button onClick={() => dispatch({ type: 'ATTACK' })}>Hark! Grasshopper attack!</button>
      <button onClick={() => dispatch({ type: 'RESCUE' })}>Bug fam to the rescue!</button>
    </section>
  );
};

export default Controls;
