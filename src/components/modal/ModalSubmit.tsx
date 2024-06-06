import React, { FormEvent, useContext, useEffect, useState } from "react";
import { IModalSubmit } from "../../interface";
import { TodoContext } from "../../pages/Todo";
import Modal from "./Modal";
import InputText from "../input/InputText";

const ModalSubmit: React.FC<IModalSubmit> = ({ show, setShow }) => {
  const [title, setTitle] = useState<string>("");
  const { addTodo, updateTodo, dataEdit, setDataEdit } =
    useContext(TodoContext);

  useEffect(() => {
    if (show) {
      if (dataEdit.id !== 0) setTitle(dataEdit?.title);
      else setTitle("");
    }
  }, [show, dataEdit]);

  const clearForm = () => {
    setDataEdit({ id: 0, completed: false, title: "" });
    setTitle("");
    setShow();
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (dataEdit.id !== 0) {
      updateTodo(dataEdit.id, title);
    } else {
      addTodo(title);
    }
    clearForm();
  };

  return (
    <Modal
      name={dataEdit.id !== 0 ? "Update Todo" : "Add Todo"}
      show={show}
      setShow={() => clearForm()}
      onSave={handleSubmit}
    >
      <div className="flex flex-col gap-5">
        <InputText
          value={title}
          changeEvent={(e) => setTitle(e.target.value)}
          placeholder="Todo ..."
          search={false}
        />
      </div>
    </Modal>
  );
};

export default ModalSubmit;
