import './App.css';
import './routes/App.routes.js';
import React, { useState } from 'react';

function App() {

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

  }

  const [count, setCount] = useState(0);

  return <form onSubmit={handleSubmit}>
    <h1>Formulário para compra de Pacote de adesivos</h1>
    <br />
    <h2> Quais adesivos: </h2>

    <div className="checks">
      <label>
        <input id="react" type="checkbox" name="React" />React<br />
      </label>
      <label>
        <input id="vue" type="checkbox" name="Vue" />Vue<br />
      </label>
      <label>
        <input id="angular" type="checkbox" name="Angular" />Angular<br />
      </label>
    </div>

    <h2> Quantos adesivos de cada? </h2>

    <button onClick={() => setCount(count - 1)}>-</button>
    <text id="quantidade" name="quantidade"> {count} </text>
    <button onClick={() => setCount(count + 1)}>+</button>

    <br />
    <br />

    <textarea id="obs" name="obs" placeholder='Observações' /><br />

    <button type="submit" href="./routes/App.routes.js">Enviar</button>

  </form>

}

export default App;