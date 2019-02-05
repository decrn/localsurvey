import { connectRouter } from 'connected-react-router';
import { createBrowserHistory, History } from 'history';
import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { counterReducer, CounterState } from './counter/counter.reducer';

export interface AppState {
    counterState: CounterState;
}

export const reducers = (history: History<any>) => ({
    counterState: counterReducer,
    router: connectRouter(history),
});

export const history = createBrowserHistory({ basename: 'localsurvey' });

export const store = createStore(combineReducers(reducers(history)), composeWithDevTools());
