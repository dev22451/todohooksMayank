import './App.css';
import Nav from './components/Nav'
import List from './components/List'
import React, { useState, useEffect } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [todoList, setTodo] = useState(["todo 1", "todo 2", "todo 3"])

  useEffect(() => {
    document.title = `New Todo Added ` + todoList.length;
    window.localStorage.setItem("todoList", todoList)

    return () => {
      window.localStorage.clear()
    }
  })
  return (
    <div className="App">
      <Nav todoList={todoList} setTodo={setTodo} />
      <List todoList={todoList} setTodo={setTodo} />
    </div>
  );
}

export default App;
