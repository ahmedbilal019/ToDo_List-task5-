import React, { useContext } from "react";
import MyContext from "../MyContext";

const AddTasksForm = ({ addTask }) => {
  const { newTask, setNewTask } = useContext(MyContext);
  return (
    <>
      {/* add new task */}
      <div className="row">
        <div className="col">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button
            id="addTask-btn"
            className="btn btn-lg btn-success"
            onClick={addTask}
          >
            Add Task
          </button>
        </div>
      </div>
    </>
  );
};

export default AddTasksForm;
