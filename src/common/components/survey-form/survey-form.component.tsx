import { Button, Input } from 'antd';
import Form, { FormComponentProps } from 'antd/lib/form';
import FormItem from 'antd/lib/form/FormItem';
import React, { Component } from 'react';
import { ColorPicker } from '../color-picker/color-picker.component';
import './survey-form.component.less';

export interface SurveyFormValues {
    name: string;
    description: string;
}

export interface SurveyFormProps {
    values: SurveyFormValues;
    onSubmit: (values: SurveyFormValues) => void;
}

const mapPropsToFields = (props: SurveyFormProps) => {
    const { name, description } = props.values;

    return {
        name: Form.createFormField({ value: name }),
        description: Form.createFormField({ value: description }),
    };
};

class SurveyFormComponent extends Component<SurveyFormProps & FormComponentProps> {
    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.onSubmit(values);
            }
        });
    };

    render() {
        const { getFieldDecorator, getFieldError, isFieldTouched } = this.props.form;
        const getValidateStatus = (name: string) => isFieldTouched(name) && getFieldError(name);

        // Only show error after a field is touched.

        return (
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
                    labelCol={{
                        xs: { span: 24 },
                        sm: { span: 8 },
                    }}
                    wrapperCol={{
                        xs: { span: 24 },
                        sm: { span: 16 },
                    }}
                >
                    {getFieldDecorator('accentColor', {
                        rules: [],
                    })(<ColorPicker />)}
                </FormItem>

                <Button className="submit-button" onClick={this.handleSubmit}>
                    Save
                </Button>
            </Form>
        );
    }
}

// tslint:disable-next-line:variable-name
export const SurveyForm = Form.create<SurveyFormProps>({ mapPropsToFields })(SurveyFormComponent);
