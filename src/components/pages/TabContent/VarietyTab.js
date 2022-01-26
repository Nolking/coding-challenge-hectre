
import React from 'react';
import reactDom from 'react-dom';
import { Card } from "antd"
import classes from './VarietyTab.module.css'
import { Pie } from '@ant-design/plots';

export default function PieChart(props) {

        let params = props.params;
        let data = [
            {type: "Gala", value: 0}, {type: "Envy", value: 0}, { type: "Beurre Bosc", value: 0}
        ];
        function makeDataProduction() {
           for (let item of params) {
                switch (item.name) {
                    case 'Gala': 
                        data[0].value += item.numberOfBins; break;
                    case 'Envy':
                        data[1].value += item.numberOfBins; break;
                    case 'Beurre Bosc':
                        data[2].value += item.numberOfBins; break;
                    default: break;
                }
           }
        }
        makeDataProduction();
        // let dataCost= [
        //     {type: "Gala", value: 0}, {type: "Envy", value: 0}, { type: "Beurre Bosc", value: 0}
        // ];
        // function makeDataCost() {
        //     for (let item of params) {
        //          switch (item.name) {
        //              case 'Gala': 
        //                  dataCost[0].value += item.hoursWorked*item.payRatePerHour; break;
        //              case 'Envy':
        //                  dataCost[1].value += item.hoursWorked*item.payRatePerHour; break;
        //              case 'Beurre Bosc':
        //                  dataCost[2].value += item.hoursWorked*item.payRatePerHour; break;
        //              default: break;
        //          }
        //     }
        //  }
        //  makeDataCost();
        // console.log(dataCost)
      const config = {
        appendPadding: 20,
        data,
        height: 300,
        width: 300,
        angleField: 'value',
        colorField: 'type',
        radius: 0.9,
        theme: {
            colors10: ['#77D5D4', '#1A248A', '#F1E15A', '#F1E15A', '#F1E15A', '#F1E15A', '#F1E15A', '#F1E15A', '#F1E15A', '#F1E15A']
        },
        legend: {
                    layout: 'horizontal',
                    position: 'top',
                },
        label: {
          type: 'inner',
          offset: '-30%',
          content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
          style: {
            fontSize: 14,
            textAlign: 'center',
          },
        },
        interactions: [
          {
            type: 'element-active',
          },
        ],
      };
    //   const configCost = {
    //     appendPadding: 20,
    //     dataCost,
    //     angleField: 'value',
    //     colorField: 'type',
    //     radius: 0.9,
    //     theme: {
    //         colors10: ['#77D5D4', '#1A248A', '#F1E15A', '#F1E15A', '#F1E15A', '#F1E15A', '#F1E15A', '#F1E15A', '#F1E15A', '#F1E15A']
    //     },
    //     legend: {
    //         layout: 'horizontal',
    //         position: 'top',
    //     },
    //     label: {
    //       type: 'inner',
    //       offset: '-30%',
    //       content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
    //       style: {
    //         fontSize: 14,
    //         textAlign: 'center',
    //       },
    //     },
    //     interactions: [
    //       {
    //         type: 'element-active',
    //       },
    //     ],
    //   };
      return <div className={classes.wrapper}>
          <Card className={classes.PieChart}><Pie  {...config} /><div className="chart-title">Production<p className='chart-detail'>TOTAL: 1000 bins </p></div> </Card>
          <Card className={classes.PieChart}> <Pie  {...config} /> <div className="chart-title">Cost<p className='chart-detail'>TOTAL: $5000  </p></div> </Card>
        </div> ;
}