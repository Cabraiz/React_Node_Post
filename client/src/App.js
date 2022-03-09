import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/jquery/dist/jquery.min.js'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, Col, Row,Carousel,} from 'react-bootstrap'

import {ReactComponent as SVG_WPP} from './Images/SVGS/Principal/TopHeader/SVG_WPP.svg';
import {ReactComponent as SVG_Home} from './Images/SVGS/Principal/TopHeader/SVG_Home.svg';
import {ReactComponent as SVG_ArrowDown} from './Images/SVGS/Principal/TopHeader/SVG_ArrowDown.svg';
import {ReactComponent as SVG_Store} from './Images/SVGS/Principal/TopHeader/SVG_Store.svg';
import {ReactComponent as SVG_Cell} from './Images/SVGS/Principal/TopHeader/SVG_Cell.svg';

import {ReactComponent as SVG_Logo} from './Images/SVGS/Principal/Nav/SVG_Logo.svg';

import {ReactComponent as SVG_SmartPhone} from './Images/SVGS/Principal/Itens/SVG_SmartPhone.svg';

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
            <Nav className="ms-3"> 
              <SVG_Logo className='logo'/>
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
            <Nav className="me-3">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
      <Container fluid className="navbar-custom_2">
        <Col className="d-flex justify-content-between">
          <Button className="btn-itens pt-2" href="#">
            <Col>
              <SVG_SmartPhone/>
            </Col>
            Smartphones
          </Button>
          <Button className="btn-itens pt-2" href="#">
            <Col>
              <SVG_SmartPhone/>
            </Col>
            Pneus & Auto
          </Button>
          <Button className="btn-itens pt-2" href="#">
            <Col>
              <SVG_SmartPhone/>
            </Col>
            Climatização
          </Button>
          <Button className="btn-itens pt-2" href="#">
            <Col>
              <SVG_SmartPhone/>
            </Col>
            Xiaomi
          </Button> 
          <Button className="btn-itens pt-2" href="#">
            <Col>
              <SVG_SmartPhone/>
            </Col>
            Notebooks
          </Button> 
          <Button className="btn-itens pt-2" href="#">
            <Col>
              <SVG_SmartPhone/>
            </Col>
            Eletrodomésticos
          </Button>
          <Button className="btn-itens pt-2" href="#">
            <Col>
              <SVG_SmartPhone/>
            </Col>
            Televisores
          </Button>
          <Button className="btn-itens pt-2" href="#">
            <Col>
              <SVG_SmartPhone/>
            </Col>
            Móveis
          </Button>
        </Col>
      </Container>
      <Container fluid className="p-0">
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              height="230px"
              className="d-block w-100"
              src="https://cache.marriott.com/marriottassets/marriott/LASTD/lastd-exterior-8448-hor-feat.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img 
              height="230px"
              className="d-block w-100"
              src="https://www.jangadaflatservice.com.br/assets/images/Imagem%20-%2008.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              height="230px"
              className="d-block w-100"
              src="https://photos.mandarinoriental.com/is/image/MandarinOriental/miami-exterior-via-bridge?crop=5,97,4954,2202&anchor=2482,1198"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
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
