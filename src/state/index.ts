import { CounterState, counterReducer } from './counter/counter.reducer';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export interface AppState {
    counterState: CounterState;
}

export const reducers = {
    counterState: counterReducer,
};

export const store = createStore(combineReducers(reducers), composeWithDevTools(applyMiddleware(reduxThunk)));
