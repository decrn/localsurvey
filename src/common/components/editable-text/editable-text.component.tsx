import { Icon } from 'antd';
import React, { Component, createRef, Fragment } from 'react';
import { Key } from '../../types/key.type';

export interface EditableTextProps {
    text: string;
    onChange: (text: string) => void;
    onBlur?: Function;
    onFocus?: Function;
}

export interface EditableTextState {
    hasFocus: boolean;
}

export class EditableText extends Component<EditableTextProps, EditableTextState> {
    state = {
        hasFocus: false,
    };

    ref = createRef<HTMLSpanElement>();

    render() {
        const { text } = this.props;

        return (
            <Fragment>
                <span
                    onBlur={this.onBlur}
                    onFocus={this.onFocus}
                    onKeyDown={this.onKeyDown}
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    ref={this.ref}
                >
                    {text}
                </span>
                <Icon type="edit" onClick={this.onFocus} />
            </Fragment>
        );
    }

    onBlur = () => {
        this.setState({ hasFocus: false });
        if (this.ref.current) {
            this.ref.current.blur();
        }
    };

    onFocus = () => {
        this.setState({ hasFocus: true });
        if (this.ref.current) {
            this.ref.current.focus();
        }
    };

    onChange = (text: string) => {
        this.props.onChange(text);
        this.onBlur();
    };

    onKeyDown = (event: React.KeyboardEvent<HTMLSpanElement>) => {
        if (event.key === Key.Enter) {
            event.preventDefault();
            this.onChange((event.target as HTMLSpanElement).innerHTML.trim());
        }
    };
}
