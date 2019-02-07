import { Button, Icon, Input } from 'antd';
import Form, { FormComponentProps } from 'antd/lib/form';
import FormItem from 'antd/lib/form/FormItem';
import React, { Component } from 'react';

const hasErrors = (fieldsError: any): boolean => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
};

export interface BrandingFormProps extends FormComponentProps {
    introductionMessage: string;
    logoUrl: string;
    organisationName: string;
    accentColor: string;
    footerText: string;
    completionMessage: string;
}

export class BrandingForm extends Component<BrandingFormProps, any> {
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

        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem validateStatus={nameError ? 'error' : ''} help={nameError || ''}>
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Please input a name!' }],
                    })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="name" />)}
                </FormItem>

                <FormItem>
                    <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                        Save
                    </Button>
                </FormItem>
            </Form>
        );
    }
}
