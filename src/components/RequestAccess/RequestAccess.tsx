import React, { useState } from "react";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import { RequestForm } from "../RequestForm/RequestForm";

export const RequestAccess: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (formData: any) => {
    console.log("Form data received:", formData); // Second log point
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        label="Request"
        primary
        withIcon
        onClick={() => setIsModalOpen(true)}
        className="absolute top-4 right-4 shadow-sm"
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Request Access"
      >
        <RequestForm
          onSubmit={handleSubmit}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </>
  );
};
