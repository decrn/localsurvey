import { Button, Icon } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { StatusTag } from '../../common/components/status-tag/status-tag.component';
import { Survey } from '../../common/types/survey.type';
import { AppState } from '../../state';
import { selectCurrentSurvey } from '../../state/surveys/surveys.selectors';
import './builder.container.less';

export interface BuilderRouteInfo {
    surveyid: string;
}

export interface BuilderContainerProps {
    survey: Survey;
}

const mapStateToProps = (
    state: AppState,
    props: RouteComponentProps<{ surveyid: string }>,
): Partial<BuilderContainerProps> => ({
    survey: selectCurrentSurvey(state, props),
});

// @ts-ignore
@connect(mapStateToProps)
export class BuilderContainer extends Component<BuilderContainerProps> {
    render() {
        // @ts-ignore
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
