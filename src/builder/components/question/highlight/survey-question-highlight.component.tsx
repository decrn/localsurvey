import { Icon } from 'antd';
import React, { SFC } from 'react';
import { SurveyItemType } from '../../../../common/types/survey-item.type';

/**
 * Displays a colorful decoration on the survey question card with an
 * appropriate icon, depending on the survey question type
 */

export interface SurveyQuestionHighlightProps {
    type: SurveyItemType;
}

export const SurveyQuestionHighlight: SFC<SurveyQuestionHighlightProps> = ({
    type,
}: SurveyQuestionHighlightProps): JSX.Element => {
    // https://ant.design/components/icon/
    const icons = {
        single: 'swap',
        multi: 'bars',
        open: 'message',
    };

    const color = {
        single: '#E3F2FD',
        multi: '#ffebee',
        open: '#E0F2F1',
    };

    const iconColors = {
        single: '#90CAF9',
        multi: '#ef9a9a',
        open: '#80CBC4',
    };

    return (
        <div className="question-highlight" style={{ backgroundColor: color[type] }}>
            <Icon style={{ color: iconColors[type] }} type={icons[type] || 'question'} />
        </div>
    );
};
