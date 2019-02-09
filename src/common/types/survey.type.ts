import { SurveyStatus } from './survey-status.type';

export function surveyDateToLocaleString(unixtime: number): string {
    return new Date(unixtime * 1000).toLocaleString();
}

export interface Survey {
    key: string;
    name: string;
    status: SurveyStatus;
    createdAt: number;
    modifiedAt: number;
    questionCount: number;
}
