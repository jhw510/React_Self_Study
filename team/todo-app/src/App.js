import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoTemplate from "./components/TodoTemplate";
import TodoList from "./components/TodoList";


const App = ()=>{
  return <TodoTemplate>
    <TodoInsert/>
    <TodoList/>
  </TodoTemplate>
};

export default App;
