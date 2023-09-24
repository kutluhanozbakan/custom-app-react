import "./App.css";
import "bulma/css/bulma.css";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Menu from './components/Menu';
import Contact from './components/Contact';
import About from './components/About';

import React from 'react'
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/menu" element={ <Menu/> }/>
          <Route path="/contact" element={ <Contact/> }/>
          <Route path="/about"  element={ <About/>}/>

        </Routes>
      </div>
    </>
  );
}

export default App;
