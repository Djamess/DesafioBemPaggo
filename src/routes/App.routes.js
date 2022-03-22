import React from "react";
import {Routes, Route } from 'react-router-dom'
import Carrinho from "../Carrinho.js";

function App() {
    return (
        
        <Routes>
            <Route exact path="/" element={<Carrinho />} />
        </Routes>
    )
}

export default App;