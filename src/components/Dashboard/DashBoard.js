import React from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const DashBoard = () => {
    const data = [
        {
            month: "Mar",
            investment: 100000,
            sell: 241,
            revenue: 10401
        },
        {
            month: "Apr",
            investment: 200000,
            sell: 423,
            revenue: 24500
        },
        {
            month: "May",
            investment: 500000,
            sell: 726,
            revenue: 67010
        },
        {
            month: "Jun",
            investment: 500000,
            sell: 529,
            revenue: 40405
        },
        {
            month: "Jul",
            investment: 600000,
            sell: 601,
            revenue: 50900
        },
        {
            month: "Aug",
            investment: 700000,
            sell: 670,
            revenue: 61000
        }
    ]
    return (
        <div className='all-Chart'>
            <div>
                <h1 className='month-sell'>MONTH WISE SELL</h1>
                <LineChart width={500} height={350} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                    <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
                </LineChart>
            </div>
            <div>
                <h1 className='investment'>Investment vs revenue</h1>
                <ComposedChart width={500} height={350} data={data}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Area type="monotone" dataKey="" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="investment" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
                </ComposedChart>
            </div>
        </div>
    );
};

export default DashBoard;