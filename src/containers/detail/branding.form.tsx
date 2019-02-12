import { Button, Input } from 'antd';
import Form, { FormComponentProps } from 'antd/lib/form';
import FormItem from 'antd/lib/form/FormItem';
import TextArea from 'antd/lib/input/TextArea';
import React, { Component } from 'react';
import { ColorPicker } from '../../common/components/color-picker/color-picker.component';

const hasErrors = (fieldsError: any): boolean => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
};

export interface BrandingFormProps {
    values: {
        introductionMessage: string;
        logoUrl: string;
        organisationName: string;
        accentColor: string;
        footerText: string;
        completionMessage: string;
    };
}

const mapPropsToFields = (props: BrandingFormProps) => {
    const { introductionMessage, logoUrl, organisationName, accentColor, footerText, completionMessage } = props.values;

    return {
        introductionMessage: Form.createFormField({ value: introductionMessage }),
        logoUrl: Form.createFormField({ value: logoUrl }),
        organisationName: Form.createFormField({ value: organisationName }),
        accentColor: Form.createFormField({ value: accentColor }),
        footerText: Form.createFormField({ value: footerText }),
        completionMessage: Form.createFormField({ value: completionMessage }),
    };
};

class BrandingFormComponent extends Component<BrandingFormProps & FormComponentProps> {
    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();

        this.props.form.setFieldsValue(this.props.values);
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields(err => {
            if (!err) {
                // console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        // TODO: Extract this and others to util file
        const getValidateStatus = (name: string) => isFieldTouched(name) && getFieldError(name);

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    label="Introduction message"
                    validateStatus={getValidateStatus('introductionMessage') ? 'error' : ''}
                    help={getValidateStatus('introductionMessage') || ''}
                    {...formItemLayout}
                >
                    {getFieldDecorator('introductionMessage', {
                        rules: [],
                    })(<TextArea placeholder="Introduction message" autosize={{ minRows: 3, maxRows: 6 }} />)}
                </FormItem>

                <FormItem
                    label="URL of logo"
                    validateStatus={getValidateStatus('logoUrl') ? 'error' : ''}
                    help={getValidateStatus('logoUrl') || ''}
                    {...formItemLayout}
                >
                    {getFieldDecorator('logoUrl', {
                        rules: [],
                    })(<Input placeholder="http://" />)}
                </FormItem>

                <FormItem
                    label="Organisation name"
                    validateStatus={getValidateStatus('organisationName') ? 'error' : ''}
                    help={getValidateStatus('organisationName') || ''}
                    {...formItemLayout}
                >
                    {getFieldDecorator('organisationName', {
                        rules: [],
                    })(<Input placeholder="Organisation name" />)}
                </FormItem>

                {/* TODO: update form value from ColorPicker */}
                <FormItem
                    label="Accent color"
                    validateStatus={getValidateStatus('accentColor') ? 'error' : ''}
                    help={getValidateStatus('accentColor') || ''}
                    {...formItemLayout}
                >
                    {getFieldDecorator('accentColor', {
                        rules: [],
                    })(<ColorPicker />)}
                </FormItem>

                <FormItem
                    label="Footer text"
                    validateStatus={getValidateStatus('footerText') ? 'error' : ''}
                    help={getValidateStatus('footerText') || ''}
                    {...formItemLayout}
                >
                    {getFieldDecorator('footerText', {
                        rules: [],
                    })(<TextArea placeholder="Footer text" autosize={{ minRows: 3, maxRows: 6 }} />)}
                </FormItem>

                <FormItem
                    label="Completion message"
                    validateStatus={getValidateStatus('completionMessage') ? 'error' : ''}
                    help={getValidateStatus('completionMessage') || ''}
                    {...formItemLayout}
                >
                    {getFieldDecorator('completionMessage', {
                        rules: [],
                    })(<TextArea placeholder="Completion message" autosize={{ minRows: 3, maxRows: 6 }} />)}
                </FormItem>

                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                        Save
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

export const BrandingForm = Form.create<BrandingFormProps>({ mapPropsToFields })(BrandingFormComponent);
