import { Survey } from '../../common/types/survey';

export interface HomepageState {
    surveys: Survey[];
}

export const initialHomepageState = {
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
};

export function homepageReducer(state: HomepageState = initialHomepageState): HomepageState {
    return state;
}
