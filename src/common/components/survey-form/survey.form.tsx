import { Button, Input } from 'antd';
import Form, { FormComponentProps } from 'antd/lib/form';
import FormItem from 'antd/lib/form/FormItem';
import React, { Component } from 'react';

const hasErrors = (fieldsError: any): boolean => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
};

export interface SurveyFormProps extends FormComponentProps {
    name: string;
    description: string;
}

export class SurveyForm extends Component<SurveyFormProps, any> {
    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        // Only show error after a field is touched.
        const nameError = isFieldTouched('name') && getFieldError('name');
        const descriptionError = isFieldTouched('description') && getFieldError('description');

        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem validateStatus={nameError ? 'error' : ''} help={nameError || ''}>
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Please input a name!' }],
                    })(<Input placeholder="Name" />)}
                </FormItem>

                <FormItem validateStatus={descriptionError ? 'error' : ''} help={descriptionError || ''}>
                    {getFieldDecorator('description', {
                        rules: [{ required: true, message: 'Please input a description!' }],
                    })(<Input placeholder="Description" />)}
                </FormItem>
            </Form>
        );
    }
}
