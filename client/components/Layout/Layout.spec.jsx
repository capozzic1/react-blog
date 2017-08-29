import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Layout from './Layout';
import Navigation from '../Navigation/Navigation';

describe('<Layout />', () => {
  it('it should have a navigation bar', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.find(Navigation)).to.have.length(1);
  });
});
