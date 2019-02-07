import { DeepPartial } from 'redux';
import uuid from 'uuid/v4';
import { Environment } from '../common/types/environment.type';
import { SurveyStatus } from '../common/types/survey-status.type';
import { AppState } from './index';

const exampleDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat enim Polemonis. Iam
contemni non poteris. Equidem etiam Epicurum, in physicis quidem, Democriteum puto. An quod ita callida est, ut
optime possit architectari voluptates? Iam quae corporis sunt, ea nec auctoritatem cum animi partibus,
comparandam et cognitionem habent faciliorem. Duo Reges: constructio interrete. Sine ea igitur iucunde negat
posse se vivere? Cur tantas regiones barbarorum pedibus obiit, tot maria transmisit? Bonum incolumis acies:
misera caecitas. Cur tantas regiones barbarorum pedibus obiit, tot maria transmisit?`;

const exampleBranding = {
    introductionMessage: '',
    logoUrl: '',
    organisationName: 'Organisation',
    accentColor: '#2196f3',
    footerText: '',
    completionMessage: '',
};

// Define a preloadedState for createStore()
// See: https://redux.js.org/recipes/structuring-reducers/initializing-state

export const DEFAULT_STATE: { [key in Environment]: DeepPartial<AppState> } = {
    [Environment.Production]: {
        homepageState: {
            surveys: [
                {
                    key: uuid(), // https://www.npmjs.com/package/uuid
                    name: "Papa John's Innately Interesting Inquiry",
                    description: exampleDescription,
                    createdAt: 1542225329,
                    modifiedAt: 1549233329,
                    questionCount: 11,
                    status: 'published',
                    branding: exampleBranding,
                },
            ],
        },
        detailState: {
            survey: {
                key: uuid(), // https://www.npmjs.com/package/uuid
                name: "Papa John's Innately Interesting Inquiry",
                description: exampleDescription,
                createdAt: 1542225329,
                modifiedAt: 1549233329,
                questionCount: 11,
                status: SurveyStatus.InProgress,
                branding: exampleBranding,
            },
        },
    },
    [Environment.Development]: {
        homepageState: {
            surveys: [
                {
                    key: uuid(), // https://www.npmjs.com/package/uuid
                    name: "Papa John's Innately Interesting Inquiry",
                    description: exampleDescription,
                    createdAt: 1542225329,
                    modifiedAt: 1549233329,
                    questionCount: 11,
                    status: 'published',
                    branding: exampleBranding,
                },
                {
                    key: uuid(), // https://www.npmjs.com/package/uuid
                    name: 'Zoo visit questionnaire',
                    description: exampleDescription,
                    createdAt: 1549238929,
                    modifiedAt: 1549325329,
                    questionCount: 7,
                    status: 'warning',
                    branding: exampleBranding,
                },
                {
                    key: uuid(),
                    name: 'Shopping preferences survey',
                    description: exampleDescription,
                    createdAt: 1547049812,
                    modifiedAt: 1547827412,
                    questionCount: 3,
                    status: 'inprogress',
                    branding: exampleBranding,
                },
                {
                    key: uuid(),
                    name: "Amy Ableton's Amazing Audit",
                    description: exampleDescription,
                    createdAt: 1511049812,
                    modifiedAt: 1522827412,
                    questionCount: 5,
                    status: 'cancelled',
                    branding: exampleBranding,
                },
            ],
        },
        detailState: {
            survey: {
                key: uuid(), // https://www.npmjs.com/package/uuid
                name: "Papa John's Innately Interesting Inquiry",
                description: exampleDescription,
                createdAt: 1542225329,
                modifiedAt: 1549233329,
                questionCount: 11,
                // TODO: why do I need to use the enum here, while string is fine for homepage?
                status: SurveyStatus.InProgress,
                branding: exampleBranding,
            },
        },
    },
};
