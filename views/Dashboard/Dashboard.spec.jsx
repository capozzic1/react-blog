import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../../components/Layout/Layout';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('should have a Layout component', () => {
    const wrapper = (<Dashboard />);
    expect(wrapper.containsAllMatchingElements([

    ]).to.equal(true);
  });
});
