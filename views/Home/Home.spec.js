import React from 'react';

import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import Home from './Home.js';
import Layout from '../../components/Layout/Layout.js';

describe('<Home />', function() {

  it('should have a Layout component', function(){
    const wrapper = shallow(<Home />);
    expect(wrapper.find(Layout)).to.have.length(1);
  })
})
