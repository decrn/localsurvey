import * as React from 'react';
import { shallow } from 'enzyme';
import { AppContainer } from './app.container';

it('renders without crashing', () => {
  shallow(<AppContainer />);
});
