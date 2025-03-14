import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import { useState } from "react";

function App() {

  const [todos, setTodos] = useState([])

  function handleAddTodos (newTodo){
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} />
      <TodoList todos={todos} />
    </>
  )
}

export default App
