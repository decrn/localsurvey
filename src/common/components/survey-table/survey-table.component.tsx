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
import { epochFromNow } from '../../utils/date.utils';
import { matchesQuery } from '../../utils/string.utils';
import { StatusTag } from '../status-tag/status-tag.component';
import './survey-table.component.less';

export interface SurveyTableProps {
    items: Survey[];
    onChangeFilter: (status: string) => void;
    onRowSelected: (surveyId: string) => void;
}

export class SurveyTable extends Component<SurveyTableProps> {
    state = {
        query: '',
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
                title: 'Created',
                dataIndex: 'createdAt',
                key: 'createdAt',
                render: epochFromNow,
            },
            {
                title: 'Last modified',
                dataIndex: 'modifiedAt',
                key: 'modifiedAt',
                render: epochFromNow,
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
                        rowKey={survey => survey.id}
                        bordered
                        onRow={(survey: Survey) => ({
                            onClick: () => this.props.onRowSelected(survey.id),
                        })}
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

    matchesSearchQuery = (survey: Survey): boolean => matchesQuery(survey.name, this.state.query);

    onChangeFilter = (e: RadioChangeEvent): void => this.props.onChangeFilter(e.target.value);
}
