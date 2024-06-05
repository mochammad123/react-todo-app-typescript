import React, { FormEvent, useState } from "react";
import { IAddTodo } from "../interface";

const TodoForm: React.FC<IAddTodo> = ({ addTodo }) => {
  const [title, setTitle] = useState<string>("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTodo(title);
    setTitle("");
  };

  return (
    <div className="mb-[32px]">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add your todo"
          className="h-[66px] w-[40%] text-[16px] py-0 px-[16px]"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button className="h-[72px] text-[16px]">Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
