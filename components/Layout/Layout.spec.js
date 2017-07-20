import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Layout from './Layout.js';
import Navigation from '../Navigation/Navigation.js';

describe('<Layout />', function(){
  it('it should have a navigation bar', function(){
    const wrapper = mount(<Layout />);
    expect(wrapper.find(Navigation)).to.have.length(1);

  })

});
