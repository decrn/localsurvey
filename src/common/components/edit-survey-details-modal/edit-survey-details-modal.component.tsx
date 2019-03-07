import { Button, Form, Input, Modal } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import FormItem from 'antd/lib/form/FormItem';
import React, { Component } from 'react';
import { ColorPicker } from '../color-picker/color-picker.component';

export interface EditSurveyDetailsFormValues {
    name: string;
    description: string;
}

export interface EditSurveyDetailsModalProps {
    onCancel: () => void;
    values: EditSurveyDetailsFormValues;
    onSubmit: (values: EditSurveyDetailsFormValues) => void;
}

const mapPropsToFields = (props: EditSurveyDetailsModalProps) => {
    const { name, description } = props.values;

    return {
        name: Form.createFormField({ value: name }),
        description: Form.createFormField({ value: description }),
    };
};

export class EditSurveyDetailsModalComponent extends Component<EditSurveyDetailsModalProps & FormComponentProps> {
    render() {
        const { onCancel, form } = this.props;
        const { getFieldDecorator, getFieldError, isFieldTouched } = form;
        const getValidateStatus = (name: string) => isFieldTouched(name) && getFieldError(name);

        return (
            <Modal
                visible={true}
                title="Edit Survey"
                onCancel={onCancel}
                footer={[
                    <Button key="submit" className="submit-button" onClick={this.handleSubmit}>
                        Save
                    </Button>,
                ]}
            >
                <Form className="edit-survey__form" onSubmit={this.handleSubmit}>
                    <FormItem
                        label="Name"
                        validateStatus={getValidateStatus('name') ? 'error' : ''}
                        help={getValidateStatus('name') || ''}
                    >
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: 'Please input a name!' }],
                        })(<Input placeholder="Name" />)}
                    </FormItem>

                    <FormItem
                        label="Description"
                        validateStatus={getValidateStatus('description') ? 'error' : ''}
                        help={getValidateStatus('description') || ''}
                    >
                        {getFieldDecorator('description', {
                            rules: [{ required: true, message: 'Please input a description!' }],
                        })(<Input placeholder="Description" />)}
                    </FormItem>

                    <FormItem
                        label="Accent color"
                        validateStatus={getValidateStatus('accentColor') ? 'error' : ''}
                        help={getValidateStatus('accentColor') || ''}
                    >
                        {getFieldDecorator('accentColor', {
                            rules: [],
                        })(<ColorPicker />)}
                    </FormItem>
                </Form>
            </Modal>
        );
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.onSubmit(values);
            }
        });
    };
}

export const EditSurveyDetailsModal = Form.create<EditSurveyDetailsModalProps>({ mapPropsToFields })(
    EditSurveyDetailsModalComponent,
);
