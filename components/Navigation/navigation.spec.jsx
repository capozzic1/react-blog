import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Navigation from './Navigation';


describe('<Navigation />', function(){
  //it should have 4 links, lucidwebdream, about, contact, portfolio
  it('should have 4 links', function(){
    const wrapper = shallow(<Navigation />);
    expect(wrapper.find('a')).to.have.length(4);
  });

});
