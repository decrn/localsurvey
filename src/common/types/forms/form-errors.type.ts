// To be used with  form.validateFields
export type FormErrors<T> = { [key in keyof T]?: { errors: { message: string; field: key }[] } } | null;
