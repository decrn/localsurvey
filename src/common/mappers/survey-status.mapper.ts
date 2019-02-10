import { SurveyStatus } from '../types/survey-status.type';

// See: http://beta.ant.design/components/tag/
export const mapStatusToColor = (status: SurveyStatus): 'green' | 'yellow' | 'red' | 'volcano' => {
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

// See: https://ant.design/components/icon/
export const mapStatusToIcon = (status: SurveyStatus): 'check' | 'clock-circle' | 'stop' | 'warning' => {
    switch (status) {
        case SurveyStatus.Published:
            return 'check';
        case SurveyStatus.InProgress:
            return 'clock-circle';
        case SurveyStatus.Cancelled:
            return 'stop';
        case SurveyStatus.Warning:
            return 'warning';
    }
};
