import React from 'react';
import {Link} from "react-router-dom";
import Chart from 'react-apexcharts'
import StatusCard from "../components/status-card/StatusCard";
import statusCards from '../assets/JsonData/status-card-data.json'
import Table from "../components/table/Table";
import Badge from "../components/badge/Badge";

const chartOptions = {
    series: [{
        name: 'Air Temperature, °C',
        data: [18, 19, 19, 22, 24, 23, 20, 16, 14]
    }, {
        name: 'Soil Temperature, °C',
        data: [16, 17, 24, 23, 20, 18, 17, 17, 15]
    }],
    options: {
        colors: ['#6f00ff', '#9400d3'],
        chart: {
            background: 'transparent',
            foreColor: 'var(--txt-color)'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

const currentStatus = {
    head: [
        'Hardware',
        'Status',
        'Connection'
    ],
    body: [
        {
            "hardware": "Air temperature sensor",
            "status": "on",
            "connection": "Good"
        },
        {
            "hardware": "Soil temperature sensor",
            "status": "on",
            "connection": "Good"
        },
        {
            "hardware": "Air humidity sensor",
            "status": "on",
            "connection": "Good"
        },
        {
            "hardware": "Soil temperature sensor",
            "status": "on",
            "connection": "Good"
        },
        {
            "hardware": "Lumosity sensor",
            "status": "on",
            "connection": "Good"
        },
        {
            "hardware": "Heater",
            "status": "off",
            "connection": "Good"
        },
        {
            "hardware": "Sprinkler",
            "status": "off",
            "connection": "Good"
        },
        {
            "hardware": "Fan",
            "status": "on",
            "connection": "Good"
        },
        {
            "hardware": "Lamp",
            "status": "on",
            "connection": "Good"
        }
    ]
}

const renderStatusHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderStatusBody = (item, index) => (
    <tr key={index}>
        <td>{item.hardware}</td>
        <td>{item.status}</td>
        <td>{item.connection}</td>
    </tr>
)

const currentdate = new Date();

const datetime =
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds() + " @ "
    + currentdate.getDate() + "/"
    + (currentdate.getMonth()+1)  + "/"
    + currentdate.getFullYear();


const latestActivity = {
    header: [
        "action id",
        "type",
        "wanted value",
        "time",
        "status"
    ],
    body: [
        {
            id: "#OD1716",
            type: "Watering",
            time: `${datetime}`,
            wantedValue: "7 pH",
            status: "sending"
        },
        {
            id: "#OD1715",
            type: "Lighting",
            time: "09:22:51 @ 10/10/2021",
            wantedValue: "35,000 lux",
            status: "completed"
        },
        {
            id: "#OD1714",
            type: "Heating",
            time: "16:10:33 @ 02/10/2021",
            wantedValue: "18°C",
            status: "in process"
        },
        {
            id: "#OD1713",
            type: "Watering",
            time: "22:53:17 @ 22/09/2021",
            wantedValue: "6.5 pH",
            status: "completed"
        },
        {
            id: "#OD1712",
            type: "Heating",
            time: "04:53:38 @ 14/09/2021",
            wantedValue: "20°C",
            status: "fail"
        }
    ]
}

const requestStatus = {
    "sending": "warning",
    "in process": "primary",
    "completed": "success",
    "fail": "danger"
}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.type}</td>
        <td>{item.wantedValue}</td>
        <td>{item.time}</td>
        <td>
            <Badge type={requestStatus[item.status]} content={item.status} />
        </td>
    </tr>
)

const Dashboard = () => {
    return (
        <div>
            <div className="header-container">
                <h2 className="page-header">Dashboard</h2>
                <h4 className="additional-text">Last sync: {datetime}</h4>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {
                            statusCards.map((item, index) => (
                                <div className="col-6" key={index}>
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height">
                        <Chart
                            options={chartOptions.options}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card__header">
                            <h3>Current status</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={currentStatus.head}
                                renderHead={(item, index) => renderStatusHead(item, index)}
                                bodyData={currentStatus.body}
                                renderBody={(item, index) => renderStatusBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>View All</Link>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="card">
                        <div className="card__header">
                            <h3>latest activity</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={latestActivity.header}
                                renderHead={(item, index) => renderOrderHead(item, index)}
                                bodyData={latestActivity.body}
                                renderBody={(item, index) => renderOrderBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/activity'>View All</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
