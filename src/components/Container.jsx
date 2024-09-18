import React, { useState } from "react";

import TaskList from "./TaskList";
import FormTodo from "./TodoForm";

const Container = ({ token }) => {
  const [list, setList] = useState([]);
  const handleAddItem = addItem => {
    setList([...list, addItem]);
  };
  return (
    <div>
      <h1>Welcome to the TODO List</h1>
      {}
      <FormTodo handleAddItem={handleAddItem} />
      {}
      <TaskList list={list} setList={setList} />
    </div>
  );
};

export default Container;