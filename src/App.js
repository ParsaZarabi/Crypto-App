import React from "react";
import { routes, Route, Link, Routes } from 'react-router-dom';
import { Layout, Typography, Space } from "antd";

import { Navbar, Exchanges, Homepage, Cryptocurrencies, CryptoDetails, News } from './components';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="navbar"> 
        <Navbar />
      </div>
      <div className="main">
        <div className="routes">
          <Routes>
          <Route  path="/" element={<Homepage />}></Route>
            <Route  path="/exchanges" element={<Exchanges />}></Route>
            <Route  path="/cryptocurrencies" element={<Cryptocurrencies />}></Route>
            <Route  path="/crypto/:coinId" element={<CryptoDetails />}></Route>
            <Route  path="/news" element={<News />}></Route>
          </Routes>
        </div>

      <div className="footer">
        <Typography.Title  level={5} style={{color: 'white', textAlign: 'center'}}>
          Cryptoverse <br />
          All rights reserverd
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
      </div>
    </div>
  );
}

export default App;
