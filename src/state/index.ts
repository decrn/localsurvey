import { connectRouter, RouterState } from 'connected-react-router';
import { createBrowserHistory, History } from 'history';
import { combineReducers, createStore, Reducer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';
import storage from 'redux-persist/es/storage';
import { mapStringToEnvironment } from '../common/mappers/environment.mapper';
import { Environment } from '../common/types/environment.type';
import { counterReducer, CounterState } from './counter/counter.reducer';
import { DEFAULT_STATE } from './state.constants';
import { surveysReducer, SurveysState } from './surveys/surveys.reducer';

export interface AppState {
    counterState: CounterState;
    surveysState: SurveysState;
    router: RouterState;
}

const persistConfig = {
    storage,
    key: 'root',
    stateReconsiler: autoMergeLevel1, // https://github.com/rt2zz/redux-persist#state-reconciler
};

export const reducers = (history: History<any>): { [key in keyof AppState]: Reducer<any, any> } => ({
    counterState: counterReducer,
    surveysState: surveysReducer,
    router: connectRouter(history),
});

export const history = createBrowserHistory({ basename: 'localsurvey' });

const environment: Environment = mapStringToEnvironment(process.env.NODE_ENV);

const combinedReducers = persistReducer(persistConfig, combineReducers(reducers(history)));

export const store = createStore(combinedReducers, DEFAULT_STATE[environment], composeWithDevTools());

export const persistor = persistStore(store);
