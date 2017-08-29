import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';

import PostList from './PostList';


describe('<PostList />', () => {
  // it should have 4 links, lucidwebdream, about, contact, portfolio
  it('should have a container for holding posts', () => {
    const wrapper = shallow(<PostList />);

    expect(wrapper.find('div')).to.have.length(1);
  });
});
