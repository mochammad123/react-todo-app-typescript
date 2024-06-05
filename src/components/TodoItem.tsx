import React from "react";
import { ITodo } from "../interface";

const TodoItem: React.FC<ITodo> = ({ todo }) => {
  return (
    <div className="border-2 border-sky-200 text-[24px]">
      <p>{todo.title}</p>
    </div>
  );
};

export default TodoItem;
