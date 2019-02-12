import { Action } from 'redux';

export enum SurveysActionType {
    ChangeSurveysFilterAction = 'Surveys: Change Surveys Filter',
}

export class ChangeSurveysFilterAction implements Action {
    readonly type = SurveysActionType.ChangeSurveysFilterAction;
    constructor(public payload: { filter: string }) {}
}

export type SurveysAction = ChangeSurveysFilterAction;
