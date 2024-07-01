const AddTaskForm = ({addTask, setNewTaskText}) => {
  return (
    <>
    <form className="taskForm" onSubmit={addTask}>
      <input type="text" onChange={(e) => setNewTaskText(e.target.value)} placeholder="Agregar nueva tarea"/>
      <button type='submit'>Añadir tarea</button>
    </form>
    </>
  );
};

export default AddTaskForm;