import React from 'react';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import { LoginPage } from './LoginPage';

describe('<LoginPage />', () => {
  it('Should render', () => {
    const wrapper = shallow(<LoginPage />);

    expect(wrapper).to.have.length(1);
  });
});
