import { Button, Col, Icon, Row, Table, Tooltip } from 'antd';
import Search from 'antd/lib/input/Search';
import { RadioChangeEvent } from 'antd/lib/radio';
import RadioGroup from 'antd/lib/radio/group';
import RadioButton from 'antd/lib/radio/radioButton';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { mapStatusToIcon } from '../../mappers/survey-status.mapper';
import { SurveyStatus } from '../../types/survey-status.type';
import { Survey } from '../../types/survey.type';
import { epochToLocaleString } from '../../utils/date.utils';
import { StatusTag } from '../status-tag/status-tag.component';
import './survey-table.component.less';

export interface SurveyTableProps {
    items: Survey[];
    onChangeFilter: (status: string) => void;
}

export class SurveyTable extends Component<SurveyTableProps> {
    state = {
        search: '',
    };

    matchesSearchQuery = (survey: Survey): boolean => {
        const { search } = this.state;
        return search === '' ? true : survey.name.toLowerCase().indexOf(search.toString().toLowerCase()) > -1;
    };

    render() {
        const { items } = this.props;

        const filteredItems = items.filter(this.matchesSearchQuery);

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
                render: epochToLocaleString,
            },
            {
                title: 'Last modified at',
                dataIndex: 'modifiedAt',
                key: 'modifiedAt',
                render: epochToLocaleString,
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
                    <div className="action-buttons">
                        <Tooltip title="Start surveying">
                            <Icon type="form" className="button button--start" onClick={() => console.log('Test 1')} />
                        </Tooltip>
                        <Tooltip title="View details">
                            <Icon
                                type="eye-o"
                                className="button button--details"
                                onClick={() => console.log('Test 2')}
                            />
                        </Tooltip>
                        <Tooltip title="Delete">
                            <Icon
                                type="delete"
                                className="button button--delete"
                                onClick={() => console.log('Test 3')}
                            />
                        </Tooltip>
                    </div>
                ),
            },
        ];

        return (
            <div className="table-container">
                <div className="table-scroll">
                    <Row type="flex" justify="space-between">
                        <Col>
                            <h2>Surveys</h2>
                        </Col>
                        <Col>
                            <Link to="/survey/new">
                                <Tooltip placement="left" title="Create a new survey">
                                    <Button type="primary">
                                        <Icon type="plus" />
                                        New survey
                                    </Button>
                                </Tooltip>
                            </Link>
                        </Col>
                    </Row>
                    <Table
                        dataSource={filteredItems}
                        columns={columns}
                        bordered
                        title={() => (
                            <Row type="flex" justify="space-between">
                                <Col span={16}>
                                    <span className="filterText">Filter:</span>
                                    <RadioGroup name="status-filter" defaultValue="all" onChange={this.onChangeFilter}>
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
                                        placeholder="Search surveys..."
                                        onChange={e => this.setState({ search: e.target.value })}
                                        enterButton
                                        allowClear
                                    />
                                </Col>
                            </Row>
                        )}
                    />
                </div>
            </div>
        );
    }

    onChangeFilter = (e: RadioChangeEvent): void => {
        this.props.onChangeFilter(e.target.value);
    };
}
