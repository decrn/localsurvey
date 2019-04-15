import { Icon } from 'antd';
import React, { SFC } from 'react';
import { SurveyItemType } from '../../../../common/types/survey-item.type';

type HighlightMap = {
    [key in SurveyItemType]: {
        /** Icon taken from antd
         * @see https://ant.design/components/icon/ */
        icon: string;
        /** BG color taken from the '50' row of MaterialUI colors
         * @see https://www.materialui.co/colors */
        backgroundColor: string;
        /** Icon color taken from the '200' row of MaterialUI colors
         * @see https://www.materialui.co/colors */
        iconColor: string;
    }
};

// TODO: Even though this has proper typing and will complain when new SurveyItemTypes are added
// and their styling has not yet been defined, it might still be worth to more tightly couple
// this with SurveyItemType, in the expectation that theming will one day be centralized
// and these colors and icons will be reused throughout. Or you know, just keep it here...
const highlightMap: HighlightMap = {
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
};

export interface SurveyQuestionHighlightProps {
    type: SurveyItemType;
}

/**
 * Displays a colorful decoration on the survey question card with an appropriate icon, depending on the survey question type
 *
 * @param type the SurveyItemType to render a highlight for
 */
// TODO: maybe turn this into a React.Memo ?
export const SurveyQuestionHighlight: SFC<SurveyQuestionHighlightProps> = ({
    type,
}: SurveyQuestionHighlightProps): JSX.Element => (
    <div className="question-highlight" style={{ backgroundColor: highlightMap[type].backgroundColor }}>
        <Icon style={{ color: highlightMap[type].iconColor }} type={highlightMap[type].icon} />
    </div>
);
