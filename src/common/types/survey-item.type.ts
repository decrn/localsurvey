import { SupportiveContent } from './supportive-content.type';

export enum SurveyItemType {
    Question = 'question',
    SimpleContent = 'simple-content',
}

export interface SurveyItem {
    id: string;
    type: SurveyItemType;
    title: string;
    content?: SupportiveContent;
}
