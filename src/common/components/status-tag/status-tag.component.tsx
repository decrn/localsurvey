import { Icon, Tag, Tooltip } from 'antd';
import React, { Component } from 'react';
import { mapStatusToColor } from '../../mappers/survey-status.mapper';
import { SurveyStatus } from '../../types/survey-status.type';

export interface StatusTagProps {
    status: SurveyStatus;
}

export class StatusTag extends Component<StatusTagProps> {
    private mapStatusToTooltip(status: SurveyStatus): string {
        switch (status) {
            case SurveyStatus.Published:
                return 'This surrvey has been published';
            case SurveyStatus.InProgress:
                return 'This survey is a draft';
            case SurveyStatus.Cancelled:
                return 'This survey was cancelled';
            case SurveyStatus.Warning:
                return 'This survey needs reviewing';
        }
    }

    // See: https://ant.design/components/icon/
    private mapStatusToIcon(status: SurveyStatus): string {
        switch (status) {
            case SurveyStatus.Published:
                return 'check';
            case SurveyStatus.InProgress:
                return 'clock-circle';
            case SurveyStatus.Cancelled:
                return 'stop';
            case SurveyStatus.Warning:
                return 'warning';
        }
    }

    render() {
        const { status } = this.props;

        const color = mapStatusToColor(status);
        const tooltip = this.mapStatusToTooltip(status);
        const icon = this.mapStatusToIcon(status);

        return (
            <Tooltip placement="top" title={tooltip}>
                <Tag color={color}>
                    <Icon type={icon} />
                </Tag>
            </Tooltip>
        );
    }
}
