import { Icon, Tooltip } from 'antd';
import React, { SFC } from 'react';

/**
 * Displays a bunch of icons with quick actions when hovering
 * on a survey question card
 */

export interface ToolboxAction {
    [key: string]: ToolboxActionConfiguration;
}

export interface ToolboxActionConfiguration {
    tooltip?: string;
    icon: string; // See https://ant.design/components/icon/
    onPress: Function;
}

export interface ToolboxProps {
    visible: boolean;
    actions: ToolboxAction;
    tooltipDelay_ms?: number;
}

export const SurveyQuestionToolbox: SFC<ToolboxProps> = (props: ToolboxProps): JSX.Element => {
    const { visible, tooltipDelay_ms: TOOLTIP_DELAY_MS = 500 } = props;

    return (
        <div
            className="question-toolbox"
            style={{ display: 'flex', backgroundColor: '#fafafa', flexDirection: 'column', width: 40 }}
        >
            {visible &&
                Object.entries(props.actions).map(([name, { tooltip, icon, onPress }]) => (
                    <div className="toolbox-action" key={name}>
                        <a onClick={() => onPress()}>
                            <Tooltip placement="right" title={tooltip} mouseEnterDelay={TOOLTIP_DELAY_MS / 1000}>
                                <Icon style={{ color: '#aaa' }} type={icon} />
                            </Tooltip>
                        </a>
                    </div>
                ))}
        </div>
    );
};
