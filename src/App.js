import './App.css';
import Boton from './components/Boton';

function App() {
  return (
    <div className='App'>
      <div>
        <h1 className='title' >Calculator using React Js</h1>
      </div>
      <div className='contenedor-calculadora' >
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>+</Boton>
        </div>
        <div className='fila'>

        </div>
        <div className='fila'>

        </div>


      </div>
      <div className='fila'>

      </div>

    </div>
  );
}

export default App;
