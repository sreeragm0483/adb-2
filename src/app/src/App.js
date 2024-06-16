import React, { useState, useEffect } from "react";
import "./App.css";
import { getTodos, updateTodo } from "./api/todo";
import { TodoList } from "./components/TodoList";
import { CreateTodo } from "./components/CreateTodo";
import { ErrorPopup } from "./components/ErrorPopup";

export function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [error, setError] = useState("");

  const fetchTodos = async () => {
    const result = await getTodos();
    if (result.error) {
      setError(result.error);
    } else {
      setTodos(result.todos);
    }
  };
  const handleAddTodo = async () => {
    if (newTodo) {
      try {
        const result = await updateTodo(newTodo);
        if (result.error) {
          setError(result.error);
        } else {
          await fetchTodos();
          setNewTodo("");
        }
      } catch (error) {
        setError("An unexpected error occurred.");
      }
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="App">
      {error && <ErrorPopup message={error} />}
      <TodoList todos={todos} />
      <CreateTodo
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        handleAddTodo={handleAddTodo}
      />
    </div>
  );
}

export default App;
