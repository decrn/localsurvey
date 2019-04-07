import { SurveyItem } from './survey-item.type';
import { SurveyStatus } from './survey-status.type';

export interface Survey {
    id: string;
    name: string;
    description: string;
    status: SurveyStatus;
    createdAt: number;
    modifiedAt: number;
    questionCount: number;
    color: string;
    items: SurveyItem[];
    // branding: SurveyBranding;
}

export interface SurveyBranding {
    introductionMessage: string;
    logoUrl: string;
    organisationName: string;
    accentColor: string;
    footerText: string;
    completionMessage: string;
}
