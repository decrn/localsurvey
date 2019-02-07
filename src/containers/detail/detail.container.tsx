import { Button, Card, Form, Icon, Modal } from 'antd';
import React, { Component, ComponentClass } from 'react';
import { connect } from 'react-redux';
import { StatusTag } from '../../common/components/status-tag/status-tag.component';
import { SurveyForm, SurveyFormProps } from '../../common/components/survey-form/survey.form';
import { Survey } from '../../common/types/survey.type';
import { AppState } from '../../state';
import { BrandingForm, BrandingFormProps } from './branding.form';
import './detail.container.less';

export interface DetailContainerProps {
    survey: Survey;
    modalVisible: boolean;
    generalForm: ComponentClass<SurveyFormProps>;
    brandingForm: ComponentClass<BrandingFormProps>;
}

const mapStateToProps = (state: AppState): Partial<DetailContainerProps> => ({
    survey: state.detailState.survey,
});

// @ts-ignore
@connect(mapStateToProps)
export class DetailContainer extends Component<DetailContainerProps> {
    public static defaultProps = {
        modalVisible: false,
        generalForm: Form.create()(SurveyForm),
        brandingForm: Form.create()(BrandingForm),
    };

    saveGeneral = () => {
        this.setState({ ...this.state, modalVisible: false });
        console.log(this.props.generalForm);
    };

    render() {
        const { survey, modalVisible } = this.props;

        // TODO: show actual data in these forms
        const generalFormElement = React.createElement(this.props.generalForm);
        const brandingFormElement = React.createElement(this.props.brandingForm);

        return (
            <>
                {/* TODO: modal state doesn't toggle */}
                {/* TODO: disable save button when input is not valid (see BrandingForm) */}
                <Modal
                    title="Edit"
                    visible={modalVisible}
                    onCancel={() => this.setState({ ...this.state, modalVisible: false })}
                    onOk={() => this.saveGeneral()}
                    okText="Save"
                    cancelText="Cancel"
                >
                    {generalFormElement}
                </Modal>

                <h2>
                    {survey.name}{' '}
                    <Button
                        shape="circle"
                        icon="edit"
                        onClick={() => this.setState({ ...this.state, modalVisible: true })}
                    />
                </h2>

                <Card
                    title="General"
                    extra={
                        <>
                            <Button>Survey Builder</Button> <Button>Start surveying</Button>
                        </>
                    }
                >
                    <p>{survey.description}</p>

                    <Button style={{ float: 'right' }}>See results</Button>

                    <ul style={{ listStyleType: 'none' }}>
                        <li>
                            {/* TODO: use extended status tag when it's finished */}
                            <StatusTag status={survey.status} />{' '}
                        </li>
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

                <Card title="Branding">{brandingFormElement}</Card>
            </>
        );
    }
}
