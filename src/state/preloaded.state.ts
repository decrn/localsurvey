import { DeepPartial } from 'redux';
import uuid from 'uuid/v4';
import { AppState } from '.';

// Define a preloadedState for createStore()
// See: https://redux.js.org/recipes/structuring-reducers/initializing-state
export const preloadedState: DeepPartial<AppState> = {
    homepageState: {
        surveys: [
            {
                key: uuid(), // https://www.npmjs.com/package/uuid
                name: 'Zoo visit questionnaire',
                createdAt: 1549238929,
                modifiedAt: 1549325329,
                questionCount: 7,
            },
            {
                key: uuid(),
                name: 'Shopping preferences survey',
                createdAt: 1547049812,
                modifiedAt: 1547827412,
                questionCount: 3,
            },
        ],
    },
};
