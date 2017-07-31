import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import SinglePost from './SinglePost';


describe('<SinglePost />', () => {
  beforeEach(() => {
    wrapper = shallow(<SinglePost />);
  });
  // it should have 4 links, lucidwebdream, about, contact, portfolio
  it('should have an h2 title', () => {
    expect(wrapper.find('h2')).to.have.length(1);
  });
  it('should have an h3 author and h3 timestamp', () => {
    expect(wrapper.find('h3')).to.have.length(2);
  });

  it('should have a p body', () => {
    expect(wrapper.find('p')).to.have.length(1);
  });
});
