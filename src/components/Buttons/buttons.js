import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import MainForm from '../Forms/mainForm';

function Buttons() {

    const [showForm, setShowForm] = useState(false);

    const handleAddClick = () => {
        setShowForm(true);
    }

    const handleClose = () => {
        setShowForm(false);
    }

  return (
    <div>
        <Button variant="primary" onClick={handleAddClick}>Adicionar</Button>
        <MainForm show={showForm}  close={handleClose} />
    </div>
 
  );
}

export default Buttons;
