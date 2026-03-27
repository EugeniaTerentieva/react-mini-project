import { useState } from 'react'
import './App.css'
//import { Button } from './Button'

import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => { // добавляет в tasks новые элементы {id, text, completed}
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const toggleTask = (id) => { // переключает в tasks св-во completed
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => { 
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="app">
      <h1 className="title">Список задач</h1>
      <TaskInput onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
}