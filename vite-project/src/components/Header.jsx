import { useState } from "react";

function Header({ addTask }) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    addTask(input);
    setInput("");
  };

  return (
    <header>
      <h2>To-Do List</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSubmit}>Add</button>
      </div>
    </header>
  );
}

export default Header;
