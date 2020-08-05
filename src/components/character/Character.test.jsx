import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('Character component', () => {
  it('renders character', () => {
    const wrapper = shallow(<Character image="http://test.jpeg" />);
    expect(wrapper).toMatchSnapshot;
  });
});
