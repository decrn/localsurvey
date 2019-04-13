import { Button, Input } from 'antd';
import React, { Component, RefObject } from 'react';

export interface EditableTitleProps {
    onTitleUpdated: (updatedTitle: string) => void;
    content: string;
    heading: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7';
}

export interface EditableTitleState {
    editing: boolean;
    value: string;
    newValue: string;
}

export class EditableTitle extends Component<EditableTitleProps, EditableTitleState> {
    state = {
        editing: false,
        value: this.props.content,
        newValue: this.props.content,
    };

    constructor(props: EditableTitleProps) {
        super(props);
        this.inputRef = React.createRef();
    }

    onPressSave = () => {
        this.setState(prevState => ({ editing: false, value: prevState.newValue }));
        this.props.onTitleUpdated(this.state.newValue);
    };

    onPressCancel = () => {
        console.log('cancelled edit');
        this.setState({ editing: false });
    };

    onPressEdit = () => {
        console.log('editing name');
        this.setState({ editing: true });
        console.log(this.inputRef.current);
    };

    inputRef: RefObject<Input>;

    render() {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                }}
            >
                {this.state.editing ? (
                    <>
                        <Input
                            ref={this.inputRef}
                            style={{ width: '75%' }}
                            defaultValue={this.state.value}
                            onPressEnter={this.onPressSave}
                            onChange={e => this.setState({ newValue: e.target.value })}
                        />
                        <div
                            style={{
                                justifySelf: 'flex-start',
                                display: 'flex',
                                alignItems: 'baseline',
                                paddingLeft: 10,
                            }}
                        >
                            <a onClick={this.onPressCancel} style={{ paddingRight: 10 }}>
                                Cancel
                            </a>
                            <Button type="primary" onClick={this.onPressSave}>
                                Save
                            </Button>
                        </div>
                    </>
                ) : (
                    <>
                        {React.createElement(this.props.heading, [], [this.props.content])}
                        <Button onClick={this.onPressEdit}>Edit</Button>
                    </>
                )}
            </div>
        );
    }
}
