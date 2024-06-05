import React, { useState } from "react";
import { IDataTodo } from "./interface";
import { todoData } from "./data/todosData";
import Todos from "./components/Todos";

const App = () => {
  const toggleCompleted = (id: number) => {
    const updatedTodos = todos.map((todo: IDataTodo) => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    });
    setTodos(updatedTodos);
  };

  const [todos, setTodos] = useState<IDataTodo[]>(todoData);
  console.log(todos);
  return (
    <div className="text-center p-[12px]">
      <h1 className="text-[36px] font-bold">My Todo List</h1>
      <Todos todos={todos} toggleCompleted={toggleCompleted} />
    </div>
  );
};

export default App;
