import { Button, Dropdown, Icon, Menu } from 'antd';
import { ClickParam } from 'antd/lib/menu';
import React, { Component, ReactChild, ReactElement } from 'react';
import './collapsible-buttons.component.less';

export interface CollapsibleButtonsProps {
    children: ReactElement<Button>[];
}

export class CollapsibleButtons extends Component<CollapsibleButtonsProps> {
    handleMenuClick = (e: ClickParam) => {
        const button: ReactChild = this.props.children[Number.parseInt(e.key, 10)];
        if (button.props.onClick !== undefined) {
            button.props.onClick();
        }
    };

    render() {
        const menu = (
            <Menu onClick={this.handleMenuClick}>
                {this.props.children.map((element: ReactChild, key: number) => {
                    // TODO: fix casting to a button, instead check if element is a button
                    // if (element instanceof Button) {
                    const button = (element as unknown) as Button;
                    return <Menu.Item key={key}>{button.props.children}</Menu.Item>;
                    // }
                })}
            </Menu>
        );

        return (
            <div className="collapsible-buttons-container">
                <div className="wide-only">{this.props.children}</div>

                <div className="thin-only">
                    <Dropdown overlay={menu}>
                        <Button style={{ marginLeft: 8 }}>
                            Actions <Icon type="down" />
                        </Button>
                    </Dropdown>
                </div>
            </div>
        );
    }
}
