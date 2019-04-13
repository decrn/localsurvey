import { Action } from 'redux';
import { SurveyItem } from '../../common/types/survey-item.type';
import { Survey } from '../../common/types/survey.type';

export enum SurveysActionType {
    ChangeSurveysFilterAction = 'Surveys: Change Surveys Filter',
    UpdateSurveyAction = 'Surveys: Update Survey',
    AddSurveyItemAction = 'Surveys: Add Survey Item',
    RemoveSurveyItemAction = 'Surveys: Remove Survey Item',
    UpdateSurveyItemAction = 'Surveys: Update Survey Item',
}

export class ChangeSurveysFilterAction implements Action {
    readonly type = SurveysActionType.ChangeSurveysFilterAction;
    constructor(public payload: { filter: string }) {}
}

export class UpdateSurveyAction implements Action {
    readonly type = SurveysActionType.UpdateSurveyAction;
    constructor(public payload: { surveyId: string; changes: Partial<Survey> }) {}
}

export class AddSurveyItemAction implements Action {
    readonly type = SurveysActionType.AddSurveyItemAction;
    constructor(public payload: { surveyId: string; surveyItem: SurveyItem }) {}
}

export class RemoveSurveyItemAction implements Action {
    readonly type = SurveysActionType.RemoveSurveyItemAction;
    constructor(public payload: { surveyId: string; surveyItemId: string }) {}
}

export class UpdateSurveyItemAction implements Action {
    readonly type = SurveysActionType.UpdateSurveyItemAction;
    constructor(public payload: { surveyId: string; surveyItem: SurveyItem }) {}
}

export type SurveysAction =
    | ChangeSurveysFilterAction
    | UpdateSurveyAction
    | AddSurveyItemAction
    | RemoveSurveyItemAction
    | UpdateSurveyItemAction;
