import { Survey } from '../../common/types/survey.type';

export interface SurveysState {
    surveys: Survey[];
}

// Providing initial state as fallback for failed hydrating from the store
// See https://redux.js.org/recipes/structuring-reducers/initializing-state
export const initialSurveysState = {
    surveys: [],
};

export function surveysReducer(state: SurveysState = initialSurveysState): SurveysState {
    return state;
}
