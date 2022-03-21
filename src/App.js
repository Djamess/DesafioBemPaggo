import React from "react";
import { BrowserRouter, Route} from 'react-router-dom'
import Routes from './routes/App.routes'
import Carrinho from "./Carrinho.js";
import Checkout from "./Checkout.js";

function App() {

    return (
       <BrowserRouter>
        <Routes>
            <Route path="/" element={<Carrinho />} />
            <Route path="/pagamento" element={<Checkout />} />
        </Routes>
</BrowserRouter>
    )
}

export default App;