import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { SurveyListComponent } from './survey-list.component';

const { Header, Footer, Sider, Content } = Layout;

export class HomepageContainer extends Component {
    render() {
        const data = {
            surveys: [
                {
                    name: 'Example Survey',
                    createdAt: 0,
                    lastEditedAt: 20,
                    questionCount: 5,
                    key: '0',
                },
                {
                    name: 'Example Survey',
                    createdAt: 0,
                    lastEditedAt: 20,
                    questionCount: 5,
                    key: '1',
                },
            ],
        };

        return (
            <Layout style={{ height: '100%' }}>
                <Header>
                    <div className="logo">
                        <h1>Localsurvey</h1>
                    </div>
                </Header>
                <Content style={{ padding: '50px 50px 0' }}>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        <h1>Localsurvey</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor, ipsa quas omnis
                            eligendi hic deleniti alias vel possimus. Unde voluptatibus excepturi tenetur aliquid
                            similique sunt corporis consequuntur nam quis!
                        </p>
                        <SurveyListComponent items={data.surveys} />
                    </div>
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
