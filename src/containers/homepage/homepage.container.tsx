import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SurveyTable } from '../../common/components/survey-table/survey-table.component';
import { Survey } from '../../common/types/survey.type';
import { AppState } from '../../state';
import { ChangeSurveysFilterAction } from '../../state/surveys/surveys.actions';
import { mappedDispatchProps } from '../../state/utils/dispatch.util';

export interface HomepageContainerProps {
    surveys: Survey[];
    filter: string;
}

export interface HomepageContainerDispatchProps {
    onChangeFilter: (e: string) => void;
}

const mapStateToProps = (state: AppState): Partial<HomepageContainerProps> => ({
    surveys: state.surveysState.surveys,
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
export class HomepageContainer extends Component<HomepageContainerProps & HomepageContainerDispatchProps> {
    render() {
        const { surveys, filter } = this.props;

        const filteredSurveys = filter === 'all' ? surveys : surveys.filter(survey => survey.status === filter);

        return (
            <>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor, ipsa quas omnis eligendi
                    hic deleniti alias vel possimus. Unde voluptatibus excepturi tenetur aliquid similique sunt corporis
                    consequuntur nam quis!
                </p>
                <SurveyTable onChangeFilter={this.onChangeFilter} items={filteredSurveys} />
            </>
        );
    }

    onChangeFilter = (value: string): void => {
        this.props.onChangeFilter(value);
    };
}
