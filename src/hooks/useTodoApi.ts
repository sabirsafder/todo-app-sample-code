import { useState, useEffect } from 'react';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const useTodoApi = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string | Error>(null); // updated type here

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10');
        const data = await response.json();
        setTodos(data);
      } catch (err) {
        setError(err as string);  // type assertion as string
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const deleteTodo = async (id: number) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE',
      });
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (err) {
      setError(err as string);  // type assertion as string
    }
  };

  const toggleCompleted = async (id: number) => {
    const todoToToggle = todos.find((todo) => todo.id === id);
    if (!todoToToggle) return;
    
    const updatedTodo = { ...todoToToggle, completed: !todoToToggle.completed };
    
    try {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTodo),
      });

      setTodos(todos.map((todo) => todo.id === id ? updatedTodo : todo));
    } catch (err) {
      setError(err as string);
    }
  };

  return { todos, loading, error, deleteTodo, toggleCompleted };
};
