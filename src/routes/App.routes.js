import React from "react";
import {Routes, Route } from 'react-router-dom'
import Carrinho from "../Carrinho.js";
import Checkout from "../Checkout.js";

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Carrinho />} />
            <Route exact path="/Checkout" element={<Checkout />} />
        </Routes>
    )
}

export default App;