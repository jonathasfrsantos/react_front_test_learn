import { Fragment, useState } from "react";
import { Button, Form, Modal, ToastContainer } from "react-bootstrap";
import { StudentsService } from "../../services";

import { Loading } from "../Loading";

export function MainForm({ show, close }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNomeChange = (event) => {
    return setName((prevState) => (prevState = event.target.value));
  };

  const handleEmailChange = (event) => {
    return setEmail((prevState) => (prevState = event.target.value));
  };

  const handleFormSubmit = async () => {
    setLoading((prevState) => (prevState = true));

    const studentService = new StudentsService();

    if (name === "" || email === "") {
      return;
    }

    return studentService
      .create({ name: name, email: email })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Fragment>
      <ToastContainer />

      <Loading loading={loading} />

      <Modal show={show} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Aluno</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formBasicNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o nome"
                value={name}
                onChange={handleNomeChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite o email"
                value={email}
                onChange={handleEmailChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Salvar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
}
