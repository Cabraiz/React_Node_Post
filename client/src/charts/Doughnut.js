import { Line } from 'react-chartjs-2';
import './Chart.css';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    } from 'chart.js';
    
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        ChartDataLabels,
    );
    
    ChartJS.defaults.set('plugins.datalabels', {
        color: '#FE777B',
    });

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            datalabels:{
                offset:2,
                align: 'end',
            },
            
        },
        scales: {
            y: {
                max: 55,
                min: 10,
                ticks: {
                    stepSize: 5
                }
            }
        },
      };

    const data = {
    plugins: [ChartDataLabels],
    labels: ["2018", "2019", "2020", "2021",],
    datasets: [
      {
        label: "jQuery",
        data: [50, 48.7, 43.3, 34.42],
        fill: true,
        backgroundColor: "#1169ae",
        borderColor: "#1169ae",
        borderWidth: 4,
      },
      {
        label: "React.js",
        data: [15, 31.3, 35.9, 40.14],
        fill: true,
        backgroundColor: "#61dafb",
        borderColor: "#61dafb",
        borderWidth: 4,
      },
      {
        label: "Angular.js",
        data: [25, 30.7, 25.1, 22.96],
        fill: true,
        backgroundColor: "#dd0031",
        borderColor: "#dd0031",
        borderWidth: 4,
      },
      {
        label: "Vue.js",
        data: [20, 15.2, 17.3, 18.97],
        fill: true,
        backgroundColor: "#41b883",
        borderColor: "#41b883",
        borderWidth: 4,
      }
    ]
  };
  

function DoughnutChart(){
    return(
        <div> 
            <div style={{width: "auto", height: "230px", margin: "0 auto", paddingTop: "20px", paddingLeft: "40px", paddingRight: "40px",}}>
                <Line data={data} options={options}/>
            </div>
        </div> 
    );   
}

export default DoughnutChart;