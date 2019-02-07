import { Button, Icon, Input } from 'antd';
import Form, { FormComponentProps } from 'antd/lib/form';
import FormItem from 'antd/lib/form/FormItem';
import React, { Component } from 'react';

const hasErrors = (fieldsError: any): boolean => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
};

interface SurveyFormProps extends FormComponentProps {
    name: string;
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
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');

        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem validateStatus={userNameError ? 'error' : ''} help={userNameError || ''}>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </FormItem>
                <FormItem validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                        Log in
                    </Button>
                </FormItem>
            </Form>
        );
    }
}
