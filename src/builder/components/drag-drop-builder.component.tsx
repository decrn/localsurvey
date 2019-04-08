import { Card } from 'antd';
import React, { Component } from 'react';
import uuid from 'uuid/v4';
import { Draggable } from '../../common/components/draggable/draggable.component';
import { DropTarget } from '../../common/components/drop-target/drop-target.component';
import { SurveyQuestion } from '../../common/components/survey-question/survey-question.component';
import { SurveyItem, SurveyItemType } from '../../common/types/survey-item.type';
import './drag-drop-builder.component.less';

export interface DragDropBuilderProps {
    surveyItems: SurveyItem[];
    onAddSurveyItem: (item: SurveyItem) => void;
    onRemoveSurveyItem: (item: SurveyItem) => void;
}

export class DragDropBuilder extends Component<DragDropBuilderProps> {
    render() {
        const { surveyItems } = this.props;

        return (
            <div className="builder__container">
                <Card className="survey">
                    <h2>Survey</h2>

                    {surveyItems.map((item, index) => (
                        <SurveyQuestion onDelete={() => this.onDelete(item)} key={item.id} question={item} />
                    ))}
                    <DropTarget />
                </Card>
                <Card className="elements">
                    <h2>Survey Elements</h2>
                    <Draggable onDrop={(e: any) => this.onDrop(e, SurveyItemType.SingleChoice)} name="Single Choice" />
                    <Draggable onDrop={(e: any) => this.onDrop(e, SurveyItemType.MultiChoice)} name="Multiple Choice" />
                    <Draggable onDrop={(e: any) => this.onDrop(e, SurveyItemType.OpenQuestion)} name="Open Question" />
                </Card>
            </div>
        );
    }

    onDelete = (surveyItem: SurveyItem) => {
        this.props.onRemoveSurveyItem(surveyItem);
    };

    onDrop = (choice: string, type: SurveyItemType) => {
        this.props.onAddSurveyItem({
            type,
            id: uuid(),
            description: 'some question',
            responses: ['I agree', 'I disagree'],
        });
    };
}
