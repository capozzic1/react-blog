import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Navigation from './Navigation';


describe('<Navigation />', () => {
  // it should have 4 links, lucidwebdream, about, contact, portfolio
  it('should have 4 links', () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper.find('Link')).to.have.length(5);
  });
});
