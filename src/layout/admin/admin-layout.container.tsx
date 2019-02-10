import { Layout } from 'antd';
import React, { Component } from 'react';
import './admin-layout.container.less';

const { Header, Footer, Content } = Layout;

export class AdminLayoutContainer extends Component {
    render() {
        return (
            <Layout className="layout">
                <Header>
                    <div>
                        <h1>Localsurvey</h1>
                    </div>
                </Header>
                <Content className="content--wrapper">
                    <div className="content">{this.props.children}</div>
                </Content>
                <Footer>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor, ipsa quas omnis
                        eligendi hic deleniti alias vel possimus. Unde voluptatibus excepturi tenetur aliquid similique
                        sunt corporis consequuntur nam quis!
                    </p>
                </Footer>
            </Layout>
        );
    }
}
