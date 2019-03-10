import { Button, Form, Input, Modal } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import FormItem from 'antd/lib/form/FormItem';
import React, { Component, FormEvent } from 'react';
import { FormErrors } from '../../types/forms/form-errors.type';
import { ValidateStatus } from '../../types/forms/validate-status.type';
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
        const { getFieldDecorator } = form;

        return (
            <Modal
                visible={true}
                title="Edit Survey"
                onCancel={onCancel}
                footer={[
                    <Button type="primary" key="submit" className="submit-button" onClick={this.handleSubmit}>
                        Save
                    </Button>,
                ]}
            >
                <Form className="edit-survey__form" onSubmit={this.handleSubmit}>
                    <FormItem
                        label="Name"
                        validateStatus={this.getValidateStatus('name')}
                        help={this.getErrors('name') || ''}
                    >
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: 'Please input a name!' }],
                        })(<Input placeholder="Name" />)}
                    </FormItem>

                    <FormItem
                        label="Description"
                        validateStatus={this.getValidateStatus('description')}
                        help={this.getErrors('description') || ''}
                    >
                        {getFieldDecorator('description', {
                            rules: [{ required: true, message: 'Please input a description!' }],
                        })(<Input placeholder="Description" />)}
                    </FormItem>

                    <FormItem
                        label="Accent color"
                        validateStatus={this.getValidateStatus('accentColor')}
                        help={this.getErrors('accentColor') || ''}
                    >
                        {getFieldDecorator('accentColor', {
                            rules: [],
                        })(<ColorPicker />)}
                    </FormItem>
                </Form>
            </Modal>
        );
    }

    getErrors = (name: string): any[] => {
        const { isFieldTouched, getFieldError } = this.props.form;
        return isFieldTouched(name) ? getFieldError(name) : [];
    };

    getValidateStatus = (name: string): ValidateStatus => {
        const { isFieldTouched, getFieldError } = this.props.form;
        if (!isFieldTouched(name)) {
            return '';
        }

        return (getFieldError(name) && getFieldError(name).length && 'error') || '';
    };

    handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        this.props.form.validateFields(
            (errors: FormErrors<EditSurveyDetailsFormValues>, values: EditSurveyDetailsFormValues) => {
                if (!errors) {
                    this.props.onSubmit(values);
                }
            },
        );
    };
}

export const EditSurveyDetailsModal = Form.create<EditSurveyDetailsModalProps>({ mapPropsToFields })(
    EditSurveyDetailsModalComponent,
);
