import { RouteComponentProps } from 'react-router';
import { createSelector } from 'reselect';
import { AppState } from '../index';

const surveysSelector = (state: AppState) => state.surveysState;
const getCurrentSurveyId = (state: AppState, props: RouteComponentProps<{ surveyid: string }>) => {
    return props.match.params.surveyid;
};

export const selectAllSurveys = createSelector(
    surveysSelector,
    surveysState => surveysState.surveys,
);

export const selectCurrentSurvey = createSelector(
    [getCurrentSurveyId, selectAllSurveys],
    (id, surveys) => surveys.find(survey => survey.id === id),
);
