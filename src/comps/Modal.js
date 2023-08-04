import React from "react";

const Modal = ({ selectedImg, setSelectedImg }) => {
  const closeModal = () => {
    setSelectedImg(null);
  };

  return (
    <div className="backdrop" onClick={closeModal}>
      <img src={selectedImg} alt="enlarged pic" />
    </div>
  );
};

export default Modal;
