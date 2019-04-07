import React, { SFC } from 'react';
import './survey-question.component.less';

export interface SurveyQuestionProps {
    question: any;
}

export const SurveyQuestion: SFC<SurveyQuestionProps> = ({ question }: SurveyQuestionProps): JSX.Element => (
    <div>{question.description}</div>
);
