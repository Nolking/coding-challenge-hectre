import React, {useEffect} from "react";
import "antd/dist/antd.css";
import { Table, Card } from 'antd';

export default function ChemicalPageContent(props) {
    const columns = [
        {
            title: 'CHEMICAL TYPE',
            dataIndex: 'chemicalType',
            key: 'chemicalType',
        },
        {
            title: 'ACTIVE INGREDIENT',
            dataIndex: 'activeIngredient',
            key: 'activeIngredient',
        },
        {
            title: 'NAME',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'PHI (DAYS)',
            dataIndex: 'phi',
            key: 'phi',
        },
    ];
    
    
    return (
        <div className="main-page-content">
            <div className="main-page-content__main-card">
                <Card type="inner" className="table-info-row">
                    <h1>CHEMICALS</h1>
                    <span className="table-info-total-items">There are {props.dataSource.length} chemical in total</span>
                    <h3 className="table-info-add-chemical">+ Add new chemicals</h3>
                </Card>
                <Table sticky={true} dataSource={props.dataSource} columns={columns} pagination={props.pagination} />
            </div>
        </div>
    )
}