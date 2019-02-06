import { Layout } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Survey } from '../../common/types/survey';
import { AppState } from '../../state';
import { SurveyListComponent } from './survey-list.component';

const { Header, Footer, Sider, Content } = Layout;

export interface HomepageContainerProps {
    surveys: Survey[];
}

const mapStateToProps = (state: AppState): Partial<HomepageContainerProps> => ({
    surveys: state.homepageState.surveys,
});

// @ts-ignore
@connect(mapStateToProps)
export class HomepageContainer extends Component<HomepageContainerProps> {
    render() {
        const { surveys } = this.props;

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
                        <SurveyListComponent items={surveys} />
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
