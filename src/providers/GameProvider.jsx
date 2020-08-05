import React, { useReducer } from 'react';
import { GameContext } from '../hooks/gameContext';
import reducer, { initialState } from '../components/reducers/gameReducer';


const GameProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  //why are state and dispatch inside square brackets?

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
