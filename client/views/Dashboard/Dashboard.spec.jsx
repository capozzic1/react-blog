import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import Dashboard from './Dashboard';

/* work more on this test tomorrow */
describe('<Dashboard />', () => {
  it('should have some jsx elements', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.containsAllMatchingElements([
      <table>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Date</th>
        </tr>
      </table>,
    ])).to.equal(true);
  });
});
