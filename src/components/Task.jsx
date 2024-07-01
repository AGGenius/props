const Task = ({tasks, changeTask, deleteTask}) => {
  return (
    <>
        {tasks.map((task) =>
          <div className="card" key={task.id}>
            <p onClick={() => changeTask(task.id)} style={task.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>{task.text}</p>
            <button type='button' onClick={() => deleteTask(task.id)}>Eliminar</button>
          </div>)}
    </>
  );
};

export default Task;