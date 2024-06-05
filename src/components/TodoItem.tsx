import React, { useContext } from "react";
import { ITodo } from "../interface";
import { TodoContext } from "../App";

const TodoItem: React.FC<ITodo> = ({ todo }) => {
  const { toggleCompleted, deleteTodo } = useContext(TodoContext);
  const getTodoTitleStyle = () => {
    if (todo.completed) return "line-through";
    else return "";
  };

  return (
    <div className="border-2 border-sky-200 text-[24px] flex justify-between items-center py-0 px-[20px]">
      <input
        type="checkbox"
        className="mr-[10px] h-[18px] w-[18px]"
        onChange={() => toggleCompleted(todo.id)}
      />
      <p className={getTodoTitleStyle()}>{todo.title}</p>
      <button
        className="bg-red-500 text-white h-[30px] w-[30px] rounded-full cursor-pointer text-[16px]"
        onClick={() => deleteTodo(todo.id)}
      >
        x
      </button>
    </div>
  );
};

export default TodoItem;
