import './App.css';
import Nav from './components/Nav'
import List from './components/List'
import AddTodoForm from './components/AddTodo'
import useTodoList from './hooks/todo'
import useDisplayForm from './hooks/displaytoggleform'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  let [todoList, addTodo, markTodo, deleteTodo] = useTodoList(["todo 1", "todo 2", "todo 3"])

  const [displayForm, toggleDisplayForm] = useDisplayForm(false)

  let addform = null
  let list = <List todoList={todoList} markTodo={markTodo} deleteTodo={deleteTodo} />

  if (displayForm) {
    addform = <AddTodoForm addTodo={addTodo} toggleDisplayForm={toggleDisplayForm} />
    list = null
  }

  return (
    <div className="App">
      <Nav toggleDisplayForm={toggleDisplayForm} />
      {addform}
      {list}
    </div>
  );
}

export default App;
