import React, { useState } from "react";

interface ModalProps {
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <div>
          <h2>Hello, Modal!</h2>
          <p>This is a simple modal dialog.</p>
          {children}
          <button onClick={closeModal}>Close Modal</button>
        </div>
      )}
    </div>
  );
};

export default Modal;
