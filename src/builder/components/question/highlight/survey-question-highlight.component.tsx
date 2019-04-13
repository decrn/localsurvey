import { Icon } from 'antd';
import React, { SFC } from 'react';
import { SurveyItemType } from '../../../../common/types/survey-item.type';

/**
 * Displays a colorful decoration on the survey question card with an
 * appropriate icon, depending on the survey question type
 */

type HighlightMap = {
    [key in SurveyItemType]: {
        icon: string;
        backgroundColor: string;
        iconColor: string;
    }
};

const highlights: HighlightMap = {
    single: {
        icon: 'swap',
        backgroundColor: '#E3F2FD',
        iconColor: '#90CAF9',
    },
    multi: {
        icon: 'bars',
        backgroundColor: '#ffebee',
        iconColor: '#ef9a9a',
    },
    open: {
        icon: 'message',
        backgroundColor: '#E0F2F1',
        iconColor: '#80CBC4',
    },
    // Ideally I would like to do something like
    // SurveyItemType.SingleChoice: {
    //     ...
    //     icon: 'foo',
    //     ...
    // }
    // But TS has let me down :(
    // See https://github.com/Microsoft/TypeScript/issues/24220
};

export interface SurveyQuestionHighlightProps {
    type: SurveyItemType;
}

// TODO: maybe turn this into a React.Memo ?
export const SurveyQuestionHighlight: SFC<SurveyQuestionHighlightProps> = ({
    type,
}: SurveyQuestionHighlightProps): JSX.Element => (
    <div className="question-highlight" style={{ backgroundColor: highlights[type].backgroundColor }}>
        <Icon style={{ color: highlights[type].iconColor }} type={highlights[type].icon} />
    </div>
);
