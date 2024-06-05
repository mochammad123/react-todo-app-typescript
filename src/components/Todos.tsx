import React from "react";
import { IDataTodo, ITodos } from "../interface";
import TodoItem from "./TodoItem";

const Todos: React.FC<ITodos> = ({ todos }) => {
  return (
    <div className="w-[40%] my-0 mx-auto">
      {todos.map((todo: IDataTodo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default Todos;