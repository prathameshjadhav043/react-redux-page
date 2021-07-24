import React from 'react'
import { Nav } from './components/Nav'
import { Home } from './components/Home'
import './App.css';

function App() {

  return (
    <div className="container">
      <Nav />
      <div className="sidebar"></div>
      <Home />
    </div>
  );
}

export default App;
