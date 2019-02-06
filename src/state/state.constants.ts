import { DeepPartial } from 'redux';
import uuid from 'uuid/v4';
import { Environment } from '../common/types/environment.type';
import { AppState } from './index';

// Define a preloadedState for createStore()
// See: https://redux.js.org/recipes/structuring-reducers/initializing-state

export const DEFAULT_STATE: { [key in Environment]: DeepPartial<AppState> } = {
    [Environment.Production]: {},
    [Environment.Development]: {
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
    },
};
