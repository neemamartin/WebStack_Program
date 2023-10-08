import React, { useState } from 'react';
import './App.css';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editTask, setEditTask] = useState({ id: null, text: '' });

  const addTask = () => {
    if (newTask.trim() === '') {
      alert('Task name cannot be empty');
      return;
    }
    const newTasks = [...tasks, { id: Date.now(), text: newTask }];
    setTasks(newTasks);
    setNewTask('');
  };

  const editTaskHandler = (task) => {
    setEditTask({ id: task.id, text: task.text });
  };

  const updateTask = () => {
    if (editTask.text.trim() === '') {
      alert('Task name cannot be empty');
      return;
    }
    const updatedTasks = tasks.map((task) =>
      task.id === editTask.id ? { ...task, text: editTask.text } : task
    );
    setTasks(updatedTasks);
    setEditTask({ id: null, text: '' });
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Task List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {editTask.id === task.id ? (
              <div>
                <input
                  type="text"
                  value={editTask.text}
                  onChange={(e) => setEditTask({ id: task.id, text: e.target.value })}
                />
                <button onClick={updateTask}>Update</button>
              </div>
            ) : (
              <>
                {task.text}
                <button onClick={() => editTaskHandler(task)}>Edit</button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
