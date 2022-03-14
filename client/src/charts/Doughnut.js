import { Doughnut } from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js'

Chart.register(ArcElement);
const data = {
    labels: ["Dolar", "Euro", "Real", "Rubbles"],
    datasets: [
        {
            data:[10,5,4,3]
        },
    ],
};

function DoughnutChart(){
    return(
        <div> 
            <h1>Doughnut Chart</h1>
            <div style={{width: "100px", margin: "0 auto"}}>
                <Doughnut data = {data}/>
            </div>
        </div> 
    );   
}

export default DoughnutChart;