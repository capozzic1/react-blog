import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import HeaderImg from './HeaderImg';

describe('<HeaderImg />', () => {
  // it should have 4 links, lucidwebdream, about, contact, portfolio
  it('should have an image', () => {
    const wrapper = shallow(<HeaderImg />);
    // expect(wrapper.find('img')).to.have.length(1);
  });
});
