import './App.css';
import { useState } from 'react';
import { evaluate } from 'mathjs';

import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';

function App() {

  const [input, setInput] = useState('');

  const agregarinput = val => {
    setInput(input + val);

  }

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Se debe ingresar un valor");
    }
  }

  return (
    <div className='App'>
      <div>
        <h1 className='title' >Calculator using React Js</h1>
      </div>
      <div className='contenedor-calculadora' >
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClick={agregarinput} >1</Boton>
          <Boton manejarClick={agregarinput} >2</Boton>
          <Boton manejarClick={agregarinput} >3</Boton>
          <Boton manejarClick={agregarinput} >+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarinput} >4</Boton>
          <Boton manejarClick={agregarinput} >5</Boton>
          <Boton manejarClick={agregarinput} >6</Boton>
          <Boton manejarClick={agregarinput} >-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarinput} >7</Boton>
          <Boton manejarClick={agregarinput} >8</Boton>
          <Boton manejarClick={agregarinput} >9</Boton>
          <Boton manejarClick={agregarinput} >*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado} >=</Boton>
          <Boton manejarClick={agregarinput} >0</Boton>
          <Boton manejarClick={agregarinput} >.</Boton>
          <Boton manejarClick={agregarinput} >/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')} >
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
