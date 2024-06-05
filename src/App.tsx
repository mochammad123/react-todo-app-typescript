import React, { useState } from "react";
import { IDataTodo } from "./interface";
import { todoData } from "./data/todosData";
import Todos from "./components/Todos";

const App = () => {
  const [todos, setTodos] = useState<IDataTodo[]>(todoData);
  console.log(todos);
  return (
    <div>
      <h1 className="text-xl font-bold">My Todo List</h1>
      <Todos todos={todos} />
    </div>
  );
};

export default App;
