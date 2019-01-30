import { Action } from 'redux';

export enum CounterActionType {
    IncrementCounterAction = 'Counter: Increment Counter',
    DecrementCounterAction = 'Counter: Decrement Counter',
}

export class IncrementCounterAction implements Action {
    readonly type = CounterActionType.IncrementCounterAction;
    constructor(public payload: { amount?: number }) {}
}

export class DecrementCounterAction implements Action {
    readonly type = CounterActionType.DecrementCounterAction;
    constructor(public payload: { amount?: number }) {}
}

export type CounterAction = IncrementCounterAction | DecrementCounterAction;
