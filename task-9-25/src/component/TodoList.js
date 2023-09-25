// src/TodoList.js
import React, { useState } from 'react';

const TodoList = () => {
    // Define a state to hold the tasks
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    const addTask = () => {
        if (taskInput !== '') {
            setTasks([...tasks, taskInput]);
            setTaskInput('');
        }
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <div>
                <input
                    type="text"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                />
                <button onClick={addTask}>Add Task</button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
