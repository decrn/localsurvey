import { Icon, Input, Switch } from 'antd';
import Search from 'antd/lib/input/Search';
import React, { SFC } from 'react';
import uuid from 'uuid/v4';
import { SurveyItem, SurveyItemType } from '../../../../common/types/survey-item.type';

interface SurveyQuestionTypeProps {
    question: SurveyItem;
    onChange: (surveyItem: Partial<SurveyItem>) => void;
}

export const SurveyQuestion: SFC<SurveyQuestionTypeProps> = ({
    question,
    onChange,
}: SurveyQuestionTypeProps): JSX.Element => {
    switch (question.type) {
        case SurveyItemType.SingleChoice:
            return <YesNoSurveyQuestion onChange={onChange} question={question} />;
        case SurveyItemType.MultiChoice:
            return <MultiOptionQuestion onChange={onChange} question={question} />;
        case SurveyItemType.OpenQuestion:
            return <OpenQuestion onChange={onChange} question={question} />;
    }
};

const YesNoSurveyQuestion: SFC<SurveyQuestionTypeProps> = ({
    question,
    onChange,
}: SurveyQuestionTypeProps): JSX.Element => (
    <div className="options yesno">
        <Input
            className="singleInput question-input"
            addonBefore="Option 1"
            defaultValue={question.responses[0]}
            onBlur={({ target }) => {
                console.log(target.value);
                onChange({
                    responses: [question.responses[0], target.value],
                });
            }}
            onPressEnter={({ target }) => {
                // dunno why but linter yells at me here
                console.log(target.value);
                onChange({
                    responses: [question.responses[0], target.value],
                });
            }}
        />
        <Input
            className="singleInput question-input"
            addonBefore="Option 2"
            defaultValue={question.responses[1]}
            onBlur={({ target }) => {
                console.log(target.value);
                onChange({
                    responses: [question.responses[0], target.value],
                });
            }}
            onPressEnter={({ target }) => {
                // dunno why but linter yells at me here
                console.log(target.value);
                onChange({
                    responses: [question.responses[0], target.value],
                });
            }}
        />
    </div>
);

const MultiOptionQuestion: SFC<SurveyQuestionTypeProps> = ({
    question,
    onChange,
}: SurveyQuestionTypeProps): JSX.Element => (
    <div className="options multi">
        {question.responses &&
            question.responses.map((option: string, index: number) => (
                <Input
                    className="question-input"
                    key={uuid()}
                    addonBefore={`Option ${index + 1}`}
                    defaultValue={option}
                    onBlur={e =>
                        onChange({ responses: question.responses.map((r, i) => (i === index ? e.target.value : r)) })
                    }
                    onPressEnter={e =>
                        onChange({ responses: question.responses.map((r, i) => (i === index ? e.target.value : r)) })
                    }
                />
            ))}
        {/* Using <Search> because it's a pre-styled input type */}
        {/* with trailing icon and onClick/onPressEnter event listener */}
        {/* Feel free to replace with something better */}
        <Search
            placeholder="Add more response options!"
            onSearch={value => onChange({ responses: question.responses.concat([value]) })}
            enterButton={<Icon type="plus" />}
        />
    </div>
);

const OpenQuestion: SFC<SurveyQuestionTypeProps> = ({ question }: SurveyQuestionTypeProps): JSX.Element => (
    <div className="options open" style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginTop: 10 }}>
            <Switch size="small" defaultChecked onChange={() => {}} /> Allow empty responses
        </div>
        <div style={{ marginTop: 10 }}>
            <Switch size="small" onChange={() => {}} /> Allow selling of the souls
        </div>
    </div>
);
