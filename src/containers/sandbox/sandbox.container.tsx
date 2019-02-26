import React, { Component } from 'react';
import { EditableText } from '../../common/components/editable-text/editable-text.component';

export class SandboxContainer extends Component {
    render() {
        return <EditableText onChange={this.onTitleChange} text="editable text" />;
    }

    onTitleChange = (title: string) => {
        console.log(title);
    };
}
