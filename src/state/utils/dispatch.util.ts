import { Action, Dispatch } from 'redux';

export const mappedDispatchProps = <T>(dispatchProps: { [k in keyof T]: (...args: any) => Action }) => (
    dispatch: Dispatch<Action>,
) => {
    // TODO: change 'any' in [string, any]
    return Object.entries(dispatchProps).reduce((acc: Object, [propName, action]: [string, any]) => {
        return {
            ...acc,
            [propName]: (...args: any) => {
                return dispatch({ ...action(...args) });
            },
        };
    }, {});
};
