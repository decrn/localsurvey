import { Card } from 'antd';
import React, { Component } from 'react';
import uuid from 'uuid/v4';
import { Draggable } from '../../common/components/draggable/draggable.component';
import { DropTarget } from '../../common/components/drop-target/drop-target.component';
import { SurveyItem } from '../../common/types/survey-item.type';
import './drag-drop-builder.component.less';

export interface DragDropBuilderProps {
    surveyItems: SurveyItem[];
    onAddSurveyItem: (item: SurveyItem) => void;
}

export class DragDropBuilder extends Component<DragDropBuilderProps> {
    render() {
        const { surveyItems } = this.props;

        return (
            <div className="builder__container">
                <Card className="survey">
                    <h2>Survey</h2>

                    {surveyItems.map(item => (
                        <div key={item.id}>{item.description}</div>
                    ))}
                    <DropTarget />
                </Card>
                <Card className="elements">
                    <h2>Survey Elements</h2>
                    <Draggable onDrop={this.onDrop} name="Single Choice" />
                    <Draggable onDrop={this.onDrop} name="Multiple Choice" />
                    <Draggable onDrop={this.onDrop} name="Open Question" />
                </Card>
            </div>
        );
    }

    onDrop = (choice: string) => {
        this.props.onAddSurveyItem({ id: uuid(), description: choice });
    };
}
