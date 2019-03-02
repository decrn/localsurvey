import { Icon, Tag, Tooltip } from 'antd';
import { shallow } from 'enzyme';
import * as React from 'react';
import { mapStatusToIcon } from '../../mappers/survey-status.mapper';
import { SurveyStatus } from '../../types/survey-status.type';
import { StatusTag } from './status-tag.component';

describe('<StatusTag />', () => {
    it('renders without crashing', () => {
        shallow(<StatusTag status={SurveyStatus.Published} />);
    });

    it('renders a tooltip', () => {
        const wrapper = shallow(<StatusTag status={SurveyStatus.Published} />);
        expect(wrapper.find(Tooltip).exists()).toBe(true);
    });

    it('displays a tag', () => {
        const wrapper = shallow(<StatusTag status={SurveyStatus.Published} />);
        expect(wrapper.find(Tag).exists()).toBe(true);
    });

    it('displays an appropriate icon', () => {
        const wrapper = shallow(<StatusTag status={SurveyStatus.Published} />);
        expect(wrapper.find(Icon).prop('type')).toEqual(mapStatusToIcon(SurveyStatus.Published));
    });

    it('displays the status name when extended', () => {
        const wrapper = shallow(<StatusTag status={SurveyStatus.Published} extended />);
        expect(wrapper.find({ children: SurveyStatus.Published.toString() }).exists()).toBe(true);
    });
});
