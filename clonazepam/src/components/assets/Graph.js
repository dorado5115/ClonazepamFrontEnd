import React, { ReactDOM } from 'react';
import Chart from 'chart.js/auto';
import Utils from 'react-utils';

function Graph() {
    return(
        <div id="timelineDiv">
            <canvas id="lineChart" width="300" height="300"></canvas>
        </div>
    );
}

const CHART = document.getElementById("lineChart");
console.log(CHART);
let lineChart = new Chart(CHART, {
    type: 'line',
    data: {
        labels: ["Monday", "Tuesday", "Wendnesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [
            {
            label: "Average Emotions per week",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWith: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderWith: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65,59,79,81,56,55,40],
        }

        ]
    }
});
export default Graph;