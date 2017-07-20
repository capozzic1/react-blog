import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import HeaderImg from './HeaderImg.js';

describe('<HeaderImg />', function(){
  //it should have 4 links, lucidwebdream, about, contact, portfolio
  it('should have an image', function(){
    const wrapper = shallow(<HeaderImg />);
    expect(wrapper.find('img')).to.have.length(1);
  });

});
