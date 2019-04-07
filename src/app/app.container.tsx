import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Redirect, Route, Switch } from 'react-router-dom';
import { PageNotFound } from '../common/components/page-not-found/page-not-found.component';
import { BuilderContainer } from '../containers/builder/builder.container';
import { DetailContainer } from '../containers/detail/detail.container';
import { HomepageContainer } from '../containers/homepage/homepage.container';
import { SandboxContainer } from '../containers/sandbox/sandbox.container';
import { AdminLayoutContainer } from '../layout/admin/admin-layout.container';
import './app.container.less';

export class App extends Component {
    render() {
        return (
            <AdminLayoutContainer>
                <Switch>
                    <Route exact path="/" component={HomepageContainer} />
                    <Route exact path="/sandbox" component={SandboxContainer} />
                    <Route exact path="/surveys/:surveyid" component={DetailContainer} />
                    <Route exact path="/builder/:surveyid" component={BuilderContainer} />
                    <Route exact path="/404" component={PageNotFound} />
                    <Redirect to="404" />
                </Switch>
            </AdminLayoutContainer>
        );
    }
}

export const AppContainer = DragDropContext(HTML5Backend)(App);
