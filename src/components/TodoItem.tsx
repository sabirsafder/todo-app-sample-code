import React from 'react';

type Props = {
  task: string;
  completed: boolean;
  toggleTask: () => void;
  deleteTask: () => void;
};

const TodoItem: React.FC<Props> = ({ task, completed, toggleTask, deleteTask }) => {
  return (
    <div>
      <input type="checkbox" checked={completed} onChange={toggleTask} />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{task}</span>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
};

export default TodoItem;
