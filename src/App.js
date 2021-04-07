import './App.css';
import Nav from './components/Nav'
import List from './components/List'
import React, { useState, useEffect } from 'react'
import useTodoList from './hooks/index'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  let [todoList, setTodo] = useTodoList(["todo 1", "todo 2", "todo 3"])

  return (
    <div className="App">
      <Nav todoList={todoList} setTodo={setTodo} />
      <List todoList={todoList} setTodo={setTodo} />
    </div>
  );
}

export default App;
