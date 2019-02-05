import { Table } from 'antd';
import { ColumnProps } from 'antd/lib/table'; // Figure this import out
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../../state';

export interface SurveyListComponentProps {
    items: any[];
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
                render: (text: any) => text,
            },
            {
                title: 'Last edited at',
                dataIndex: 'lastEditedAt',
                key: 'lastEditedAt',
                render: (text: any) => text,
            },
        ];
        return <Table dataSource={items} columns={columns} />;
    }
}
