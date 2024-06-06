import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import React, { ChangeEvent, useContext } from "react";
import { ITodoForm } from "../interface";
import ModalSubmit from "./modal/ModalSubmit";
import InputText from "./input/InputText";
import { TodoContext } from "../pages/Todo";

const TodoForm: React.FC<ITodoForm> = ({ setSearchQuery }) => {
  const { show, setShow } = useContext(TodoContext);
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <div className="mb-[32px] mt-5">
        <div>
          <div className="flex justify-center items-center gap-5">
            <div className="relative md:w-[40%] w-full h-10">
              <div className="absolute grid w-5 h-5 place-items-center text-white top-2/4 right-3 -translate-y-2/4">
                <SearchOutlined />
              </div>
              <InputText
                placeholder="Search Todo List"
                changeEvent={handleSearchChange}
                search={true}
              />
            </div>

            <button
              className="text-xl rounded-xl bg-[#9E78CF] hover:bg-[#7e5cac] h-10 w-10 text-white"
              onClick={() => setShow(true)}
            >
              <PlusOutlined />
            </button>
          </div>
        </div>
      </div>

      <ModalSubmit show={show} setShow={() => setShow(false)} />
    </>
  );
};

export default TodoForm;
