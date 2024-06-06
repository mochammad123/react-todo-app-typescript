import React, { FormEvent, useContext } from "react";
import Modal from "./Modal";
import { IModalSubmit } from "../../interface";
import { TodoContext } from "../../pages/Todo";
import { ExclamationCircleFilled } from "@ant-design/icons";

const ModalConfirm: React.FC<IModalSubmit> = ({ show, setShow }) => {
  const { deleteTodo, dataEdit, setDataEdit } = useContext(TodoContext);

  const clearForm = () => {
    setDataEdit({ id: 0, title: "", completed: false });
    setShow();
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    deleteTodo(dataEdit.id);
    clearForm();
  };

  return (
    <Modal
      name="Confirm"
      show={show}
      setShow={() => clearForm()}
      onSave={handleSubmit}
      nameButton="Delete"
    >
      <div className="flex flex-col justify-center items-center">
        <div>
          <ExclamationCircleFilled className="text-orange-400 text-7xl" />
        </div>
        <div className="mt-10">
          <p>
            Apakah anda yakin akan menghapus{" "}
            <span className="font-semibold">{dataEdit.title}</span> ?
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default ModalConfirm;
