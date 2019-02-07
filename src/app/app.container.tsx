import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { CounterContainer } from '../containers/counter/counter.container';
import { HomepageContainer } from '../containers/homepage/homepage.container';
import { AdminLayoutContainer } from '../containers/sharedlayouts/admin-layout.container';
import './app.container.less';

export class AppContainer extends Component {
    render() {
        return (
            <AdminLayoutContainer>
                <Switch>
                    <Route exact path="/" component={HomepageContainer} />
                    <Route path="/counter" component={CounterContainer} />
                    <Route render={() => <div>No routes here</div>} />
                </Switch>
            </AdminLayoutContainer>
        );
    }
}
