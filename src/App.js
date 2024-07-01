import React from 'react';
import { Navigate, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import logo from './header.png';

import NavBar from './components/navBar';
import Home from './pages/home';
import Friends from './pages/friends';
import Showcase from './pages/showcase';

function App() {
  return (
    <Router>
      <div className="App">
        <main className="App-header">
          <NavBar />
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/showcase" element={<Showcase />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
