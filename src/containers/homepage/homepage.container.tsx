import { Layout } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Survey } from '../../common/types/survey.type';
import { AppState } from '../../state';
import { SurveyListComponent } from './survey-list.component';

const { Header, Footer, Content } = Layout;

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
            <>
                <h1>Localsurvey</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor, ipsa quas omnis eligendi
                    hic deleniti alias vel possimus. Unde voluptatibus excepturi tenetur aliquid similique sunt corporis
                    consequuntur nam quis!
                </p>
                <SurveyListComponent items={surveys} />
            </>
        );
    }
}
