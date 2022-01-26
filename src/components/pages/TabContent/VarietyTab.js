import React from 'react';
import reactDom from 'react-dom';
import { Card } from "antd"
import classes from './VarietyTab.module.css'
import { Pie } from '@ant-design/plots';

export default function PieChart() {
    const data = [
        {
          type: 'Gala',
          value: 27,
        },
        {
          type: 'Envy',
          value: 25,
        },
        {
          type: 'Royal',
          value: 18,
        }
      ];
      const config = {
        appendPadding: 20,
        data,
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
      return <div className={classes.wrapper}>
          <Card className={classes.PieChart}><Pie  {...config} /> </Card>
          <Card className={classes.PieChart}> <Pie  {...config} /> </Card>
        </div> ;
}