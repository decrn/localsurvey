import { Button, Col, Icon, Row, Table, Tooltip } from 'antd';
import Search from 'antd/lib/input/Search';
import { RadioChangeEvent } from 'antd/lib/radio';
import RadioGroup from 'antd/lib/radio/group';
import RadioButton from 'antd/lib/radio/radioButton';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { StatusTag } from '../../common/components/status-tag/status-tag.component';
import { mapStatusToIcon } from '../../common/mappers/survey-status.mapper';
import { SurveyStatus } from '../../common/types/survey-status.type';
import { Survey, surveyDateToLocaleString } from '../../common/types/survey.type';

export interface SurveyListProps {
    items: Survey[];
}

export class SurveyList extends Component<SurveyListProps> {
    state = {
        statusFilter: 'all',
        search: '',
        items: this.props.items,
    };

    matchesStatus = (survey: Survey): boolean => {
        const { statusFilter } = this.state;
        return statusFilter === 'all' ? true : survey.status === statusFilter;
    };

    matchesSearchQuery = (survey: Survey): boolean => {
        const { search } = this.state;
        return search === '' ? true : survey.name.toLowerCase().indexOf(search.toString().toLowerCase()) > -1;
    };

    filter = (items: Survey[]): Survey[] => items.filter(this.matchesStatus).filter(this.matchesSearchQuery);

    render() {
        const { items } = this.state;
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
                render: (date: number) => surveyDateToLocaleString(date),
            },
            {
                title: 'Last modified at',
                dataIndex: 'modifiedAt',
                key: 'modifiedAt',
                render: (date: number) => surveyDateToLocaleString(date),
            },
            {
                title: 'Question count',
                dataIndex: 'questionCount',
                key: 'questionCount',
                render: (count: number) => count,
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
                <Table
                    dataSource={this.filter(items)}
                    columns={columns}
                    bordered
                    title={() => (
                        <Row type="flex" justify="space-between">
                            <Col span={16}>
                                <span>Filter: &nbsp;</span>
                                <RadioGroup
                                    name="status-filter"
                                    defaultValue="all"
                                    onChange={(e: RadioChangeEvent) => {
                                        this.setState({ ...this.state, statusFilter: e.target.value });
                                    }}
                                >
                                    <RadioButton value="all">All</RadioButton>
                                    <RadioButton value={SurveyStatus.Published}>
                                        <Icon type={mapStatusToIcon(SurveyStatus.Published)} /> Published
                                    </RadioButton>
                                    <RadioButton value={SurveyStatus.InProgress}>
                                        <Icon type={mapStatusToIcon(SurveyStatus.InProgress)} /> Drafts
                                    </RadioButton>
                                    <RadioButton value={SurveyStatus.Cancelled}>
                                        <Icon type={mapStatusToIcon(SurveyStatus.Cancelled)} /> Cancelled
                                    </RadioButton>
                                </RadioGroup>
                            </Col>
                            <Col span={8}>
                                <Search
                                    style={{ float: 'right' }}
                                    placeholder="Search surveys..."
                                    onChange={e => this.setState({ ...this.state, search: e.target.value })}
                                    enterButton
                                    allowClear
                                />
                            </Col>
                        </Row>
                    )}
                />
            </>
        );
    }
}
