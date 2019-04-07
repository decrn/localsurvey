export interface SingleChoice {
    id: string;
    description: string;
}
export interface MultipleChoice {
    id: string;
    description: string;
}

export type SurveyItem = SingleChoice | MultipleChoice;
