import { Button } from 'antd';
import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppState } from '../state';
import { HomepageContainer } from '../containers/homepage/homepage.container';
import { CounterContainer } from '../containers/counter/counter.container';

export class AppContainer extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/" component={HomepageContainer} />
                {/* <Route path="counter" component={CounterContainer} /> */}
            </BrowserRouter>
        );
    }
}
