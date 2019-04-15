import { message } from 'antd';
import React, { Component } from 'react';
import { SurveyItem } from '../../../../common/types/survey-item.type';
import { EditableTitle } from '../editable-title/survey-question-editable-title.component';
import { SurveyQuestionHighlight } from '../highlight/survey-question-highlight.component';
import { SurveyQuestion } from '../survey-questions/survey-question.component';
import { SurveyQuestionToolbox, ToolboxActions } from '../toolbox/survey-question-toolbox.component';
import './survey-question-card.component.less';

export interface SurveyQuestionCardProps {
    question: SurveyItem;
    onDelete: (itemId: string) => void;
    onUpdate: (item: SurveyItem) => void;
}

export interface SurveyQuestionCardState {
    isToolboxVisible: boolean;
}

export class SurveyQuestionCard extends Component<SurveyQuestionCardProps, SurveyQuestionCardState> {
    state = {
        isToolboxVisible: false,
    };

    deleteMessage = () => {
        message.success(`${this.props.question.description} removed successfully!`);
    };

    toggleHover = () => this.setState(prevState => ({ isToolboxVisible: !prevState.isToolboxVisible }));

    editSurveyTitle = (newTitle: string) => {
        const { question } = this.props;
        question.description = newTitle;
        this.props.onUpdate(question);
    };

    render() {
        const { question } = this.props;
        const { type } = this.props.question;

        const actions: ToolboxActions = {
            move: {
                icon: 'drag',
                onPress: () => {
                    console.log(`Pressing: drag on type: ${question.type}`);
                },
            },
            settings: {
                tooltip: 'Customize this question',
                icon: 'setting',
                onPress: () => {
                    console.log(`Pressing: settings on type: ${question.type}`);
                },
            },
            delete: {
                tooltip: 'Delete',
                icon: 'delete',
                onPress: () => {
                    console.log(`Pressing: delete on type: ${question.type}`);
                    this.props.onDelete(this.props.question.id);
                    this.deleteMessage();
                },
            },
            // Set as default for this question type... (color picker icon?)
            // Reset to default values for this question type... (recycle icon?)
            // Help ? (question mark icon)
        };

        return (
            <div onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} className="question-card">
                <div className="question">
                    <SurveyQuestionHighlight type={type} />
                    <div className="question-content">
                        <EditableTitle
                            heading="h3"
                            onTitleUpdated={this.editSurveyTitle}
                            content={question.description}
                        />
                        <SurveyQuestion onChange={this.onChange} question={question} />
                    </div>
                    <SurveyQuestionToolbox actions={actions} visible={this.state.isToolboxVisible} />
                </div>
            </div>
        );
    }

    onPressCustomize = () => {
        console.log('Customize some stuff');
    };

    onChange = (surveyItem: Partial<SurveyItem>) => {
        const { question } = this.props;
        const updatedItem = { ...question, ...surveyItem };
        console.log('updated item: ', updatedItem);
        this.props.onUpdate(updatedItem);
    };
}
