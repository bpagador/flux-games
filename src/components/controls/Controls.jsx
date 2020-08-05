import React from 'react';
import styles from './Controls.css';
import { useDispatch } from '../../hooks/gameContext';

const Controls = () => {
  const dispatch = useDispatch ();

  return (
    <section className={styles.Controls}>
      <button onClick={() => dispatch({ type: 'SHARE_MEAL' })}>Share a meal</button>
      <button>Throw a bug party</button>
      <button>Hark! Grasshopper attack!</button>
      <button>Bug fam to the rescue!</button>
    </section>
  );
};

export default Controls;
