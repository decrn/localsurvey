import { QuestionOption } from './question-option.type';
import { SurveyItem, SurveyItemType } from './survey-item.type';

export enum QuestionType {
    SingleChoice = 'single',
    MultipleChoice = 'multi',
    OpenQuestion = 'open',
}

export interface Question extends SurveyItem {
    type: SurveyItemType.Question;
    questionType: QuestionType;
}

export interface SingleChoice extends Question {
    questionType: QuestionType.SingleChoice;
    options: QuestionOption[];
}
export interface MultipleChoice extends Question {
    questionType: QuestionType.MultipleChoice;
    options: QuestionOption[];
}
export interface OpenQuestion extends Question {
    questionType: QuestionType.OpenQuestion;
}
