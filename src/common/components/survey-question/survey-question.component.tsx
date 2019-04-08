import { Icon, Input, Select, Switch, Tooltip } from 'antd';
import Search from 'antd/lib/input/Search';
import React, { Component, SFC } from 'react';
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

interface ToolboxProps {
    visible: boolean;
    onPressDelete: Function;
    onPressCustomize: Function;
}

const SurveyQuestionToolbox: SFC<ToolboxProps> = (props: ToolboxProps): JSX.Element => {
    const { visible } = props;

    const HOVER_DELAY_MS = 1000;

    const actions = [
        {
            name: 'move',
            tooltip: 'Move',
            icon: 'drag',
        },
        {
            name: 'settings',
            tooltip: 'Customize',
            icon: 'setting',
        },
        {
            name: 'delete',
            tooltip: 'Delete',
            icon: 'delete',
        },
    ];

    const onToolClick = (sender: any) => {
        sender === 'settings' && props.onPressCustomize();
        sender === 'delete' && props.onPressDelete();
    };

    return (
        <div
            className="question-toolbox"
            style={{ display: 'flex', backgroundColor: '#fafafa', flexDirection: 'column', width: 40 }}
        >
            {visible &&
                actions.map((action, index) => (
                    <div className="toolbox-action" key={index}>
                        <a onClick={() => onToolClick(action.name)}>
                            <Tooltip placement="right" title={action.tooltip} mouseEnterDelay={HOVER_DELAY_MS / 1000}>
                                <Icon style={{ color: '#aaa' }} type={action.icon} />
                            </Tooltip>
                        </a>
                    </div>
                ))}
        </div>
    );
};

const readableName = {
    single: 'Single Choice',
    multi: 'Multiple Choice',
    open: 'Open Question',
};

interface SurveyQuestionTypeProps {
    question: SurveyItem;
}

const EditNameSurveyQuestion: SFC<SurveyQuestionTypeProps> = ({ question }: SurveyQuestionTypeProps): JSX.Element => (
    <div>
        <Input.Group compact>
            <Select style={{ width: '25%' }} defaultValue={readableName[question.type]}>
                <Select.Option value="single">{readableName.single}</Select.Option>
                <Select.Option value="multi">{readableName.multi}</Select.Option>
                <Select.Option value="open">{readableName.open}</Select.Option>
            </Select>
            <Input style={{ width: '75%' }} defaultValue={question.description} />
        </Input.Group>
    </div>
);

const YesNoSurveyQuestion: SFC<SurveyQuestionTypeProps> = ({ question }: SurveyQuestionTypeProps): JSX.Element => (
    <div className="options yesno">
        <Input className="singleInput question-input" addonBefore="Option 1" defaultValue="I agree" />
        <Input className="singleInput question-input" addonBefore="Option 2" defaultValue="I disagree" />
    </div>
);

const MultiOptionQuestion: SFC<SurveyQuestionTypeProps> = ({ question }: SurveyQuestionTypeProps): JSX.Element => (
    <div className="options multi">
        {question.responses &&
            question.responses.map((option: string, index: number) => (
                <Input
                    className="question-input"
                    key={index}
                    addonBefore={`Option ${index + 1}`}
                    defaultValue={option}
                />
            ))}
        {/* Using <Search> because it's a pre-styled input type */}
        {/* with trailing icon and onClick/onPressEnter event listener */}
        {/* Feel free to replace with something better */}
        <Search
            placeholder="Add a first response option!"
            onSearch={val => question}
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

export interface SurveyQuestionProps {
    question: SurveyItem;
    onDelete: Function;
}

export interface SurveyQuestionState {
    toolboxVisible?: boolean;
}

export class SurveyQuestion extends Component<SurveyQuestionProps, SurveyQuestionState> {
    state = {
        toolboxVisible: false,
    };

    render() {
        const { question } = this.props;
        const { type } = this.props.question;
        return (
            <div
                onMouseEnter={() => this.setState({ toolboxVisible: true })}
                onMouseLeave={() => this.setState({ toolboxVisible: false })}
            >
                <div
                    style={{
                        border: 1,
                        borderStyle: 'solid',
                        borderColor: '#eee',
                        marginBottom: 20,
                        display: 'flex',
                        alignSelf: 'stretch',
                    }}
                >
                    <div className="question" style={{ flexGrow: 1 }}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'stretch',
                                justifyContent: 'space-between',
                            }}
                        >
                            <SurveyQuestionHighlight type={type} />
                            <div className="question-content" style={{ flexGrow: 1 }}>
                                <EditNameSurveyQuestion question={question} />
                                {type === SurveyItemType.SingleChoice && YesNoSurveyQuestion({ question })}
                                {type === SurveyItemType.MultiChoice && MultiOptionQuestion({ question })}
                                {type === SurveyItemType.OpenQuestion && OpenQuestion({ question })}
                            </div>
                            <SurveyQuestionToolbox
                                onPressCustomize={this.onPressCustomize}
                                onPressDelete={() => this.props.onDelete()}
                                visible={this.state.toolboxVisible}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    onPressCustomize = () => {
        console.log('Customize some stuff');
    };
}
