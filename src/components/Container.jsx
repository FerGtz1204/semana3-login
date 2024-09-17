import React, { useState } from "react";

import LoginForm from "./LoginForm";
import TaskList from "./TaskList";
import TodoForm from "./TodoForm";

const Container = () => {
  const [list, setList] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const [userToken, setUserToken] = useState(''); // Para almacenar el token

  const handleLogin = (token) => {
      setUserToken(token); // Guarda el token recibido
      setLoggedIn(true); // Cambia el estado a "logueado"
  };

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