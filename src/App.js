import React from "react";
import { BrowserRouter, Route } from 'react-router-dom'
import Routes from './routes/App.routes'
import Carrinho from "./Carrinho.js";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Carrinho />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;