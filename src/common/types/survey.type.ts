import { SurveyStatus } from './survey-status.type';

export interface Survey {
    key: string;
    name: string;
    status: SurveyStatus;
    createdAt: number;
    modifiedAt: number;
    questionCount: number;
}
