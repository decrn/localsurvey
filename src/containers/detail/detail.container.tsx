import { Form, Icon } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Survey } from '../../common/types/survey.type';
import { AppState } from '../../state';
import { SurveyForm } from './survey.form';

export interface DetailContainerProps {
    survey: Survey;
}

const surveyForm = React.createElement(Form.create()(SurveyForm));

const mapStateToProps = (state: AppState): Partial<DetailContainerProps> => ({
    survey: state.detailState.survey,
});

// @ts-ignore
@connect(mapStateToProps)
export class DetailContainer extends Component<DetailContainerProps> {
    render() {
        const { survey } = this.props;

        return (
            <>
                <h1>
                    {survey.name}
                    <Icon type="edit" />
                </h1>
                {surveyForm}
            </>
        );
    }
}
