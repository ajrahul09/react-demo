import './App.css';
import React, {useState, useRef, useEffect} from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todo';

function App() {

  const [todos, setTodos] = useState([])
  const inputNameVal = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storedTodos) setTodos(storedTodos);
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos])

  function addTodo(e) {
    const val = inputNameVal.current.value;
    if(val === '') return;
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name:val, complete:false}];
    })
    inputNameVal.current.value = '';
  }

  function toggleTodo(id) {
    const copyTodos = [...todos];
    const todo = copyTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(copyTodos);
  }

  function handleClearTodos() {
    const uncompleteTodos = todos.filter(todo => !todo.complete)
    setTodos(uncompleteTodos);
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={inputNameVal} type="text" />
      <button onClick={addTodo}>Add</button>
      <button onClick={handleClearTodos}>Clear Complete</button>
      <div> {todos.filter(todo => !todo.complete).length} todo left</div>
    </>
  )
}

export default App;
