import { Icon, Tag, Tooltip } from 'antd';
import React, { Component } from 'react';
import { mapStatusToColor, mapStatusToIcon } from '../../mappers/survey-status.mapper';
import { SurveyStatus } from '../../types/survey-status.type';

export interface StatusTagProps {
    status: SurveyStatus;
}

export class StatusTag extends Component<StatusTagProps> {
    mapStatusToTooltip = (status: SurveyStatus): string => {
        switch (status) {
            case SurveyStatus.Published:
                return 'This survey has been published';
            case SurveyStatus.InProgress:
                return 'This survey is a draft';
            case SurveyStatus.Cancelled:
                return 'This survey was cancelled';
            case SurveyStatus.Warning:
                return 'This survey needs reviewing';
        }
    };
    render() {
        const { status } = this.props;

        const color = mapStatusToColor(status);
        const tooltip = this.mapStatusToTooltip(status);
        const icon = mapStatusToIcon(status);

        return (
            <Tooltip placement="topLeft" title={tooltip}>
                <Tag color={color}>
                    <Icon type={icon} />
                </Tag>
            </Tooltip>
        );
    }
}
