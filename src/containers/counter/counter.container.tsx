import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { Dispatch } from 'redux';
import { AppState } from '../../state';
import { IncrementCounterAction, CounterActionType } from '../../state/counter/counter.actions';
import { mappedDispatchProps } from '../../state/utils/dispatch.util';

export interface CounterContainerDispatchProps {
    onIncrement: (amount: number, amount2: number) => void;
}

export interface CounterContainerProps {
    count: number;
}

const mapStateToProps = (state: AppState): Partial<CounterContainerProps> => ({
    count: state.counterState.count,
});

const mapDispatchToProps = mappedDispatchProps<CounterContainerDispatchProps>({
    onIncrement: (amount: number, amount2: number) => new IncrementCounterAction({ amount: amount + amount2 }),
});

// @ts-ignore // TODO: this could be done in a more elegant way
@connect(
    mapStateToProps,
    mapDispatchToProps,
)
export class CounterContainer extends Component<CounterContainerProps & CounterContainerDispatchProps> {
    render() {
        const { count, onIncrement } = this.props;

        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '100px' }}>
                <div>{count}</div>
                <div>
                    <Button onClick={this.onIncrement}>Increment</Button>
                </div>
            </div>
        );
    }

    onIncrement = () => this.props.onIncrement(2, 4);
}
