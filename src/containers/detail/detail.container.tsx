import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Survey } from '../../common/types/survey.type';
import { AppState } from '../../state';

export interface DetailContainerProps {
    survey: Survey;
}

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
                <h1>{survey.name}</h1>
            </>
        );
    }
}
