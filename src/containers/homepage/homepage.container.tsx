import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { SurveyTable } from '../../common/components/survey-table/survey-table.component';
import { Survey } from '../../common/types/survey.type';
import { AppState } from '../../state';
import { ChangeSurveysFilterAction } from '../../state/surveys/surveys.actions';
import { selectAllSurveys } from '../../state/surveys/surveys.selectors';
import { mappedDispatchProps } from '../../state/utils/dispatch.util';

export interface HomepageContainerProps {
    surveys: Survey[];
    filter: string;
}

export interface HomepageContainerDispatchProps {
    onChangeFilter: (e: string) => void;
}

const mapStateToProps = (state: AppState): Partial<HomepageContainerProps> => ({
    surveys: selectAllSurveys(state),
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
export class HomepageContainer extends Component<
    HomepageContainerProps & HomepageContainerDispatchProps & RouteComponentProps
> {
    render() {
        const { surveys, filter } = this.props;

        const filteredSurveys = filter === 'all' ? surveys : surveys.filter(survey => survey.status === filter);

        return (
            <SurveyTable
                onChangeFilter={this.onChangeFilter}
                items={filteredSurveys}
                onRowSelected={this.onRowSelected}
            />
        );
    }

    onChangeFilter = (value: string): void => {
        this.props.onChangeFilter(value);
    };

    onRowSelected = (surveyId: string) => {
        this.props.history.push(surveyId);
    };
}
