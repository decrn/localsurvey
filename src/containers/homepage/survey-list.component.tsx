import { Button, Col, Icon, Row, Table, Tooltip } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { StatusTag } from '../../common/components/status-tag/status-tag.component';
import { SurveyStatus } from '../../common/types/survey-status.type';
import { Survey } from '../../common/types/survey.type';

export interface SurveyListProps {
    items: Survey[];
}

// TODO: display some data
export class SurveyList extends Component<SurveyListProps> {
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
                render: (date: number) => new Date(date * 1000).toLocaleString(),
            },
            {
                title: 'Last modified at',
                dataIndex: 'modifiedAt',
                key: 'modifiedAt',
                render: (date: number) => new Date(date * 1000).toLocaleString(),
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
        return (
            <>
                <Row type="flex" justify="space-between">
                    <Col span={12}>
                        <h2>Surveys</h2>
                    </Col>
                    <Col span={12}>
                        <Link to="/survey/new">
                            <Tooltip placement="left" title="Create a new survey">
                                <Button type="primary" style={{ float: 'right' }}>
                                    <Icon type="plus" />
                                    New survey
                                </Button>
                            </Tooltip>
                        </Link>
                    </Col>
                </Row>
                <Table dataSource={items} columns={columns} bordered />
            </>
        );
    }
}
