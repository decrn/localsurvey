import { shallow } from 'enzyme';
import * as React from 'react';
import { AppContainer } from './app.container';

it('renders without crashing', () => {
    shallow(<AppContainer />);
});
