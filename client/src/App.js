import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/jquery/dist/jquery.min.js'
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, Col, Row,} from 'react-bootstrap'

import {ReactComponent as SVG_WPP} from './Images/SVGS/Principal/TopHeader/SVG_WPP.svg';
import {ReactComponent as SVG_Home} from './Images/SVGS/Principal/TopHeader/SVG_Home.svg';
import {ReactComponent as SVG_ArrowDown} from './Images/SVGS/Principal/TopHeader/SVG_ArrowDown.svg';
import {ReactComponent as SVG_Store} from './Images/SVGS/Principal/TopHeader/SVG_Store.svg';
import {ReactComponent as SVG_Cell} from './Images/SVGS/Principal/TopHeader/SVG_Cell.svg';

import Create from './Pages/Create/Create.jsx'
import Read from './Pages/Read/Read.jsx'  

function App() {
  return (
    <Container fluid className="p-0">
      <Container fluid className="topheader pt-2">
        <Row>
          <Col className="topheader_left">
            <SVG_WPP className="ms-2"/>
            <Form.Label className="ms-auto me-3">(85) 2250.xxxx</Form.Label>
            <SVG_Home/>
            <Form.Label >(85) 99950.xxxx</Form.Label>
          </Col>
          <Col className="d-flex justify-content-end topheader_right">
            <SVG_ArrowDown/>
            <Form.Label id="" className="ms-2">MEUS PEDIDOS </Form.Label>
            <SVG_Store/>
            <Form.Label className="ms-2">NOSSAS LOJAS </Form.Label>
            <SVG_Cell/>
            <Form.Label className="ms-2 me-2">FALE CONOSCO </Form.Label>
          </Col>
        </Row>
      </Container>
      <Navbar bg="navbar navbar-custom pt-1 pb-1" variant="dark">
          <Container  fluid className="p-0">
            <Nav className="d-flex justify-content-start ms-3"> 
              <svg class="me-1 logo" style={{ height: 50, width: 80 }} xmlns="http://www.w3.org/2000/svg" viewBox="60 10 70 108">
              <g>
                <path fill="#bca36a" d=" M 59.21 45.76 C 59.42 35.26 67.95 24.51 79.02 24.98 C 88.96 22.52 93.18 35.76 102.84 33.82 C 108.71 30.62 113.53 24.20 121.03 25.05 C 127.15 24.34 133.26 27.26 136.99 32.02 C 139.72 36.11 140.85 40.96 142.40 45.56 C 147.59 45.93 152.82 46.07 157.96 46.96 C 154.65 51.54 150.79 55.69 146.66 59.54 C 149.73 59.64 155.88 59.83 158.96 59.92 C 163.89 58.55 165.38 53.13 168.92 49.97 C 171.47 49.82 174.06 49.89 176.62 50.09 C 175.82 59.18 172.70 68.51 165.80 74.80 C 159.88 79.87 151.86 82.32 144.12 81.93 C 138.06 80.85 132.54 78.07 127.14 75.26 C 125.18 84.12 123.53 93.08 120.58 101.69 C 119.83 103.99 117.80 105.50 115.88 106.79 C 110.70 110.31 105.60 113.93 100.32 117.29 C 93.84 110.58 82.03 108.78 79.37 98.79 C 77.20 91.06 75.70 83.17 73.94 75.34 C 65.09 80.61 54.08 84.53 44.08 79.88 C 31.66 75.51 21.98 60.71 26.81 47.70 C 32.59 49.12 34.46 55.00 38.57 58.46 C 43.26 61.65 49.02 60.49 54.07 59.26 C 50.13 55.55 46.10 51.82 43.28 47.15 C 48.58 46.57 53.89 46.17 59.21 45.76 M 78.63 28.12 C 68.94 28.49 63.90 37.31 61.90 45.60 C 64.84 45.44 67.83 45.29 70.78 45.11 C 75.12 63.51 78.48 82.19 83.67 100.37 C 86.14 106.84 94.71 104.30 99.84 105.12 C 97.79 101.42 95.36 97.95 93.19 94.32 C 95.56 95.08 97.85 96.17 100.31 96.65 C 102.92 96.40 105.30 95.05 107.80 94.31 C 105.68 97.93 103.26 101.37 101.29 105.08 C 105.50 104.59 109.93 105.13 114.05 103.96 C 118.13 101.92 118.50 96.48 119.70 92.69 C 123.08 76.80 126.95 61.01 130.30 45.11 C 133.24 45.29 136.09 45.44 139.07 45.61 C 137.32 41.32 136.24 36.46 133.11 32.89 C 128.51 28.25 120.81 27.10 115.00 30.08 C 108.69 32.45 106.90 39.47 103.26 44.48 C 102.83 42.36 102.49 40.22 102.22 38.08 C 101.25 38.07 100.28 38.07 99.31 38.06 C 98.92 39.64 98.12 42.80 97.73 44.39 C 94.07 36.52 88.78 27.64 78.63 28.12 M 49.45 50.48 C 55.53 55.89 62.91 59.70 70.87 61.39 C 69.99 57.56 69.13 53.72 68.18 49.91 C 61.93 50.07 55.69 50.24 49.45 50.48 M 132.53 50.31 C 131.78 54.03 131.04 57.76 130.25 61.48 C 138.09 59.34 145.71 56.07 151.53 50.25 C 145.19 50.13 138.86 50.21 132.53 50.31 M 34.09 68.92 C 39.15 75.88 48.06 77.96 56.06 79.36 C 53.47 76.40 50.84 73.48 48.41 70.38 C 53.45 72.99 58.41 75.87 63.86 77.56 C 61.27 74.39 58.46 71.37 56.41 67.80 C 60.39 69.47 63.84 72.34 67.97 73.61 C 70.03 73.19 71.87 72.11 73.77 71.25 C 72.30 68.55 71.93 64.17 68.24 63.64 C 58.16 57.72 47.42 67.19 37.37 61.70 C 34.08 58.44 31.46 54.60 28.65 50.95 C 28.14 57.38 29.79 63.98 34.09 68.92 M 172.34 50.99 C 169.05 55.04 166.40 60.07 161.67 62.64 C 155.04 64.80 148.18 61.09 141.44 61.83 C 137.29 62.62 133.27 64.00 129.17 64.98 C 128.84 66.93 128.49 68.87 128.14 70.81 C 129.43 71.98 130.72 73.15 132.02 74.32 C 136.14 72.08 140.16 69.62 144.45 67.70 C 142.12 71.17 139.48 74.42 137.04 77.81 C 142.75 76.40 147.30 72.46 152.46 69.84 C 150.42 73.08 148.08 76.13 145.83 79.23 C 151.79 77.99 158.15 77.04 162.94 72.91 C 170.07 68.31 173.13 59.18 172.34 50.99 M 95.68 109.25 C 97.34 110.48 99.02 111.69 100.69 112.90 C 102.21 111.62 103.73 110.37 105.25 109.09 C 102.07 109.13 98.86 109.17 95.68 109.25 Z" />
                <path fill="#bca36a" d=" M 79.07 65.81 C 82.71 66.39 86.31 67.20 89.90 68.04 C 89.98 69.60 90.07 71.17 90.15 72.73 C 87.58 73.09 84.78 74.06 82.31 72.79 C 80.52 70.90 80.25 67.95 79.07 65.81 Z" />
                <path fill="#bca36a" d=" M 110.23 69.18 C 113.96 67.56 117.85 66.35 121.84 65.61 C 120.71 69.12 118.79 72.27 116.41 75.05 C 114.27 73.17 112.18 71.25 110.23 69.18 Z" />
              </g>
              </svg>
              <Navbar.Brand href="#">
                <Form.Label className='cabraiz'>Cabraiz
                  <Form.Label className='cabraiz_2'>React JS
                  </Form.Label>
                </Form.Label>
              </Navbar.Brand>
              <Navbar.Brand href="#"><Form.Label className='register'>®</Form.Label></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="ms-auto my-2 my-lg-0"
                  style={{ maxHeight: '40px' }}
                  navbarScroll
                >
                <Form className="d-flex ms-4 me-5">
                  <FormControl 
                    type="search"
                    placeholder="Hoje eu quero..."
                    aria-label="Search"
                    fontSize="10px"
                  />
                  <Button variant="outline-success"></Button>
                </Form>
                <NavDropdown title={<Form.Label className="white">Minha conta</Form.Label>} id="navbarScrollingDropdown" renderMenuOnMount={true}> 
                  <NavDropdown.Item href="#action4">
                    Fazer <strong>Login</strong>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Fazer o <strong>Cadastro</strong>
                  </NavDropdown.Item> 
                </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Nav>
            <Nav className="d-flex justify-content-end me-3">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
      <Container  className="container mt-5 zp">
          <Router>
            <nav  class="container mb-3">
              <Link class="btn btn-success" to="/create"> Criar Dados </Link>
              &nbsp;
              <Link class="btn btn-primary" to="/read" > Ler Dados </Link>
            </nav>
          
            <Routes>
              <Route path="/read" element={<Read />}/>
              <Route path="/create" element={<Create />}/>
              <Route path="/create/:id" element={<Create />}/>
            </Routes>
          </Router>
      </Container >
    </Container >
  );
}

export default App;
