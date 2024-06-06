import React from "react";
import { IChangeEvent } from "../../interface";

const InputText: React.FC<IChangeEvent> = ({
  value,
  changeEvent,
  placeholder,
  search,
}) => {
  return (
    <div>
      <input
        className={`peer w-full h-full bg-transparent ${
          search ? "text-white border-white" : "text-black border-black"
        }  font-sans font-normal outline outline-0 focus:outline-0  transition-all text-sm px-3 py-2.5 rounded-[7px] !pr-9 border `}
        placeholder={placeholder}
        onChange={changeEvent}
        value={value}
      />
    </div>
  );
};

export default InputText;
