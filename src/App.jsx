import React, { useContext, useState } from "react";
import AddTasksForm from "./components/AddTasksForm.jsx";
import UpdateForm from "./components/UpdateForm.jsx";
import ToDo from "./components/ToDo.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyContext from "./MyContext.jsx";
function App() {
  const { newTask, setNewTask, updateData, setupdateData } =
    useContext(MyContext);

  const [toDo, setToDo] = useState([]);

  // add task function
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };

  // delete task function
  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };

  /// mark task as done or completed
  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };

  /// cancel update
  const cancelUpdate = () => {
    setupdateData("");
  };

  /// change task for update
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setupdateData(newEntry);
  };

  /// updateTask  function
  const updateTask = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    setToDo(updatedObject);
    setupdateData("");
  };

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <br />

      {updateData && updateData ? (
        <UpdateForm
          changeTask={changeTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTasksForm addTask={addTask} />
      )}

      {/* Display todo List */}

      {toDo && toDo.length ? "" : "No tasks....."}
      <ToDo
        toDo={toDo}
        markDone={markDone}
        setupdateData={setupdateData}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
