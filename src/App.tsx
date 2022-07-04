import React from 'react';
import './App.css';
import CoinsMarketList from "./components/coinMarketList/CoinsMarketList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CoinDetails from "./components/coinDetails/CoinDetails";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CoinsMarketList/>}/>
                <Route path="/coins" element={<CoinsMarketList/>}/>
                <Route path="/coins/:coinId" element={<CoinDetails/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
