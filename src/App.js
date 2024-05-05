import React, { useState } from 'react';
import "./styles.css";
import Header from "./Header/Header.js";
import List from "./Header/List/List.js";

export default function App() {
  const [tasks, setTasks] = useState([
    { text: "Read SpringBoot", completed: false },
    { text: "Complete assignments", completed: false },
    { text: "Prepare breakfast", completed: false },
    { text: "Sleep for 2 hours", completed: false },
    { text: "Take a shower", completed: false }
  ]);

  const handleToggle = index => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const handleRemoveCompleted = () => {
    const filteredTasks = tasks.filter(task => !task.completed);
    setTasks(filteredTasks);
  };


  const handleEmpty = () => {
    setTasks([]);
  };
  return (
    <div className="App">
    <Header/>
    <hr/>
    <List/>
    {tasks.length === 0 ? (
          <p><i>Nothing to do buddy. Sleep!</i></p>
        ) : (
          tasks.map((task, index) => (
            <div
              key={index}
              className={task.completed ? "todo-item completed" : "todo-item"}
              onClick={() => handleToggle(index)}
            >
              <p style={{ cursor: 'pointer' }}>{task.text}</p>
            </div>
          ))
        )}
        <button onClick={handleRemoveCompleted}>Remove Completed</button>
    </div>
  );
}



