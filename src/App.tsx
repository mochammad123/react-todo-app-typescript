import React, { useState } from "react";
import { IDataTodo } from "./interface";
import { todoData } from "./data/todosData";

const App = () => {
  const [todos, setTodos] = useState<IDataTodo[]>(todoData);
  console.log(todos);
  return (
    <div>
      <h1 className="text-xl font-bold">My Todo List</h1>
      {todos.map((todo: IDataTodo) => {
        return <p key={todo.id}>{todo.title}</p>;
      })}
    </div>
  );
};

export default App;
