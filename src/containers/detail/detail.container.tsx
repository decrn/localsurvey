import { Button, Card } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { EditSurveyDetailsModal } from '../../common/components/edit-survey-details-modal/edit-survey-details-modal.component';
import { StatusTag } from '../../common/components/status-tag/status-tag.component';
import { Survey } from '../../common/types/survey.type';
import { AppState } from '../../state';
import { UpdateSurveyAction } from '../../state/surveys/surveys.actions';
import { selectCurrentSurvey } from '../../state/surveys/surveys.selectors';
import { mappedDispatchProps } from '../../state/utils/dispatch.util';
import './detail.container.less';

export interface DetailContainerProps {
    survey: Survey;
}

export interface DetailContainerDispatchProps {
    onUpdateSurvey: (surveyId: string, changes: Partial<Survey>) => void;
}

export interface DetailContainerState {
    isEditModalVisible: boolean;
}

const mapStateToProps = (
    state: AppState,
    props: RouteComponentProps<{ surveyid: string }>,
): Partial<DetailContainerProps> => ({
    survey: selectCurrentSurvey(state, props),
});

const mapDispatchToProps = mappedDispatchProps<DetailContainerDispatchProps>({
    onUpdateSurvey: (surveyId: string, changes: Partial<Survey>) => new UpdateSurveyAction({ surveyId, changes }),
});

// @ts-ignore
@connect(
    mapStateToProps,
    mapDispatchToProps,
)
export class DetailContainer extends Component<
    DetailContainerProps & DetailContainerDispatchProps,
    DetailContainerState
> {
    state = { isEditModalVisible: false };

    render() {
        const { survey } = this.props;
        const { isEditModalVisible } = this.state;

        if (!survey) {
            return <Redirect to="/404" />;
        }

        return (
            <>
                <h2>
                    {survey.name}
                    <Button style={{ margin: '0 6px' }} shape="circle" icon="edit" onClick={this.toggleEditModal} />
                </h2>
                <Card
                    title={
                        <>
                            <span style={{ marginRight: 12 }}>General</span>
                            <StatusTag tooltipPlacement="right" status={survey.status} size="medium" extended />
                        </>
                    }
                    extra={
                        <>
                            <Button>
                                <Link to={`/builder/${survey.id}`}>Survey Builder</Link>
                            </Button>{' '}
                            <Button>Start surveying</Button>
                        </>
                    }
                >
                    <p>{survey.description}</p>

                    <Button style={{ float: 'right' }}>See results</Button>
                </Card>
                {isEditModalVisible && (
                    <EditSurveyDetailsModal
                        onCancel={this.toggleEditModal}
                        values={{
                            name: survey.name,
                            description: survey.description,
                        }}
                        onSubmit={this.updateSurvey}
                    />
                )}
            </>
        );
    }

    toggleEditModal = (): void => {
        this.setState(prevState => ({ isEditModalVisible: !prevState.isEditModalVisible }));
    };

    updateSurvey = (values: { name: string; description: string }) => {
        const surveyId = this.props.survey.id;
        this.props.onUpdateSurvey(surveyId, values);
        this.toggleEditModal();
    };
}
