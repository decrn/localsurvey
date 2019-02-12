import { Layout } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SurveyTable } from '../../common/components/survey-table/survey-table.component';
import { Survey } from '../../common/types/survey.type';
import { AppState } from '../../state';
import { ChangeSurveysFilterAction } from '../../state/surveys/surveys.actions';
import { mappedDispatchProps } from '../../state/utils/dispatch.util';
import './homepage.container.less';

const { Header, Footer, Content } = Layout;

export interface HomepageContainerProps {
    surveys: Survey[];
    filter: string;
}

export interface HomepageContainerDispatchProps {
    onChangeFilter: (e: string) => void;
}

const mapStateToProps = (state: AppState): Partial<HomepageContainerProps> => ({
    surveys: state.surveysState.surveys,
    filter: state.surveysState.filter,
});

const mapDispatchToProps = mappedDispatchProps<HomepageContainerDispatchProps>({
    onChangeFilter: (filter: string) => new ChangeSurveysFilterAction({ filter }),
});

// @ts-ignore
@connect(
    mapStateToProps,
    mapDispatchToProps,
)
export class HomepageContainer extends Component<HomepageContainerProps & HomepageContainerDispatchProps> {
    render() {
        const { surveys, filter } = this.props;

        const filteredSurveys = filter === 'all' ? surveys : surveys.filter(survey => survey.status === filter);

        return (
            <Layout className="layout">
                <Header>
                    <h1>Localsurvey</h1>
                </Header>
                <Content className="content-wrapper">
                    <div className="content">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor, ipsa quas omnis
                            eligendi hic deleniti alias vel possimus. Unde voluptatibus excepturi tenetur aliquid
                            similique sunt corporis consequuntur nam quis!
                        </p>
                        <SurveyTable items={filteredSurveys} onChangeFilter={this.onChangeFilter} />
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

    onChangeFilter = (value: string): void => {
        this.props.onChangeFilter(value);
    };
}
