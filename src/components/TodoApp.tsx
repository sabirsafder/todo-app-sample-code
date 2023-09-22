import React from 'react';
import { useTodoApi } from '../hooks/useTodoApi';
import TodoItem from './TodoItem';

function TodoApp() {
  const { todos, loading, error, deleteTodo, toggleCompleted } = useTodoApi();  // Added toggleCompleted

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.toString()}</p>;

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            task={todo.title}
            completed={todo.completed}
            toggleTask={() => toggleCompleted(todo.id)}  // Added toggleTask
            deleteTask={() => deleteTodo(todo.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoApp;
