import React, { Component } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush,
  AreaChart, Area,
} from 'recharts';

const Customerdata = [
  {
    name: '1st Day', customers:400
  },
  {
    name: '5th Day', customers: 300
  },
  {
    name: '10th Day', customers: 600
  },
  {
    name: '15th Day', customers: 800
  },
  {
    name: '20th Day', customers: 400
  },
  {
    name: '25th Day', customers: 348
  },
  {
    name: '30th Day', customers: 457
  },
];
const salesData = [
    {
      name: '1st Day', sales:4000
    },
    {
      name: '5th Day', sales: 3000
    },
    {
      name: '10th Day', sales: 2000
    },
    {
      name: '15th Day', sales: 2780
    },
    {
      name: '20th Day', sales: 1890
    },
    {
      name: '25th Day', sales: 2390
    },
    {
      name: '30th Day', sales: 3490
    },
  ]
export default class Example extends Component{

  render() {
    return (
      <div>
        <LineChart
          width={500}
          height={200}
          data={Customerdata}
          syncId="anyId"
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="customers" stroke="#8884d8" fill="#8884d8" />
        </LineChart>
         <h6 style={{marginBottom:"2%",marginTop:"8px",marginLeft:"14%"}}>Customer Acquasition</h6>
        <AreaChart
          width={500}
          height={200}
          data={salesData}
          syncId="anyId"
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="sales" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        <h6 style={{marginBottom:"2%",marginTop:"8px",marginLeft:"20%"}}>Sales Graph</h6>

       
      </div>
    );
  }
}
