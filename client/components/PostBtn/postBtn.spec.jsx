import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import PostBtn from './PostBtn';

describe('<PostBtn />', () => {
  it('should have a button', () => {
    const wrapper = shallow(<PostBtn />);
    expect(wrapper.find('button')).to.have.length(1);
  });
});
