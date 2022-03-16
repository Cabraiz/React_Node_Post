import { Line } from 'react-chartjs-2';
import './Chart.css';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {Container, Col, Row, Form,} from 'react-bootstrap'

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
  
  const options = {
    
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
        datalabels:{
            textStrokeWidth:1.1,
            textStrokeColor:'#00000066',
            color: '#FFFFFF',
            align: 'end',
            font: {
              family: "'martiniExtra'",
              size: 15,
            },
            formatter: (value) => {
              let percentage = value + '%';
              return percentage;
            },
        },
    },
    scales: {
        y: {
            grid: {
              drawBorder: false,
              color: '#FFFFFF66'
            },
            align: 'start',
            max: 55,
            min: 10,
            ticks: {
                padding: 15,
                color:"white",
                stepSize: 5,
                font: {
                  size: 18,
                }
            }
        },
        x: {
          grid: {
            drawBorder: false,
            color: '#FFFFFF66'
          },
          ticks: {
              color:"white",
              font: {
                size: 18,
              }
          }
      },
    },
  };


function DoughnutChart(){
    return(
      <Container fluid className="p-0" >
        <Row >
            <Col sm={8} className='backgroundcolorleft'>
                <Line data={data} options={options} className='ms-4 ps-4 me-4 mb-2'/>
            </Col>  
            <Col sm={4} className='backgroundcolorright'>
              <Col className='ms-4 mt-4'>
                <Row></Row>
                <Row> <h4>Web frameworks</h4></Row>
                <Row> <h7>Porcentagem Por Uso Anual</h7></Row>
                <Row> </Row>
                <Row> <h6>Angular</h6> </Row>
                <Row> <h6>jQuery</h6> </Row>
                <Row> <h6>React.Js</h6> </Row>
                <Row> <h6>Vue.Js</h6></Row>
              </Col>
            </Col>
        </Row> 
        </Container>
    );   
}

export default DoughnutChart;