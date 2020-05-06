import React from 'react';
import { shallow } from 'enzyme';
import HelloWorld from '../HelloWorld';

describe('components | HelloWorld', () => {
  it('renders without crashing', () => {
    shallow(<HelloWorld />);
  });
});
