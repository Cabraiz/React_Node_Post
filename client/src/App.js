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
      <div class="d-flex justify-content-between p-2 topheader">
        <div class="d-flex justify-content-start ms-3">
          <svg class="mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g fill="#FFFFFF">
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
              </g>
          </svg>
          <label id="leftheader" class="ms-auto me-3">(85) 2250.xxxx</label>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
            <g fill="#FFFFFF">
              <path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z"></path>
            </g>
          </svg>
          <label id="rightheader">(85) 99950.xxxx</label>
        </div>
        <div class="d-flex justify-content-end me-3">
          <svg class="mt-1" height="50%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330">
              <g fill="#FFFFFF">
                <path d="M325.607 79.393c-5.857-5.857-15.355-5.858-21.213 0.001l-139.39 139.393L25.607 79.393 c-5.857-5.857-15.355-5.858-21.213 0.001c-5.858 5.858-5.858 15.355 0 21.213l150.004 150c2.813 2.813 6.628 4.393 10.606 4.393 s7.794-1.581 10.606-4.394l149.996-150C331.465 94.749 331.465 85.251 325.607 79.393z"/>
              </g>
          </svg>
          <label id="" class="me-auto ms-2">MEUS PEDIDOS </label>
          <svg class="mt-1 ms-4" height="60%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455 455">
              <g fill="#FFFFFF">
                <polygon points="413.698 90.221 41.302 90.221 18.974 137.595 436.027 137.595 	"/>
                <path d="M 321.723 167.595c6.728 27.226 31.323 47.474 60.563 47.474c29.24 0 53.834-20.249 60.562-47.474H321.723z"/>
                <path d="M 227.5 215.069c29.24 0 53.834-20.249 60.562-47.474H166.938C173.665 194.82 198.26 215.069 227.5 215.069z"/>
                <path d="M 133.277 167.595H12.151c6.728 27.226 31.323 47.474 60.563 47.474S126.549 194.82 133.277 167.595z"/>
                <path d="M 304.893 203.057c-16.509 25.275-45.035 42.012-77.393 42.012s-60.885-16.737-77.393-42.012
                  c-16.508 25.275-45.036 42.012-77.393 42.012c-9.862 0-19.363-1.563-28.281-4.44V455h103.398V283.793h159.338V455h103.398V240.628
                  c-8.918 2.877-18.419 4.44-28.281 4.44C349.929 245.069 321.402 228.332 304.893 203.057z"/>
                <rect x="89.916" width="275.169" height="60.221"/>
                <rect x="177.831" y="313.793" width="99.338" height="141.207"/>
              </g>
          </svg>
          <label id="" class="me-auto ms-2">NOSSAS LOJAS </label>
          <svg class="mt-1 ms-4" width="50%" height="50%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <g fill="#FFFFFF">
                <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
              </g>
          </svg>
          <label id="" class="me-auto ms-2">FALE CONOSCO </label>
        </div>
      </div>
      <Navbar bg="navbar navbar-custom p-4" variant="dark">
          <Container fluid>
            <div class="d-flex justify-content-between">
              <Navbar.Brand href="#">Cabraiz React.JS</Navbar.Brand>
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
                    placeholder="Hoje eu quero..."
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                  </Form>
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
            </div>
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
