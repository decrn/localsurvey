import { Button, Card } from 'antd';
import React, { Component, ComponentClass } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { StatusTag } from '../../common/components/status-tag/status-tag.component';
import { SurveyForm, SurveyFormProps } from '../../common/components/survey-form/survey-form.component';
import { Survey } from '../../common/types/survey.type';
import { AppState } from '../../state';
import { UpdateSurveyAction } from '../../state/surveys/surveys.actions';
import { selectCurrentSurvey } from '../../state/surveys/surveys.selectors';
import { mappedDispatchProps } from '../../state/utils/dispatch.util';
import './detail.container.less';

export interface DetailRouteInfo {
    surveyid: string;
}

export interface DetailContainerProps {
    survey: Survey;
    generalForm: ComponentClass<SurveyFormProps>;
    // brandingForm: ComponentClass<BrandingFormProps>;
}

export interface DetailContainerDispatchProps {
    onUpdateSurvey: (surveyId: string, changes: Partial<Survey>) => void;
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
export class DetailContainer extends Component<DetailContainerProps & DetailContainerDispatchProps> {
    render() {
        const { survey } = this.props;

        if (!survey) {
            return <span>Survey not found</span>;
        }

        return (
            <>
                <h2>
                    {survey.name}
                    <Button
                        style={{ margin: '0 6px' }}
                        shape="circle"
                        icon="edit"
                        onClick={() => this.setState({ modalVisible: true })}
                    />
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
                            <Button>Survey Builder</Button> <Button>Start surveying</Button>
                        </>
                    }
                >
                    <p>{survey.description}</p>

                    <Button style={{ float: 'right' }}>See results</Button>
                </Card>
                <Card>
                    <SurveyForm
                        values={{
                            name: survey.name,
                            description: survey.description,
                        }}
                        onSubmit={this.updateSurvey}
                    />
                </Card>
            </>
        );
    }

    updateSurvey = (values: { name: string; description: string }) => {
        const surveyId = this.props.survey.id;
        this.props.onUpdateSurvey(surveyId, values);
    };
}
