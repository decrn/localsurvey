import './styles/index.less';
import React from 'react';
// tslint:disable-next-line:import-name
import ReactDOM from 'react-dom';
import { AppContainer } from './app/app.container';
import * as serviceWorker from './app/service-worker';
import { createStore } from 'redux';
import { store } from './state';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
