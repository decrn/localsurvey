import { DeepPartial } from 'redux';
import uuid from 'uuid/v4';
import { Environment } from '../common/types/environment.type';
import { SurveyStatus } from '../common/types/survey-status.type';
import { AppState } from './index';

// Define a preloadedState for createStore()
// See: https://redux.js.org/recipes/structuring-reducers/initializing-state

export const DEFAULT_STATE: { [key in Environment]: DeepPartial<AppState> } = {
    [Environment.Production]: {
        surveys: {
            list: [
                {
                    key: uuid(), // https://www.npmjs.com/package/uuid
                    name: "Papa John's Innately Interesting Inquiry",
                    createdAt: 1542225329,
                    modifiedAt: 1549233329,
                    questionCount: 11,
                    status: SurveyStatus.Published,
                },
            ],
        },
    },
    [Environment.Development]: {
        surveys: {
            list: [
                {
                    key: uuid(), // https://www.npmjs.com/package/uuid
                    name: "Papa John's Innately Interesting Inquiry",
                    createdAt: 1542225329,
                    modifiedAt: 1549233329,
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
    },
};
