import { Button, Col, Icon, Row, Table, Tooltip } from 'antd';
import Search from 'antd/lib/input/Search';
import { RadioChangeEvent } from 'antd/lib/radio';
import RadioGroup from 'antd/lib/radio/group';
import RadioButton from 'antd/lib/radio/radioButton';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { StatusTag } from '../../common/components/status-tag/status-tag.component';
import { SurveyStatus } from '../../common/types/survey-status.type';
import { Survey } from '../../common/types/survey.type';

export interface SurveyListProps {
    items: Survey[];
}

export class SurveyList extends Component<SurveyListProps> {
    state = {
        statusFilter: 'all',
        search: '',
        items: this.props.items,
    };

    filter = (items: Survey[]): Survey[] => {
        let filteredItems = items;

        const status = this.state.statusFilter;
        const query = this.state.search;

        if (this.state.statusFilter !== 'all') {
            filteredItems = filteredItems.filter(item => item.status === status);
        }

        if (this.state.search) {
            filteredItems = filteredItems.filter(
                item => item.name.toLowerCase().indexOf(query.toString().toLowerCase()) > -1,
            );
        }

        return filteredItems;
    };

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
                                    {/* TODO: Quit hardcoding this mess and use the survey-status.type */}
                                    <RadioButton value="published">
                                        <Icon type="check" /> Published
                                    </RadioButton>
                                    <RadioButton value="inprogress">
                                        <Icon type="clock-circle" /> Drafts
                                    </RadioButton>
                                    <RadioButton value="cancelled">
                                        <Icon type="stop" /> Cancelled
                                    </RadioButton>
                                </RadioGroup>
                            </Col>
                            <Col span={8}>
                                <Search
                                    style={{ float: 'right' }}
                                    placeholder="input search text"
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
