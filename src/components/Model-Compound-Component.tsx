import React, { useState } from "react";

interface ModalProps {
  children: React.ReactNode;
}

interface ModalContentProps {
  children: React.ReactNode;
}

interface ModalFooterProps {
  children: React.ReactNode;
}

const CompoundModel: React.FC<ModalProps> & {
  Content: React.FC<ModalContentProps>;
  Footer: React.FC<ModalFooterProps>;
} = ({ children }) => {
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
          {children}
          <CompoundModel.Footer>
            <button onClick={closeModal}>Close</button>
          </CompoundModel.Footer>
        </div>
      )}
    </div>
  );
};

CompoundModel.Content = ({ children }) => <>{children}</>;
CompoundModel.Footer = ({ children }) => (
  <div>
    {children}
    <button>Close Modal</button>
  </div>
);

export default CompoundModel;
