import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { BuilderContainer } from '../containers/builder/builder.container';
import { DetailContainer } from '../containers/detail/detail.container';
import { HomepageContainer } from '../containers/homepage/homepage.container';
import { AdminLayoutContainer } from '../layout/admin/admin-layout.container';
import './app.container.less';

export class AppContainer extends Component {
    render() {
        return (
            <AdminLayoutContainer>
                <Switch>
                    <Route exact path="/" component={HomepageContainer} />
                    <Route exact path="/:surveyid" component={DetailContainer} />
                    <Route exact path="/builder/:surveyid" component={BuilderContainer} />
                    <Route render={() => <div>No routes here</div>} />
                </Switch>
            </AdminLayoutContainer>
        );
    }
}
