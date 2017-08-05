import React from 'react';

import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import Home from './Home';
import Layout from '../../components/Layout/Layout';

describe('<Home />', () => {
  it('should have a Layout component', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(Layout)).to.have.length(1);
  });
});
