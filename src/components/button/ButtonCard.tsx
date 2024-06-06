import React from "react";
import { IButtonCard } from "../../interface";

const ButtonCard: React.FC<IButtonCard> = ({ icon, handleSubmit }) => {
  return (
    <button
      className="w-1/3 border border-[#9E78CF] hover:border-[#9060cf] hover:bg-[#e1cbff] rounded-lg"
      onClick={handleSubmit}
    >
      {icon}
    </button>
  );
};

export default ButtonCard;
