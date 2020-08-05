export const initialState = {
  character: {
    image: 'https://vignette.wikia.nocookie.net/disney-fan-fiction/images/7/74/Francisbugslife.png/revision/latest/scale-to-width-down/340?cb=20130813222020',
    food: 100,
    water: 100,
    cheer: 20,
    gov: 0,
    total: 0
  },

  fam: {
    image: 'https://vignette.wikia.nocookie.net/pixar/images/2/2a/Dot.png/revision/latest?cb=20110416122815',
    food: 10,
    water: 10,
    cheer: 20,
    gov: 0,
    total: 0
  },

  give: {
    water: 10,
    food: 10,
    wellness: 20,
    cheer: 20
  },

  grasshopper: {
    event: 1,
    attack: 50
  }

};

export default function reducer(state, action) {
  switch(action.type) {
    case 'SHARE_MEAL':
      return { ...state, 
        fam: { 
          ...state.fam, 
          food: state.fam.food + state.give.food, 
          water: state.fam.water + state.give.water,
          total: state.fam.total + state.give.wellness },

        character: {
          ...state.character,
          food: state.character.food - state.give.food,
          water: state.character.water - state.give.water,
          cheer: state.character.cheer + state.give.cheer,
          total: state.character.total + state.give.wellness
        }
      };
    case 'THROW_PARTY':
      return { ...state, 
        fam: { 
          ...state.fam, 
          cheer: state.fam.cheer + state.give.cheer },

        character: {
          ...state.character,
          cheer: state.character.cheer + state.give.cheer
        }
      };
    case 'ATTACK':
      return { ... state,
        fam: {
          ...state.fam,
          gov: state.fam.gov + state.grasshopper.event,
          total: state.fam.total - state.grasshopper.attack
        },
        character: {
          ...state.character,
          gov: state.character.gov + state.grasshopper.event,
          total: state.character.gov - state.grasshopper.attack
        } };
    case 'RESCUE':
      return { ...state,
        fam: {
          ...state.fam,
          food: state.fam.food + state.give.food,
          water: state.fam.water + state.give.water,
          total: state.fam.total + state.grasshopper.attack
        },
        character: {
          ...state.character,
          food: state.character.food + state.give.food,
          water: state.character.water + state.give.water,
          total: state.character.total + state.grasshopper.attack
        } };
    case 'SET_NEW_FAM':
      return { ...state, fam: action.payload };
    case 'SET_NEW_CHARACTER':
      return { ...state, character: action.payload };
    default:
      return state;
  }
}
