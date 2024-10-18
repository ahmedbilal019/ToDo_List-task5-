import React, { useState } from "react";

const MyContext = React.createContext();

export const ContextProvider = ({ children }) => {
  const [newTask, setNewTask] = useState("");
  const [updateData, setupdateData] = useState("");

  return (
    <MyContext.Provider
      value={{ newTask, setNewTask, updateData, setupdateData }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
