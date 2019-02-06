import { connectRouter, RouterState } from 'connected-react-router';
import { createBrowserHistory, History } from 'history';
import { combineReducers, createStore, Reducer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { counterReducer, CounterState } from './counter/counter.reducer';
import { homepageReducer, HomepageState } from './homepage/homepage.reducer';

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

// Define a preloadedState for createStore()
// See: https://redux.js.org/recipes/structuring-reducers/initializing-state
const preloadedState: any = {
    homepageState: {
        surveys: [
            {
                key: '1',
                name: 'Zoo visit questionnaire',
                createdAt: 1549238929,
                modifiedAt: 1549325329,
                questionCount: 7,
            },
            {
                key: '2',
                name: 'Shopping preferences survey',
                createdAt: 1547049812,
                modifiedAt: 1547827412,
                questionCount: 3,
            },
        ],
    },
};

export const store = createStore(combineReducers(reducers(history)), preloadedState, composeWithDevTools());
