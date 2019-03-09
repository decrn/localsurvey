import { WrappedFormUtils } from 'antd/lib/form/Form';

export const buildWrappedFormUtils = (init?: Partial<WrappedFormUtils>): WrappedFormUtils => ({
    getFieldsValue: jest.fn(opts => (c: any) => c),
    getFieldValue: jest.fn(opts => (c: any) => c),
    setFieldsValue: jest.fn(opts => (c: any) => c),
    setFields: jest.fn(opts => (c: any) => c),
    validateFields: jest.fn(),
    validateFieldsAndScroll: jest.fn(),
    getFieldError: jest.fn(),
    getFieldsError: jest.fn(opts => (c: any) => c),
    isFieldValidating: jest.fn(),
    isFieldTouched: jest.fn(),
    isFieldsTouched: jest.fn(),
    resetFields: jest.fn(opts => (c: any) => c),
    getFieldDecorator: jest.fn(opts => (c: any) => c),
    ...init,
});
