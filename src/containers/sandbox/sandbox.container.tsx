import React, { Component } from 'react';
import { EditableText } from '../../common/components/editable-text/editable-text.component';

// This container is for messing around and trying components
export class SandboxContainer extends Component {
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <EditableText onChange={this.onTitleChange} text="editable text" />
                <EditableText onChange={this.onTitleChange} text="also editable text" />
            </div>
        );
    }

    onTitleChange = (title: string) => {
        console.log(title);
    };
}
