import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/jquery/dist/jquery.min.js'


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
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar scroll</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
      </div>
    </nav>
      <div id="containertudo" class="container mt-5">
        <div id="containertudo" class="container mt-5">
          <h1>Inicio</h1>
      
          <a id="createbuttonid" routerLink="create" class="btn btn-success">Criar Dados</a>
          &nbsp;
          <a id="readbuttonid" routerLink="read" class="btn btn-primary">Ler Dados</a>
          <router-outlet></router-outlet> 
        </div>
      </div>
    </div>
  );
}

export default App;
