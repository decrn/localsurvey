import { Table } from 'antd';
import React, { Component } from 'react';
import { Survey } from '../../common/types/survey';

export interface SurveyListComponentProps {
    items: Survey[];
}

// TODO: display some data
export class SurveyListComponent extends Component<SurveyListComponentProps> {
    render() {
        const { items } = this.props;
        const columns: any = [
            {
                title: 'Survey name',
                dataIndex: 'name',
                key: 'name',
                render: (text: any) => text,
            },
            {
                title: 'Created at',
                dataIndex: 'createdAt',
                key: 'createdAt',
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
                render: (date: number) => new Date(date * 1000).toLocaleDateString(),
            },
            {
                title: 'Modified at',
                dataIndex: 'modifiedAt',
                key: 'modifiedAt',
                render: (date: number) => new Date(date * 1000).toLocaleDateString(),
            },
            {
                title: 'Question count',
                dataIndex: 'questionCount',
                key: 'questionCount',
                render: (text: any) => text,
            },
        ];
        return <Table dataSource={items} columns={columns} />;
    }
}
