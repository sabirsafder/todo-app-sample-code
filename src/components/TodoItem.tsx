type Props = {
  task: string;
  completed: boolean;
  toggleTask: () => void;
  deleteTask: () => void;
};

const TodoItem = ({ task, completed, toggleTask, deleteTask }: Props) => {
  return (
    <div>
      <input type="checkbox" checked={completed} onChange={toggleTask} />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{task}</span>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
};

export default TodoItem;
