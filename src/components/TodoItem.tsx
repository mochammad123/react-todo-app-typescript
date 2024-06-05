import React from "react";
import { ITodo } from "../interface";

const TodoItem: React.FC<ITodo> = ({ todo }) => {
  return <p>{todo.title}</p>;
};

export default TodoItem;
