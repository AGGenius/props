import './App.css'
import { useState, useEffect } from 'react';
import AddTaskForm from './components/AddTaskForm.jsx'
import Task from './components/Task.jsx';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  const [newTaskText, setNewTaskText] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    const id = tasks.length + 1;
    const text = newTaskText;
    const completed = false;

    const newTask = { id, text, completed };
    const allTasks = [...tasks, newTask];
    setTasks(allTasks)
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  const changeTask = (taskId) => {
    const myTask = tasks.find((task) => task.id === taskId);
    myTask.completed = !myTask.completed;
    const allTasks = [...tasks];
    setTasks(allTasks)
  }

  return (
    <>
      <div className='taskApp'>
        <h1>Lista de tareas</h1>
        <AddTaskForm addTask={addTask} setNewTaskText={setNewTaskText} />
        <div className='cardWrap'>
        <Task tasks={tasks} changeTask={changeTask} deleteTask={deleteTask} />
        </div>
      </div>
    </>
  );
};

export default App;
