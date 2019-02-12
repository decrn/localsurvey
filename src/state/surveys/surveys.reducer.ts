import { Survey } from '../../common/types/survey.type';
import { SurveysAction, SurveysActionType } from './surveys.actions';

export interface SurveysState {
    surveys: Survey[];
    filter: string;
}

// Providing initial state as fallback for failed hydrating from the store
// See https://redux.js.org/recipes/structuring-reducers/initializing-state
export const initialSurveysState = {
    surveys: [],
    filter: 'all',
};

export function surveysReducer(state: SurveysState = initialSurveysState, action: SurveysAction): SurveysState {
    switch (action.type) {
        case SurveysActionType.ChangeSurveysFilterAction:
            return { ...state, filter: action.payload.filter };
        default:
            return state;
    }
}
