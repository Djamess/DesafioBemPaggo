import './App.css';
import './routes/App.routes.js';
import React, { useState } from 'react';

function Carrinho() {

    const handleSubmit = (e) => {
        e.preventDefault()
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
            <label>
                <input id="javascript" type="checkbox" name="Javascript" />JavaScript<br />
            </label>
            <label>
                <input id="reactjs" type="checkbox" name="Reactjs" />ReactJS<br />
            </label>
        </div>

        <h2> Quantos adesivos de cada? </h2>

        <button onClick={() => setCount(count - 1)}>-</button>
        <text id="quantidade" name="quantidade"> {count} </text>
        <button onClick={() => setCount(count + 1)}>+</button>

        <br />
        <br />

        <h2>Observações: </h2>
        <textarea id="obs" name="obs" placeholder='Aguma dúvida? Recado?' /><br />

        <button id="envia" type='submit' name='envia'>Enviar</button>

    </form>

}

export default Carrinho;