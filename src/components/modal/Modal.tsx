import { CloseOutlined } from "@ant-design/icons";
import React from "react";
import { IModal } from "../../interface";

const Modal: React.FC<IModal> = ({
  show,
  setShow,
  name,
  onSave,
  children,
  nameButton,
}) => {
  return (
    <>
      <div
        className={`fixed inset-0 z-50 overflow-hidden bg-black bg-opacity-60 backdrop-blur-sm ${
          show
            ? "visible opacity-100 transition-opacity duration-500"
            : "invisible opacity-0"
        }`}
        style={{ zIndex: 1000 }}
      >
        <div
          className="fixed inset-0 w-full h-full opacity-40 flex"
          onClick={setShow}
        ></div>
        <div className="flex items-center h-screen max-h-screen px-4 py-8 justify-center">
          <div className="relative w-full max-w-xl p-4 mx-auto bg-white rounded-md shadow-lg">
            <div className="sm:flex">
              <div className="sm:text-left w-full">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      {name}
                    </h4>
                  </div>
                  {setShow ? (
                    <div>
                      <button
                        className="btn btn-sm text-xs text-white rounded-full drop-shadow-2xl bg-transparent border-none"
                        type="button"
                        onClick={setShow}
                      >
                        <CloseOutlined className="text-black text-lg" />
                      </button>
                    </div>
                  ) : null}
                </div>
                <hr className="" />
                <form onSubmit={onSave}>
                  <div
                    className="overflow-y-auto mt-5 mb-5 p-2"
                    style={{ maxHeight: "475px" }}
                  >
                    {children}
                  </div>
                  <hr />
                  <div className="flex justify-end mt-5">
                    <button className="bg-sky-500 hover:bg-sky-600 py-2 px-4 rounded-lg text-white font-semibold">
                      {nameButton ? nameButton : "Save"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
