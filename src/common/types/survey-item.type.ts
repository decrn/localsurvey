interface SurveyQuestion {
    id: string;
    description: string;
    type: SurveyItemType;
    responses: string[];
}

export interface SingleChoice extends SurveyQuestion {}
export interface MultipleChoice extends SurveyQuestion {}
export interface OpenQuestion extends SurveyQuestion {}

export enum SurveyItemType {
    SingleChoice = 'single',
    MultiChoice = 'multi',
    OpenQuestion = 'open',
}

export type SurveyItem = SingleChoice | MultipleChoice | OpenQuestion;
