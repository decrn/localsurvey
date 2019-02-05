import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { Dispatch } from 'redux';
import { AppState } from '../../state';
import { IncrementCounterAction, CounterActionType, DecrementCounterAction } from '../../state/counter/counter.actions';
import { mappedDispatchProps } from '../../state/utils/dispatch.util';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

export interface CounterContainerDispatchProps {
    onIncrement: (amount?: number) => void;
    onDecrement: (amount?: number) => void;
}

export interface CounterContainerProps {
    count: number;
}

const mapStateToProps = (state: AppState): Partial<CounterContainerProps> => ({
    count: state.counterState.count,
});

const mapDispatchToProps = mappedDispatchProps<CounterContainerDispatchProps>({
    onIncrement: (amount?: number) => new IncrementCounterAction({ amount }),
    onDecrement: (amount?: number) => new DecrementCounterAction({ amount }),
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
            <Fragment>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link to="/counter/increment">Increment</Link>
                    <div style={{ margin: '8px' }} />
                    <Link to="/counter/decrement">Decrement</Link>
                </div>
                <Switch>
                    <Route
                        path="/counter/increment"
                        render={() => (
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    padding: '100px',
                                }}
                            >
                                <div>{count}</div>
                                <div>
                                    <Button onClick={this.onIncrement}>Increment</Button>
                                </div>
                            </div>
                        )}
                    />
                    <Route
                        path="/counter/decrement"
                        render={() => (
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    padding: '100px',
                                }}
                            >
                                <div>{count}</div>
                                <div>
                                    <Button onClick={this.onDecrement}>Decrement</Button>
                                </div>
                            </div>
                        )}
                    />
                    <Redirect to="/counter/increment" />
                </Switch>
            </Fragment>
        );
    }

    onIncrement = () => this.props.onIncrement();
    onDecrement = () => this.props.onDecrement();
}
