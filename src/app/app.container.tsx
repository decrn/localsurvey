import { Button } from 'antd';
import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppState } from '../state';
import { CounterContainer } from '../containers/counter/counter.container';

export class AppContainer extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/" component={CounterContainer} />
            </BrowserRouter>
        );
    }
}
