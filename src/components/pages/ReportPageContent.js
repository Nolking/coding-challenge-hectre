import React, {useState, useEffect} from "react";
import { Card, DatePicker, Tabs, Select } from "antd"
import moment from 'moment';
import PieChart from "./TabContent/VarietyTab"
import { NavLink } from 'react-router-dom'
import COGNITO_CONFIG from '../../configs/configs.js'

const { Option } = Select;
const { RangePicker } = DatePicker;
const { TabPane } = Tabs;
let totalReport = {};
const gridStyle = {
    lineHeight: "70px", maxWidth: "calc(100%/6)", height: "70px", padding: "0", boxShadow:"none", textAlign: "center", background: "#F9F9F9"
}
const percentageCardStyles = {
    marginTop: "10px"
}
const dateFormat = 'DD/MM/YYYY';
let rangeDateFilter =  [moment('01/07/2021', dateFormat),moment('31/10/2021', dateFormat)];
let from = moment(rangeDateFilter[0]);
let to = moment(rangeDateFilter[1]);
let filteredOrchard = "All";
export default function ReportPageContent(props) {
    let [totalReport, setTotalReport] = useState({});
    let data = props.data;
    let OrchardList = props.OrchardList;
    let VarietyList = props.VarietyList;
    console.log('report page')
    let displayData;
    console.log('this is data')
    console.log(data)
    filterDisplayData();
    function rangeChangeHandler(date, dateString) {
        // console.log(rangeDateFilter)
        from = date[0];
        to = date[1];
        filterDisplayData();
    }
    function handleChange(value) {
        console.log(`${value}`);
        filteredOrchard = value;
        filterDisplayData()
    }
    function getOrchardId(orchardName) {
        for (let orchard of OrchardList) {
            if (orchardName === orchard.name) return orchard.id;
        }
    }
    function filterDisplayData() {
        displayData = data;
        displayData = displayData.filter(ele => 
            Date.parse(ele.pickingDate) < Date.parse(to) &&  Date.parse(ele.pickingDate) > Date.parse(from)
        )
        if (filteredOrchard !== 'All') {
            displayData = displayData.filter(ele =>  ele.orchardId === getOrchardId(filteredOrchard))
        }
        console.log('filter data')
        console.log(displayData)
        // setTotalReport(showReport());
        totalReport = showReport();
        console.log(totalReport)
    }
    function toCurrency(num) {
        return new Intl.NumberFormat('en-NZ', { style: 'currency', currency: 'NZD' }).format(num)
    }
    function numberFormat(num) {
        return new Intl.NumberFormat('en-NZ').format(num);
    }
    function showReport() {
        let totalBins = 0;
        let totalVarieties = []; 
        let totalStaff = [];
        let totalWorkingHours = 0;
        let averageRate = 0;
        let totalLaborCost = 0;
        for (let item of displayData) {
            totalBins += item.numberOfBins;
            totalWorkingHours = totalWorkingHours + item.hoursWorked;
            totalLaborCost = totalLaborCost + parseFloat(item.hoursWorked)*parseFloat(item.payRatePerHour);
            if (!totalStaff.includes(item.userId)) totalStaff.push(item.userId)
            if (!totalVarieties.includes(item.varietyId)) totalVarieties.push(item.varietyId)
        }
        let obj = {}
        averageRate = totalLaborCost/totalWorkingHours;

        obj.totalBins = numberFormat(totalBins);
        obj.totalWorkingHours = numberFormat(totalWorkingHours.toFixed(2));
        obj.totalLaborCost = toCurrency(totalLaborCost.toFixed(2));
        obj.averageRate = toCurrency(averageRate.toFixed(2));
        obj.totalVarieties = numberFormat(totalVarieties.length);
        obj.totalStaff = numberFormat(totalStaff.length);
        return obj;
    }
    // if (!props.isLoggedIn) {
    //     console.log('report page log in status' + props.isLoggedIn)
    // return (
    //     <div className="main-page-content">
    //         <div className="main-page-content__main-card">
    //             <h1>You need to sign in to view this content !!!</h1>
    //             <div><a href={COGNITO_CONFIG.SIGNIN_URL}>Sign in</a></div>
    //         </div>
    //     </div>
    // )} else
    //     {
        return (
        <div className="main-page-content">
            <Card className="main-card" >
                <Card bordered={false} type="inner" className="filter-area">  
                    <RangePicker onChange={rangeChangeHandler} defaultValue={rangeDateFilter} format={dateFormat} />
                    <span className="filter-icon"></span>
                    <Select defaultValue="All" style={{ width: 120 }} onChange={handleChange}>
                        {OrchardList.map(item => (
                            <Option key={item.id} value={item.name}>{item.name}</Option>
                        ))}
                        <Option  value="All">All</Option>
                    </Select>
                </Card>
                <Card bordered={false} type="inner">  
                    <Card.Grid hoverable={false} align="left" style={gridStyle} className="card-report-title">Total Bins</Card.Grid>
                    <Card.Grid hoverable={false} style={gridStyle} className="card-report-title">
                    Total Varieties
                    </Card.Grid>
                    <Card.Grid hoverable={false} style={gridStyle} className="card-report-title">Total Staffs</Card.Grid>
                    <Card.Grid hoverable={false} style={gridStyle} className="card-report-title" >Total Working Hours</Card.Grid>
                    <Card.Grid hoverable={false} style={gridStyle} className="card-report-title">Average Rate</Card.Grid>
                    <Card.Grid hoverable={false} style={gridStyle} className="card-report-title">Total Labor Cost</Card.Grid>

                    <Card.Grid hoverable={false} onChange={filterDisplayData} style={gridStyle} className="card-report-detail" >{totalReport.totalBins}</Card.Grid>
                    <Card.Grid hoverable={false} style={gridStyle} className="card-report-detail" >{totalReport.totalVarieties}</Card.Grid>
                    <Card.Grid hoverable={false} style={gridStyle} className="card-report-detail" >{totalReport.totalStaff}</Card.Grid>
                    <Card.Grid hoverable={false} style={gridStyle} className="card-report-detail">{totalReport.totalWorkingHours}</Card.Grid>
                    <Card.Grid hoverable={false} style={gridStyle} className="card-report-detail">{totalReport.averageRate}</Card.Grid>
                    <Card.Grid hoverable={false} style={gridStyle} className="card-report-detail">{totalReport.totalLaborCost}</Card.Grid>
                </Card>
            </Card>
            <Card className="percentage-card main-card" style={percentageCardStyles} title="Percentage">
            <Tabs defaultActiveKey="1" >
                <TabPane tab="VARIETIES" key="1">
                    <PieChart VarietyList={VarietyList}></PieChart>
                </TabPane>
                <TabPane tab="ORCHARDS" key="2">
                    <PieChart VarietyList={VarietyList}></PieChart>
                </TabPane>
                
            </Tabs>
            </Card>
        </div>
    )}
// }