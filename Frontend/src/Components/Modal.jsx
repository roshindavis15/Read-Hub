import React from "react";
import SignupLoginForm from "./screens/SignupLoginForm"

const Modal = ({ onClose }) => {
    const stopPropagation = (e) => {
      e.stopPropagation();
    };
  
    return (
      <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-md z-10" onClick={stopPropagation}>
          <SignupLoginForm />
          <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default Modal;
