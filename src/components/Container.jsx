import React, { useState } from "react";

import TaskList from "./TaskList";
import TodoForm from "./TodoForm";

const Container = () => {
  const [list, setList] = useState([]);

  const handleAddItem = addItem => {
    setList([...list, addItem]);
  };
  return (
    <div>
      {}
      <TodoForm handleAddItem={handleAddItem} />
      {}
      <TaskList list={list} setList={setList} />
    </div>
  );
};

export default Container;