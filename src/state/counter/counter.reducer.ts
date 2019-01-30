import { CounterAction, CounterActionType } from './counter.actions';

export interface CounterState {
    count: number;
}

export const initialCounterState = { count: 0 };

export function counterReducer(state: CounterState = initialCounterState, action: CounterAction): CounterState {
    switch (action.type) {
        case CounterActionType.IncrementCounterAction:
            return { ...state, count: state.count + (action.payload.amount || 1) };
        case CounterActionType.DecrementCounterAction:
            return { ...state, count: state.count - (action.payload.amount || 1) };
        default:
            return state;
    }
}
