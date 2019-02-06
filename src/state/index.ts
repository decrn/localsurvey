import { connectRouter, RouterState } from 'connected-react-router';
import { createBrowserHistory, History } from 'history';
import { combineReducers, createStore, Reducer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { counterReducer, CounterState } from './counter/counter.reducer';
import { homepageReducer, HomepageState } from './homepage/homepage.reducer';
import { preloadedState } from './preloaded.state';

export interface AppState {
    counterState: CounterState;
    homepageState: HomepageState;
    router: RouterState;
}

export const reducers = (history: History<any>): { [key in keyof AppState]: Reducer<any, any> } => ({
    counterState: counterReducer,
    homepageState: homepageReducer,
    router: connectRouter(history),
});

export const history = createBrowserHistory({ basename: 'localsurvey' });

export const store = createStore(combineReducers(reducers(history)), preloadedState, composeWithDevTools());
