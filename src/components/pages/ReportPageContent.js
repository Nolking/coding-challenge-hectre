import React, {useState, useEffect} from "react";
import { Card, DatePicker, Tabs, Select } from "antd"
import moment from 'moment';
import PieChart from "./TabContent/VarietyTab"
import { NavLink } from 'react-router-dom'
import COGNITO_CONFIG from '../../configs/configs.js'

const { Option } = Select;
const { RangePicker } = DatePicker;
const { TabPane } = Tabs;
const gridStyle = {
    lineHeight: "70px", maxWidth: "calc(100%/6)", height: "70px", padding: "0", boxShadow:"none", textAlign: "center", background: "#F9F9F9"
}
const percentageCardStyles = {
    marginTop: "10px"
}
const dateFormat = 'DD/MM/YYYY';
let rangeDateFilter =  [moment('01/07/2021', dateFormat),moment('31/10/2021', dateFormat)];
// let from = moment(rangeDateFilter[0]);
// let to = moment(rangeDateFilter[1]);
// let filteredOrchard = "All";
export default function ReportPageContent(props) {
    let [from, setFrom] = useState(moment(rangeDateFilter[0]));
    let [to, setTo] = useState(moment(rangeDateFilter[1]));
    let [filteredOrchard, setFilteredOrchard] = useState('All');
    let totalBins = 0;
    let totalVarieties = []; 
    let totalStaff = [];
    let totalWorkingHours = 0;
    let averageRate = 0;
    let totalLaborCost = 0;
    let [totalReport, setTotalReport] = useState({'totalBins': totalBins, 
        'totalVarieties': totalVarieties, 'totalStaff': totalStaff,
        'totalWorkingHours' : totalWorkingHours, 'totalLaborCost': totalLaborCost
    })

    let data = props.data;
    let OrchardList = props.OrchardList;
    let VarietyList = props.VarietyList;
    let varietyParams = [];
    let displayData;
    
    filterDisplayData();
    useEffect(() => {
        
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
        setTotalReport(obj);
        console.log('useEffect runs')
        console.log(totalReport)
      }, [from,to,filteredOrchard]);
    function rangeChangeHandler(date, dateString) {
        setFrom(date[0]);
        setTo(date[1]);
        filterDisplayData();
        console.log(totalReport)
    }
    function handleChange(value) {
        setFilteredOrchard(value);
        filterDisplayData()
        console.log(totalReport)

    }
    function getOrchardId(orchardName) {
        for (let orchard of OrchardList) {
            if (orchardName === orchard.name) return orchard.id;
        }
    }
    function filterDisplayData() {
        // displayData = data;
        displayData = data.filter(ele => 
            Date.parse(ele.pickingDate) < Date.parse(to) &&  Date.parse(ele.pickingDate) > Date.parse(from)
        )
        if (filteredOrchard !== 'All') {
            displayData = displayData.filter(ele =>  ele.orchardId === getOrchardId(filteredOrchard))
        }
        // console.log(displayData)
        makeVarietyParams();
    }
    function makeVarietyParams() {
        let i = 0;
        displayData.forEach(el => {
            varietyParams[i] = {}
            varietyParams[i].numberOfBins = el.numberOfBins
            varietyParams[i].hoursWorked = el.hoursWorked;
            varietyParams[i].payRatePerHour = el.payRatePerHour;
            varietyParams[i].name = VarietyList.filter(ele => el.varietyId === ele.id)[0].name;
            i++;
        })
    }
    function toCurrency(num) {
        return new Intl.NumberFormat('en-NZ', { style: 'currency', currency: 'NZD' }).format(num)
    }
    function numberFormat(num) {
        return new Intl.NumberFormat('en-NZ').format(num);
    }
    if (!props.isLoggedIn) {
        console.log('report page log in status' + props.isLoggedIn)
    return (
        <div className="main-page-content">
            <div className="main-page-content__main-card">
                <h1>You need to sign in to view this content !!!</h1>
                <div><a href={COGNITO_CONFIG.SIGNIN_URL}>Sign in</a></div>
            </div>
        </div>
    )} else
        {
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
                    <PieChart params={varietyParams} VarietyList={VarietyList}></PieChart>
                </TabPane>
                <TabPane tab="ORCHARDS" key="2">
                    <PieChart VarietyList={VarietyList}></PieChart>
                </TabPane>
                
            </Tabs>
            </Card>
        </div>
    )}
}