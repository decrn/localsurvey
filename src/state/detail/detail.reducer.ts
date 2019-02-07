import { Survey } from '../../common/types/survey.type';

export interface DetailState {
    survey?: Survey;
}

// Providing initial state as fallback for failed hydrating from the store
// See https://redux.js.org/recipes/structuring-reducers/initializing-state
export const initialDetailState = {};

export function detailReducer(state: DetailState = initialDetailState): DetailState {
    return state;
}
