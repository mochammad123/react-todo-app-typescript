import React from "react";
import { IDataTodo, ITodos } from "../interface";
import TodoItem from "./TodoItem";
import NoTask from "../assets/images/no_task.png";

const Todos: React.FC<ITodos> = ({ todos, title }) => {
  return (
    <div className="border rounded-lg p-5 my-0 mx-auto grid grid-cols-1 gap-4">
      <span className="text-[#9E78CF] font-bold">{title}</span>
      <hr />
      {todos.length > 0 ? (
        <>
          {todos.map((todo: IDataTodo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </>
      ) : (
        <>
          <div className="flex justify-center">
            <img src={NoTask} width={200} />
          </div>
          <p className="text-[#9E78CF] text-center font-bold">
            There are no tasks
          </p>
        </>
      )}
    </div>
  );
};

export default Todos;
