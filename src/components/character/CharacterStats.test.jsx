import React from 'react';
import { shallow } from 'enzyme';
import CharacterStats from './CharacterStats';


describe('CharacterStats component', () => {
  it('renders character with stats', () => {
    const character = {
      image: 'http://test.jpeg',
      food: 25,
      water: 25,
      movement: 25,
      gov: -50,
      total: 25
    };

    const wrapper = shallow(<CharacterStats character={character} />);
    expect(wrapper).toMatchSnapshot();
  });
});
