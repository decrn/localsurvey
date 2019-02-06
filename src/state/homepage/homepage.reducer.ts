import { Survey } from '../../common/types/survey';

export interface HomepageState {
    surveys: Survey[];
}

// Providing initial state as fallback for failed hydrating from the store
// See https://redux.js.org/recipes/structuring-reducers/initializing-state
export const initialHomepageState = {
    surveys: [],
};

export function homepageReducer(state: HomepageState = initialHomepageState): HomepageState {
    return state;
}
