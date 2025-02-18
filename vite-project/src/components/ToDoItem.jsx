import { useState } from "react";

function ToDoItem({ task, toggleComplete, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <li className={task.completed ? "completed" : ""}>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
      )}

      {isEditing ? (
        <button onClick={handleEdit}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>✏️</button>
      )}

      <button onClick={() => deleteTask(task.id)}>❌</button>
    </li>
  );
}

export default ToDoItem;
