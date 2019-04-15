export enum SurveyItemType {
    SingleChoice = 'single',
    MultipleChoice = 'multi',
    OpenQuestion = 'open',
}

export interface SurveyQuestion {
    id: string;
    description: string;
    type: SurveyItemType;
    responses: string[];
}

export interface SingleChoice extends SurveyQuestion {
    type: SurveyItemType.SingleChoice;
}
export interface MultipleChoice extends SurveyQuestion {
    type: SurveyItemType.MultipleChoice;
}
export interface OpenQuestion extends SurveyQuestion {
    type: SurveyItemType.OpenQuestion;
}
