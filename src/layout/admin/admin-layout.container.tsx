import { Layout } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './admin-layout.container.less';

const { Header, Footer, Content } = Layout;

export class AdminLayoutContainer extends Component {
    render() {
        return (
            <Layout className="layout">
                <Header>
                    <Link to="/">
                        <h1>Localsurvey</h1>
                    </Link>
                </Header>
                <Content className="content--wrapper">
                    <div className="content">{this.props.children}</div>
                </Content>
                <Footer>
                    <span>Footer</span>
                </Footer>
            </Layout>
        );
    }
}
