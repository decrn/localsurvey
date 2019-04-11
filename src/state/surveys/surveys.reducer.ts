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

        case SurveysActionType.UpdateSurveyAction:
            return {
                ...state,
                surveys: state.surveys.map(survey =>
                    survey.id === action.payload.surveyId ? { ...survey, ...action.payload.changes } : survey,
                ),
            };

        case SurveysActionType.AddSurveyItemAction:
            return {
                ...state,
                surveys: state.surveys.map(survey =>
                    survey.id === action.payload.surveyId
                        ? { ...survey, items: [...survey.items, action.payload.surveyItem] }
                        : survey,
                ),
            };

        case SurveysActionType.RemoveSurveyItemAction:
            return {
                ...state,
                surveys: state.surveys.map(survey =>
                    survey.id === action.payload.surveyId
                        ? {
                              ...survey,
                              items: [...survey.items.filter(item => item.id !== action.payload.surveyItem.id)],
                          }
                        : survey,
                ),
            };

        case SurveysActionType.UpdateSurveyItemAction:
            return {
                ...state,
                surveys: state.surveys.map(survey =>
                    survey.id === action.payload.surveyId
                        ? {
                              ...survey,
                              items: [
                                  ...survey.items.map(item => {
                                      return item.id === action.payload.surveyItem.id
                                          ? action.payload.surveyItem
                                          : item;
                                  }),
                              ],
                          }
                        : survey,
                ),
            };
        default:
            return state;
    }
}
