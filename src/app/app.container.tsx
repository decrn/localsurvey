import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { CounterContainer } from '../containers/counter/counter.container';

export class AppContainer extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" render={() => <div>Homepage Works!</div>} />
                <Route path="/counter" component={CounterContainer} />
                <Route render={() => <div>No routes here</div>} />
            </Switch>
        );
    }
}
