import { SurveyStatus } from '../types/survey-status.type';

// See: http://beta.ant.design/components/tag/
export const mapStatusToColor = (status: SurveyStatus): string => {
    switch (status) {
        case SurveyStatus.Published:
            return 'green';
        case SurveyStatus.InProgress:
            return 'yellow';
        case SurveyStatus.Cancelled:
            return 'red';
        case SurveyStatus.Warning:
            return 'volcano';
    }
};
