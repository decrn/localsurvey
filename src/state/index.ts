import { connectRouter, RouterState } from 'connected-react-router';
import { createBrowserHistory, History } from 'history';
import { combineReducers, createStore, Reducer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { counterReducer, CounterState } from './counter/counter.reducer';

export interface AppState {
    counterState: CounterState;
    router: RouterState;
}

export const reducers = (history: History<any>): { [key in keyof AppState]: Reducer<any, any> } => ({
    counterState: counterReducer,
    router: connectRouter(history),
});

export const history = createBrowserHistory({ basename: 'localsurvey' });

export const store = createStore(combineReducers(reducers(history)), composeWithDevTools());
