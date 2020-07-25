import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./mainComponent/component/Home";
import {BrowserRouter} from 'react-router-dom'
import Sidebar from "./mainComponent/component/Sidebar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Sidebar />
        <Home/>
      </BrowserRouter>
    </div>
  );
}

export default App;
