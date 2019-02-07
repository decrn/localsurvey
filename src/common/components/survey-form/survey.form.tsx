import { Input } from 'antd';
import Form, { FormComponentProps } from 'antd/lib/form';
import FormItem from 'antd/lib/form/FormItem';
import React, { Component } from 'react';

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
        const getValidateStatus = (name: string) => isFieldTouched(name) && getFieldError(name);

        // Only show error after a field is touched.

        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    validateStatus={getValidateStatus('name') ? 'error' : ''}
                    help={getValidateStatus('name') || ''}
                >
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Please input a name!' }],
                    })(<Input placeholder="Name" />)}
                </FormItem>

                <FormItem
                    validateStatus={getValidateStatus('description') ? 'error' : ''}
                    help={getValidateStatus('description') || ''}
                >
                    {getFieldDecorator('description', {
                        rules: [{ required: true, message: 'Please input a description!' }],
                    })(<Input placeholder="Description" />)}
                </FormItem>
            </Form>
        );
    }
}
