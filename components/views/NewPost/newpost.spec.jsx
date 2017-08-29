import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import NewPost from './NewPost';

describe('<NewPost />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NewPost />);
  });
  /*
  -h2 or h3 that says "add new post"
  -it should have a title input
  -it should have maybe some formatting options for text?
  -it should have a text area for body text
  */

  it('should have an h2 that says new post', () => {
    expect(wrapper.find('h2')).to.have.length(1);
  });

  it('should have a title input', () => {
    expect(wrapper.find('input')).to.have.length(1);
  });

  it('should have a textarea', () => {
    expect(wrapper.find('textarea')).to.have.length(1);
  });
});
