import React from 'react';
import LoginForm from './LoginForm';
import {expect} from 'chai';
import {shallow} from 'enzyme';

describe('<LoginForm />', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LoginForm/>);
  })
  it('Should render', () => {

    expect(wrapper).to.have.length(1);
  })

  it('Should reset text when the reset button is clicked', () => {
    // const user = wrapper.find('#username');
    // const password = wrapper.find('#password');
    // const reset = wrapper.find('.resetBtn');
    //
    // user.getElements().value = 'test1';
    // password.getElements().value = 'pw1';
    //
    // user.simulate('change', user);
    // password.simulate('change', password);
    // reset.simulate('click')
    //
    // expect(user.text()).to.equal('');

  })
});
