import React, { useContext } from "react";
import MyContext from "../MyContext.jsx";

const UpdateForm = ({ changeTask, updateTask, cancelUpdate }) => {
  const { updateData } = useContext(MyContext);

  return (
    <>
      {/* update Task */}
      <div className="row">
        <div className="col">
          <input
            className="form-control form-control-lg"
            value={updateData && updateData.title}
            onChange={(e) => changeTask(e)}
          />
        </div>
        <div className="col-auto" id="update-control">
          <button
            className="btn btn-lg btn-success mr-20"
            id="update-btn"
            onClick={updateTask}
          >
            Update
          </button>
          <button
            className="btn btn-lg btn-warning"
            id="cancel-btn"
            onClick={cancelUpdate}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default UpdateForm;
