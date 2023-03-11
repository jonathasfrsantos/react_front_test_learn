import { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

function MainForm({ show, handleClose, handleSave }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSave({ nome, email });
    setNome('');
    setEmail('');
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Adicionar Aluno</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group controlId="formBasicNome">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Digite o nome" value={nome} onChange={handleNomeChange} />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Digite o email" value={email} onChange={handleEmailChange} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Salvar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default MainForm;
