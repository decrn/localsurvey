import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AppContainer } from './app/app.container';
import * as serviceWorker from './app/service-worker';
import { history, store } from './state';
import './styles/index.less';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={null}>
            {' '}
            {/* See: https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md */}
            <ConnectedRouter history={history}>
                <AppContainer />
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
