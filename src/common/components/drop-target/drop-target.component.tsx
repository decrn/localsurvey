import cc from 'classcat';
import React from 'react';
import { ConnectDropTarget, DropTarget as Target } from 'react-dnd';
import { ItemTypes } from '../draggable/draggable.component';
import './drop-target.component.less';

export interface DropTargetComponentProps {
    connectDropTarget: ConnectDropTarget;
    canDrop: boolean;
    isOver: boolean;
}
class DropTargetComponent extends React.Component<DropTargetComponentProps> {
    render() {
        const { canDrop, isOver, connectDropTarget } = this.props;
        const isActive = canDrop && isOver;

        const classNames = cc({
            'drop-target': true,
            dragging: canDrop,
            hover: isActive,
        });

        return connectDropTarget(
            <div className={classNames}>{isActive ? 'Add survey element' : 'Drag an element here'}</div>,
        );
    }
}
export const DropTarget = Target(
    ItemTypes.SurveyItem,
    { drop: () => ({ name: 'DropTarget' }) },
    (connect, monitor) => ({
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
    }),
)(DropTargetComponent);
