import { Icon, Input, Select } from 'antd';
import Search from 'antd/lib/input/Search';
import cc from 'classcat';
import React, { CSSProperties, SFC } from 'react';
import { SurveyItem, SurveyItemType } from '../../types/survey-item.type';
import './survey-question.component.less';

export interface HighlightProps {
    type: SurveyItemType;
}

const SurveyQuestionHighlight: SFC<HighlightProps> = ({ type }: HighlightProps): JSX.Element => {
    // https://ant.design/components/icon/
    const icons = {
        single: 'swap',
        multi: 'bars',
        open: 'message',
    };

    console.log(type);

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
        <div className="questionType" style={{ backgroundColor: color[type] }}>
            <Icon style={{ color: iconColors[type] }} type={icons[type] || 'question'} />
        </div>
    );
};

export interface SurveyQuestionProps {
    question: SurveyItem;
}

export const SurveyQuestion: SFC<SurveyQuestionProps> = ({ question }: SurveyQuestionProps): JSX.Element => {
    const { type } = question;

    const classNames = cc({
        editbox: true,
        single: type === SurveyItemType.SingleChoice,
        multi: type === SurveyItemType.MultiChoice,
        other: type === SurveyItemType.OpenQuestion,
    });

    const readableName = {
        single: 'Single Choice',
        multi: 'Multiple Choice',
        open: 'Open Question',
    };

    return (
        <div style={{ border: 1, borderStyle: 'solid', borderColor: '#eee', marginBottom: 20 }}>
            <div className="question">
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch' }}>
                    <SurveyQuestionHighlight type={type} />
                    <div className="questionContent">
                        <Input.Group compact>
                            <Select defaultValue={readableName[type]}>
                                <Select.Option value="single">{readableName.single}</Select.Option>
                                <Select.Option value="multi">{readableName.multi}</Select.Option>
                                <Select.Option value="open">{readableName.open}</Select.Option>
                            </Select>
                            <Input style={{ width: '50%' }} defaultValue={question.description} />
                        </Input.Group>

                        <div
                            style={{ borderTop: 1, borderTopStyle: 'solid', borderTopColor: '#eee' }}
                            className={classNames}
                        >
                            {type === SurveyItemType.SingleChoice && (
                                <>
                                    {console.log('single')}
                                    <Input className="singleInput" addonBefore="Option 1" defaultValue="I agree" />
                                    <Input className="singleInput" addonBefore="Option 2" defaultValue="I disagree" />
                                </>
                            )}

                            {type === SurveyItemType.MultiChoice && (
                                <>
                                    {question.responses &&
                                        question.responses.map((option: string, index: number) => (
                                            <Input addonBefore={`Option ${index + 1}`} defaultValue={option} />
                                        ))}
                                    {/* Using <Search> because it's a pre-styled input type */}
                                    {/* with trailing icon and onClick/onPressEnter event listener */}
                                    {/* Feel free to replace with something better */}
                                    <Search
                                        placeholder="Add a first response option!"
                                        onSearch={val => question}
                                        enterButton={<Icon type="plus" />}
                                    />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
