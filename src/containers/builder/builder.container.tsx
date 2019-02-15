import { Button, Icon } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StatusTag } from '../../common/components/status-tag/status-tag.component';
import { Survey } from '../../common/types/survey.type';
import { AppState } from '../../state';
import './builder.container.less';

export interface BuilderRouteInfo {
    surveyid: string;
}

export interface BuilderContainerProps {
    survey: Survey;
}

const mapStateToProps = (state: AppState): Partial<BuilderContainerProps> => ({
    survey: state.surveysState.surveys.find(s => s.id === state.router.location.pathname.split('/').reverse()[0]),
});

// @ts-ignore
@connect(mapStateToProps)
export class BuilderContainer extends Component<BuilderContainerProps> {
    render() {
        const { survey } = this.props;

        if (!survey) {
            return <span>Survey not found</span>;
        }

        return (
            <>
                <h1>
                    <span>{survey.name}</span>
                    <StatusTag status={survey.status} size="large" extended />
                </h1>
                <Button type="primary">
                    <Icon type="plus" /> Add a question
                </Button>
            </>
        );
    }
}
