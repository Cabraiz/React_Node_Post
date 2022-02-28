import './App.css';

function App() {
  return (
    <div className="App">
      <div id="containertudo" class="container mt-5">
        <h1>Inicio</h1>
    
        <a id="createbuttonid" routerLink="create" class="btn btn-success">Criar Dados</a>
        &nbsp;
        <a id="readbuttonid" routerLink="read" class="btn btn-primary">Ler Dados</a>
        <router-outlet></router-outlet> 
      </div>
    </div>
  );
}

export default App;
