import React, { useContext, useState } from "react";
import { ITodo } from "../interface";
import {
  CheckOutlined,
  DeleteOutlined,
  EditOutlined,
  SwapLeftOutlined,
} from "@ant-design/icons";
import ButtonCard from "./button/ButtonCard";
import { TodoContext } from "../pages/Todo";
import ModalConfirm from "./modal/ModalDeleteConfirm";

const TodoItem: React.FC<ITodo> = ({ todo }) => {
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const { toggleCompleted, setShow, setDataEdit } = useContext(TodoContext);

  return (
    <>
      <div className={`w-full bg-[#15101C] rounded-md p-2 text-[#9E78CF]`}>
        <div className={`${todo.completed && "line-through"}`}>
          {todo.title}
        </div>
        <div className="flex gap-5 mt-10 bottom-0">
          <ButtonCard
            icon={todo.completed ? <SwapLeftOutlined /> : <CheckOutlined />}
            handleSubmit={() => toggleCompleted(todo.id)}
          />
          <ButtonCard
            icon={<EditOutlined />}
            handleSubmit={() => {
              setShow(true);
              setDataEdit(todo);
            }}
          />
          <ButtonCard
            icon={<DeleteOutlined />}
            handleSubmit={() => {
              setShowConfirm(true);
              setDataEdit(todo);
            }}
          />
        </div>
      </div>

      <ModalConfirm show={showConfirm} setShow={() => setShowConfirm(false)} />
    </>
  );
};

export default TodoItem;
