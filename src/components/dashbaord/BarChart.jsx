// BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    scales,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Sales',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: '#FFC834',
                borderColor: '#FFC834',
                borderWidth: 0,
                borderRadius: 6,
                maxBarThickness:24,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio:true,
        aspectRatio:  1 / .4,
        plugins: {
            legend: {
                position: 'top',
                display: false
            },
            title: {
                display: false,
                text: 'Monthly Sales Data',
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    display: true,
                },
            },
            y: {
                grid: {
                    display: true,
                    drawBorder: true,
                    color: '#F6F6F5'
                },
                ticks: {
                    display: true,
                },
            }
        }
    };

    return <Bar data={data} options={options} />;
};

export default BarChart;
