import { DeepPartial } from 'redux';
import uuid from 'uuid/v4';
import { AppState } from './index';

// Define a preloadedState for createStore()
// See: https://redux.js.org/recipes/structuring-reducers/initializing-state
export const preloadedState: DeepPartial<AppState> = {
    homepageState: {
        surveys: [
            {
                key: uuid(), // https://www.npmjs.com/package/uuid
                name: "Papa John's Innately Interesting Inquiry",
                createdAt: 1549233329,
                modifiedAt: 1542225329,
                questionCount: 11,
                status: 'published',
            },
            {
                key: uuid(), // https://www.npmjs.com/package/uuid
                name: 'Zoo visit questionnaire',
                createdAt: 1549238929,
                modifiedAt: 1549325329,
                questionCount: 7,
                status: 'warning',
            },
            {
                key: uuid(),
                name: 'Shopping preferences survey',
                createdAt: 1547049812,
                modifiedAt: 1547827412,
                questionCount: 3,
                status: 'inprogress',
            },
            {
                key: uuid(),
                name: "Amy Ableton's Amazing Audit",
                createdAt: 1511049812,
                modifiedAt: 1522827412,
                questionCount: 5,
                status: 'cancelled',
            },
        ],
    },
};
