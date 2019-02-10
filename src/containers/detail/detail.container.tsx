import { Button, Card, Icon, Modal } from 'antd';
import React, { Component, ComponentClass } from 'react';
import { connect } from 'react-redux';
import { match } from 'react-router';
import { StatusTag } from '../../common/components/status-tag/status-tag.component';
import { SurveyForm, SurveyFormProps } from '../../common/components/survey-form/survey.form';
import { Survey } from '../../common/types/survey.type';
import { AppState } from '../../state';
import { BrandingForm, BrandingFormProps } from './branding.form';
import './detail.container.less';

export interface DetailRouteInfo {
    surveyid: string;
}

export interface DetailContainerProps {
    surveys: Survey[];
    match: match<DetailRouteInfo>;
    modalVisible: boolean;
    generalForm: ComponentClass<SurveyFormProps>;
    brandingForm: ComponentClass<BrandingFormProps>;
}

const mapStateToProps = (state: AppState): Partial<DetailContainerProps> => ({
    surveys: state.surveysState.surveys,
});

// @ts-ignore
@connect(mapStateToProps)
export class DetailContainer extends Component<DetailContainerProps> {
    public static defaultProps = {
        modalVisible: false,
    };

    saveGeneral = () => {
        this.setState({ modalVisible: false });
    };

    render() {
        const { modalVisible } = this.props;

        // TODO: there has to be a better way to do this
        let id = Number.parseInt(this.props.match.params.surveyid, 10);
        if (id === NaN) {
            id = -1;
        }
        const survey = this.props.surveys[id];

        return (
            <>
                {/* TODO: modal state doesn't toggle */}
                {/* TODO: disable save button when input is not valid (see BrandingForm) */}
                <Modal
                    title="Edit"
                    visible={modalVisible}
                    onCancel={() => this.setState({ modalVisible: false })}
                    onOk={() => this.saveGeneral()}
                    okText="Save"
                    cancelText="Cancel"
                >
                    <SurveyForm
                        values={{
                            name: survey.name,
                            description: survey.description,
                        }}
                    />
                </Modal>

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

                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li>
                            {/* TODO: save this timestamp function as helper or something */}
                            <Icon type="plus-circle" /> <u>Created at:</u>{' '}
                            {new Date(survey.createdAt * 1000).toLocaleDateString()}
                        </li>
                        <li>
                            <Icon type="clock-circle" /> <u>Last edited at:</u>{' '}
                            {new Date(survey.modifiedAt * 1000).toLocaleDateString()}
                        </li>
                        <li>
                            <Icon type="question-circle" /> <u>Amount of questions:</u> {survey.questionCount}
                        </li>
                    </ul>
                </Card>

                <Card title="Branding">
                    <BrandingForm values={survey.branding} />
                </Card>
            </>
        );
    }
}
