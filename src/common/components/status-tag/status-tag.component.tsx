import { Icon, Tag, Tooltip } from 'antd';
import React, { Component } from 'react';
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
}

export class StatusTag extends Component<StatusTagProps> {
    static defaultProps: Partial<StatusTagProps> = {
        extended: false,
        size: 'medium',
    };

    render() {
        const { status, size, extended } = this.props;

        const color = mapStatusToColor(status);
        const icon = mapStatusToIcon(status);

        return (
            <Tooltip placement="topLeft" title={STATUS_TOOLTIPS[status]}>
                <Tag className={`status-tag--${size}`} color={color}>
                    <Icon type={icon} />
                    {extended && <span style={{ paddingLeft: '5px' }}>{status}</span>}
                </Tag>
            </Tooltip>
        );
    }
}
