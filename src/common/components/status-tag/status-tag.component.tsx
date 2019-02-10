import { Icon, Tag, Tooltip } from 'antd';
import React, { Component, CSSProperties } from 'react';
import { mapStatusToColor } from '../../mappers/survey-status.mapper';
import { SurveyStatus } from '../../types/survey-status.type';

declare const StatusTagSizes: ['small', 'medium', 'large'];
export declare type StatusTagSize = (typeof StatusTagSizes)[number];

export interface StatusTagProps {
    status: SurveyStatus;
    extended?: boolean;
    size?: StatusTagSize;
    tooltipPlacement?: 'top' | 'right' | 'left' | 'bottom';
}

export class StatusTag extends Component<StatusTagProps> {
    static defaultProps: Partial<StatusTagProps> = {
        extended: false,
        size: 'medium',
    };

    mapStatusToTooltip = (status: SurveyStatus): string => {
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
    };

    // See: https://ant.design/components/icon/
    mapStatusToIcon = (status: SurveyStatus): string => {
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
    };

    mapSizeToStyle = (size: StatusTagSize): CSSProperties => {
        switch (size) {
            case 'small':
                return { padding: '0px 6px 10px', fontSize: 10 };
            case 'large':
                return { padding: '4px 9px 24px', fontSize: 15 };
            default:
            case 'medium':
                return { padding: '3px 7px 22px', fontSize: 13 };
        }
    };

    render() {
        const { status, size, extended, tooltipPlacement = 'top' } = this.props;

        const color = mapStatusToColor(status);
        const tooltip = this.mapStatusToTooltip(status);
        const icon = this.mapStatusToIcon(status);

        return (
            <Tooltip placement={tooltipPlacement} title={tooltip}>
                <Tag style={this.mapSizeToStyle(size!)} color={color}>
                    <Icon type={icon} />
                    {extended ? <span style={{ paddingLeft: '5px' }}>{status}</span> : null}
                </Tag>
            </Tooltip>
        );
    }
}
