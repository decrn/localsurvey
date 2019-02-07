import { connectRouter, RouterState } from 'connected-react-router';
import { createBrowserHistory, History } from 'history';
import { combineReducers, createStore, Reducer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { mapStringToEnvironment } from '../common/mappers/environment.mapper';
import { Environment } from '../common/types/environment.type';
import { counterReducer, CounterState } from './counter/counter.reducer';
import { DEFAULT_STATE } from './state.constants';
import { surveysReducer, SurveysState } from './surveys/surveys.reducer';

export interface AppState {
    counterState: CounterState;
    surveys: SurveysState;
    router: RouterState;
}

export const reducers = (history: History<any>): { [key in keyof AppState]: Reducer<any, any> } => ({
    counterState: counterReducer,
    surveys: surveysReducer,
    router: connectRouter(history),
});

export const history = createBrowserHistory({ basename: 'localsurvey' });

const environment: Environment = mapStringToEnvironment(process.env.NODE_ENV);

export const store = createStore(combineReducers(reducers(history)), DEFAULT_STATE[environment], composeWithDevTools());
