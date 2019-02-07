import { Survey } from '../../common/types/survey.type';
import { SurveyStatus } from './../../common/types/survey-status.type';

export interface DetailState {
    survey: Survey;
}

// Providing initial state as fallback for failed hydrating from the store
// See https://redux.js.org/recipes/structuring-reducers/initializing-state

export const initialDetailState = {
    survey: {
        key: '',
        name: '',
        description: '',
        status: SurveyStatus.InProgress,
        createdAt: 0,
        modifiedAt: 0,
        questionCount: 0,
        branding: {
            introductionMessage: '',
            logoUrl: '',
            organisationName: '',
            accentColor: '',
            footerText: '',
            completionMessage: '',
        },
    },
};

export function detailReducer(state: DetailState = initialDetailState): DetailState {
    return state;
}
