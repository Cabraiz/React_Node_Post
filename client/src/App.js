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
      <div class="d-flex bd-highlight mb-1 mt-1">
        <label id="leftheader" class="ms-2 me-auto"> (85) 99950.xxxx </label>
        <label id="rightheader" class="ms-auto"> (85) 2250.xxxx </label>

        <label id="" class="me-auto"> (85) 99950.xxxx </label>
        <label id="" class="me-auto"> (85) 2250.xxxx </label>
        <label id="" class="me-auto me-3"> (85) 99950.xxxx </label>
      </div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
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
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
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
            </Routes>
          </Router>
      </div>
    </div>
  );
}

export default App;
