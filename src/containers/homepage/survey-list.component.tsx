import { Button, Table } from 'antd';
import React, { Component } from 'react';
import { StatusTag } from '../../common/components/status-tag/status-tag.component';
import { SurveyStatus } from '../../common/types/survey-status.type';
import { Survey } from '../../common/types/survey.type';

export interface SurveyListComponentProps {
    items: Survey[];
}

// TODO: display some data
export class SurveyListComponent extends Component<SurveyListComponentProps> {
    render() {
        const { items } = this.props;
        const columns: any = [
            {
                title: 'Status',
                dataIndex: 'status',
                key: 'status',
                align: 'center',
                render: (status: SurveyStatus) => <StatusTag status={status} />,
            },
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                render: (text: string) => text,
            },
            {
                title: 'Created at',
                dataIndex: 'createdAt',
                key: 'createdAt',
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
                render: (date: number) => new Date(date * 1000).toLocaleDateString(),
            },
            {
                title: 'Last modified at',
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
            {
                title: 'Actions',
                render: () => (
                    <>
                        <Button type="primary" icon="form">
                            Start surveying
                        </Button>
                        <Button type="default" icon="eye-o">
                            View details
                        </Button>
                        <Button type="danger" icon="delete">
                            Delete
                        </Button>
                    </>
                ),
            },
        ];
        return <Table dataSource={items} columns={columns} bordered />;
    }
}
