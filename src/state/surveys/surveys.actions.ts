import { Action } from 'redux';
import { Survey } from '../../common/types/survey.type';

export enum SurveysActionType {
    ChangeSurveysFilterAction = 'Surveys: Change Surveys Filter',
    UpdateSurveyAction = 'Surveys: Update Survey',
}

export class ChangeSurveysFilterAction implements Action {
    readonly type = SurveysActionType.ChangeSurveysFilterAction;
    constructor(public payload: { filter: string }) {}
}

export class UpdateSurveyAction implements Action {
    readonly type = SurveysActionType.UpdateSurveyAction;
    constructor(public payload: { surveyId: string; changes: Partial<Survey> }) {}
}

export type SurveysAction = ChangeSurveysFilterAction | UpdateSurveyAction;
