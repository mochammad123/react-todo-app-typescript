import React from "react";
import { ITodo } from "../interface";

const TodoItem: React.FC<ITodo> = ({ todo, toggleCompleted }) => {
  const getTodoTitleStyle = () => {
    if (todo.completed) return "line-through";
    else return "";
  };

  return (
    <div className="border-2 border-sky-200 text-[24px] flex justify-center items-center">
      <input
        type="checkbox"
        className="mr-[10px] h-[18px] w-[18px]"
        onChange={() => toggleCompleted(todo.id)}
      />
      <p className={getTodoTitleStyle()}>{todo.title}</p>
    </div>
  );
};

export default TodoItem;
