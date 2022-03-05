import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/jquery/dist/jquery.min.js'
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button,} from 'react-bootstrap'

import Create from './Pages/Create/Create.jsx'
import Read from './Pages/Read/Read.jsx'  

function App() {
  return (
    <div className="App">
      <div class="d-flex justify-content-between p-1 mt-1">
        <div class="d-flex justify-content-start ms-3">
          <label id="leftheader" class="ms-auto me-2">  <h6>(85) 99950.xxxx </h6></label>
          <label id="rightheader" class="ms-auto"> <h6>(85) 2250.xxxx </h6></label>
        </div>
        <div class="d-flex justify-content-end me-3">
          <label id="" class="me-auto"><h6> MEUS PEDIDOS </h6></label>
          <label id="" class="me-auto ms-2"><h6> NOSSAS LOJAS </h6></label>
          <label id="" class="me-auto ms-2"><h6> FALE CONOSCO </h6></label>
        </div>
      </div>
      <Navbar bg="navbar navbar-custom" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
              </Form>
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div class="container mt-5 zp">
        <h1 class="ms-2">Inicio</h1>
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
      </div>
    </div>
  );
}

export default App;
