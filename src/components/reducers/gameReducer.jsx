export const initialState = {
  character: {
    image: 'https://vignette.wikia.nocookie.net/disney-fan-fiction/images/7/74/Francisbugslife.png/revision/latest/scale-to-width-down/340?cb=20130813222020',
    food: 10,
    water: 15,
    cheer: 25,
    gov: 0,
    total: 50
  },
  fam: {
    image: 'https://vignette.wikia.nocookie.net/pixar/images/2/2a/Dot.png/revision/latest?cb=20110416122815',
    food: 10,
    water: 15,
    cheer: 25,
    gov: 0,
    total: 50
  },
  grasshopper: {
    attack: 50
  }

};

export default function reducer(state, action) {
  switch(action.type) {
    case 'SHARE_MEAL':
      return { ...state, 
        fam: { 
          ...state.fam, 
          food: state.fam.food + state.character.food, 
          water: state.fam.water + state.character.water } };
    case 'SET_FAM':
      return { ...state, fam: action.payload };
    default:
      return state;
  }
}
