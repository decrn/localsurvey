import { Icon, Tag, Tooltip } from 'antd';
import React, { SFC } from 'react';
import { mapStatusToColor, mapStatusToIcon } from '../../mappers/survey-status.mapper';
import { SurveyStatus } from '../../types/survey-status.type';
import './status-tag.component.less';

export type StatusTagSize = 'small' | 'medium' | 'large';

export const STATUS_TOOLTIPS: { [key in SurveyStatus]: string } = {
    [SurveyStatus.Published]: 'This survey has been published',
    [SurveyStatus.InProgress]: 'This survey is a draft',
    [SurveyStatus.Cancelled]: 'This survey was cancelled',
    [SurveyStatus.Warning]: 'This survey needs reviewing',
};

export interface StatusTagProps {
    status: SurveyStatus;
    extended?: boolean;
    size?: StatusTagSize;
    className?: string;
    tooltipPlacement?: 'top' | 'right' | 'left' | 'bottom';
}

export const StatusTag: SFC<StatusTagProps> = ({
    status,
    size = 'medium',
    extended = false,
    className = '',
}: StatusTagProps): JSX.Element => (
    <Tooltip placement="topLeft" title={STATUS_TOOLTIPS[status]}>
        <Tag className={`status-tag--${size} ${className}`} color={mapStatusToColor(status)}>
            <Icon type={mapStatusToIcon(status)} />
            {extended && <span style={{ paddingLeft: '5px' }}>{status}</span>}
        </Tag>
    </Tooltip>
);
