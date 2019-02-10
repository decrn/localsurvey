import { Input } from 'antd';
import Form, { FormComponentProps } from 'antd/lib/form';
import FormItem from 'antd/lib/form/FormItem';
import React, { Component } from 'react';

export interface SurveyFormProps {
    values: {
        name: string;
        description: string;
    };
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
                // console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator, getFieldError, isFieldTouched } = this.props.form;
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

// tslint:disable-next-line:variable-name
export const SurveyForm = Form.create<SurveyFormProps>({ mapPropsToFields })(SurveyFormComponent);
