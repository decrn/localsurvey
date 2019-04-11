import { Card, Icon } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { DragDropBuilder } from '../../builder/components/drag-drop-builder.component';
import { StatusTag } from '../../common/components/status-tag/status-tag.component';
import { SurveyItem } from '../../common/types/survey-item.type';
import { Survey } from '../../common/types/survey.type';
import { AppState } from '../../state';
import {
    AddSurveyItemAction,
    RemoveSurveyItemAction,
    UpdateSurveyItemAction,
} from '../../state/surveys/surveys.actions';
import { selectCurrentSurvey } from '../../state/surveys/surveys.selectors';
import { mappedDispatchProps } from '../../state/utils/dispatch.util';
import './builder.container.less';

export interface BuilderRouteInfo {
    surveyid: string;
}

export interface BuilderContainerProps extends RouteComponentProps {
    survey: Survey;
}

export interface BuilderContainerDispatchProps {
    onAddSurveyItem: (surveyId: string, surveyItem: SurveyItem) => void;
    onRemoveSurveyItem: (surveyId: string, surveyItem: SurveyItem) => void;
    onUpdateSurveyItem: (surveyId: string, surveyItem: SurveyItem) => void;
}

const mapStateToProps = (
    state: AppState,
    props: RouteComponentProps<{ surveyid: string }>,
): Partial<BuilderContainerProps> => ({
    survey: selectCurrentSurvey(state, props),
});

const mapDispatchToProps = mappedDispatchProps<BuilderContainerDispatchProps>({
    onAddSurveyItem: (surveyId: string, surveyItem: SurveyItem) => {
        return new AddSurveyItemAction({ surveyId, surveyItem });
    },
    onRemoveSurveyItem: (surveyId: string, surveyItem: SurveyItem) => {
        return new RemoveSurveyItemAction({ surveyId, surveyItem });
    },
    onUpdateSurveyItem: (surveyId: string, surveyItem: SurveyItem) => {
        return new UpdateSurveyItemAction({ surveyId, surveyItem });
    },
});

// @ts-ignore
@connect(
    mapStateToProps,
    mapDispatchToProps,
)
export class BuilderContainer extends Component<BuilderContainerProps & BuilderContainerDispatchProps> {
    render() {
        const { survey } = this.props;

        if (!survey) {
            return <span>Survey not found</span>;
        }

        return (
            <>
                <Card>
                    <div className="row__title">
                        <Link to={`/surveys/${survey.id}`} className="icon--back">
                            <Icon type="left-circle" />
                        </Link>
                        <h1 className="title">{survey.name}</h1>
                        <StatusTag status={survey.status} size="large" extended />
                    </div>
                </Card>

                <DragDropBuilder
                    surveyItems={survey.items}
                    onRemoveSurveyItem={this.onRemoveSurveyItem}
                    onAddSurveyItem={this.onAddSurveyItem}
                    onUpdateSurveyItem={this.onUpdateSurveyItem}
                />
            </>
        );
    }

    onAddSurveyItem = (surveyItem: SurveyItem) => {
        const { survey } = this.props;
        this.props.onAddSurveyItem(survey.id, surveyItem);
    };

    onRemoveSurveyItem = (surveyItem: SurveyItem) => {
        const { survey } = this.props;
        this.props.onRemoveSurveyItem(survey.id, surveyItem);
    };

    onUpdateSurveyItem = (surveyItem: SurveyItem) => {
        const { survey } = this.props;
        this.props.onUpdateSurveyItem(survey.id, surveyItem);
    };
}
