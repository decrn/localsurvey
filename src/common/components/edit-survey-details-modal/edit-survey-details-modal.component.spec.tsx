import { shallow } from 'enzyme';
import React from 'react';
import { buildWrappedFormUtils } from '../../test-utils/wrapped-form-utils.builder';
import { EditSurveyDetailsModalComponent } from './edit-survey-details-modal.component';

const defaultComponent = (
    <EditSurveyDetailsModalComponent
        onCancel={jest.fn()}
        values={{ name: '', description: '' }}
        onSubmit={jest.fn(() => {
            throw new Error();
        })}
        form={buildWrappedFormUtils()}
    />
);
const mockEvent = {
    preventDefault: jest.fn(),
};

describe('EditSurveyDetailsModalComponent', () => {
    it('should render', () => {
        shallow<EditSurveyDetailsModalComponent, {}>(defaultComponent);
    });

    describe('handleSubmit', () => {
        it('should prevent the default event', () => {
            const wrapper = shallow<EditSurveyDetailsModalComponent>(defaultComponent);

            wrapper.instance().handleSubmit(mockEvent as any);

            expect(mockEvent.preventDefault).toHaveBeenCalled();
        });
    });
});
