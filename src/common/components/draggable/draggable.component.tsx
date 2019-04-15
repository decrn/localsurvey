import cc from 'classcat';
import React from 'react';
import { ConnectDragSource, DragSource, DragSourceConnector, DragSourceMonitor } from 'react-dnd';
import './draggable.component.less';

export enum ItemTypes {
    SurveyItem = 'Survey Item',
}

export interface DraggableComponentProps {
    name: string;
    value: string;
    onDrop: (value: any) => void;
}
export interface DragProps {
    isDragging?: boolean; // Optional because this is provided by react-dnd
    connectDragSource?: ConnectDragSource;
}

class DraggableComponent extends React.Component<DraggableComponentProps & DragProps> {
    render() {
        const { name, isDragging, connectDragSource } = this.props;

        const classNames = cc({
            draggable: true,
            dragging: isDragging,
        });

        // @ts-ignore
        return connectDragSource(<div className={classNames}>{name}</div>);
    }
}
export const Draggable = DragSource<DraggableComponentProps>(
    ItemTypes.SurveyItem,
    {
        beginDrag: ({ value }: DraggableComponentProps) => ({ value }),

        endDrag: ({ onDrop, value }: DraggableComponentProps, monitor: DragSourceMonitor) => {
            const dropResult = monitor.getDropResult();
            if (dropResult) {
                onDrop(value);
            }
        },
    },
    (connector: DragSourceConnector, monitor: DragSourceMonitor) => ({
        connectDragSource: connector.dragSource(),
        isDragging: monitor.isDragging(),
    }),
)(DraggableComponent);
