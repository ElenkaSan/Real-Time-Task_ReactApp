import './App.css';

import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { AiFillCloseCircle } from 'react-icons/ai';
import { IoMdUndo } from 'react-icons/io';
import { FaCheck } from 'react-icons/fa';

const socket = io("http://localhost:4000");
socket.on("connect", () => {
  console.log("Connected to WebSocket server!");
});

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    // Listen for updates from the WebSocket server
    socket.on("updateTasks", (updatedTasks) => {
      console.log("Received tasks:", updatedTasks); // DevTools debugging message
      setTasks(updatedTasks);
    });

    // Cleanup on unmount
    return () => {
      socket.off("updateTasks");
    };
  }, []);

  const addTask = () => {
    if (newTask.trim() === "") return;
    const task = { id: Date.now(), text: newTask, completed: false };
    socket.emit("addTask", task);
    setNewTask("");
  };

  const toggleTaskCompletion = (id) => {
    socket.emit("toggleTask", id);
  };

  const deleteTask = (id) => {
    socket.emit("deleteTask", id);
  };

  return (
    <div className="container max-w-lg mx-auto p-4">
      <Card className="bg-transparent border-primary">
        <h1 className="text-xl font-bold mb-4 text-center p-4">Real-Time Task Collaboration</h1>
        <div className="input-group input-group-lg p-3">
          <Form.Control
            placeholder="Enter a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") { // Enter/Return button inputs
                e.preventDefault(); // Prevent form submission or other default actions
                addTask(); // Call the addTask function
              }
            }}
            className="flex-1"
          />
          <Button className="btn btn-primary" onClick={addTask}>Add Task</Button>
        </div>
        <ol className="m-3 p-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="items-center p-2 border rounded mb-2 lead"
            >
              <span
                className={
                  task.completed ? "line-through text-secondary fst-italic" : "text-dark fw-bolder"
                }
              >
                {task.text}
              </span>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <Button
                  variant="outline"
                  onClick={() => toggleTaskCompletion(task.id)}
                  className="btn btn-warning me-md-2"
                >
                  {task.completed ? <IoMdUndo/> : <FaCheck/>}
                </Button>
                <div className="btn btn-danger">
                <AiFillCloseCircle  
                  variant="destructive"
                  onClick={() => deleteTask(task.id)} 
                  className="edit-icon"
                />
                </div>
                {/* <Button
                  variant="outline"
                  onClick={() => toggleTaskCompletion(task.id)}
                >
                  {task.completed ? "Undo" : "Complete"}
                </Button>
                <Button variant="destructive" onClick={() => deleteTask(task.id)}>
                  Delete
                </Button> */}
              </div>
            </li>
          ))}
        </ol>
      </Card>
    </div>
  );
}

export default App;