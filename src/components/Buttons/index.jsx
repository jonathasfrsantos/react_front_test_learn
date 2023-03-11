import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { MainForm } from "../Forms";
import { EditModal } from "../modals";

export function Buttons() {
  const [showForm, setShowForm] = useState(false);
  const [showEditStudentForm, setShowEditStudentForm] = useState(false);

  const handleAddClick = () => {
    return setShowForm((prevState) => (prevState = true));
  };

  const handleClose = () => {
    return setShowForm((prevState) => (prevState = false));
  };

  const handleShowEditModal = () => {
    return setShowEditStudentForm((prevState) => (prevState = false));
  };

  return (
    <div>
      <Button variant="primary" onClick={handleAddClick}>
        Adicionar
      </Button>

      <MainForm show={showForm} close={handleClose} />

      <EditModal show={showEditStudentForm} close={handleShowEditModal} />
    </div>
  );
}
