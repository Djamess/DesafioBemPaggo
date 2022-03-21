import './App.css';
import './routes/App.routes.js';
import React, { useState } from 'react';
import { Link} from 'react-router-dom'

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
        </div>

        <h2> Quantos adesivos de cada? </h2>

        <button onClick={() => setCount(count - 1)}>-</button>
        <text id="quantidade" name="quantidade"> {count} </text>
        <button onClick={() => setCount(count + 1)}>+</button>

        <br />
        <br />

        <textarea id="obs" name="obs" placeholder='Observações' /><br />
         
        <Link to="Checkout.js">Enviar</Link>
        
    </form>

}

export default Carrinho;