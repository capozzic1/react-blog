import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import PostList from './PostList.js';


describe('<PostList />', function(){
  //it should have 4 links, lucidwebdream, about, contact, portfolio
  it('should have a container for holding posts', function(){
    const wrapper = shallow(<PostList />);
    expect(wrapper.find('div')).to.have.length(1);
  });

});
