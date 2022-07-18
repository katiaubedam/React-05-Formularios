import Lista from './components/Lista';
import Eliminar from './components/Eliminar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import {useState} from 'react'
import './App.css';

function App() {

  const [input, setInput] = useState("")
  const [parrafo, setParrafo] = useState()
  const [compositores, setCompositores] = useState([
    {
      nombre: 'Wolfgang Amadeus Mozart',
      fecha: 1756,
      canciones: ['Symphonie Nr 40', 'Don Giovanni']},
    {
      nombre: 'Ludwig van Beethoven',
      fecha: 1770,
      canciones: ['Symphonie No.5', 'Piano Sonata No.32']
    },
    {
      nombre: 'Johann Sebastian Bach',
      fecha: 1685,
      canciones: ['Vivace', 'Largo ma non tanto']
    }])

  function addName() {
    let newArr = [...compositores]
    newArr.push({nombre: input})
    setCompositores(newArr)
    setInput("")
  }

  return (
    <BrowserRouter>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Incio</Link></li>
            <li><Link to="/eliminar">Eliminar</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element = {
          <>
            <Lista compositores={compositores} />
            <div>
              <input type="text" onChange={(event) => setInput(event.target.value)} value={input} />
              <button onClick={addName} >Guardar</button>
            </div>
            
            <p>{parrafo}</p>
          </>
        } />
        
        <Route path="/eliminar" element={<Eliminar compositores={compositores} setCompositores= {setCompositores} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
