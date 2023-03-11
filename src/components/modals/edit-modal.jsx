import { Fragment, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { Loading } from "../Loading";

export function EditModal({ show, close, student }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      // eslint-disable-next-line array-callback-return
      student?.map((item) => {
        setEmail(item.email);
        setName(item.name);
      });
    })();
  }, [student]);

  const handleNomeChange = (event) => {
    return setName((prevState) => (prevState = event.target.value));
  };

  const handleEmailChange = (event) => {
    return setEmail((prevState) => (prevState = event.target.value));
  };

  const handleFormSubmit = async () => {
    console.log("edit aqui");
  };
  
  return (
    <Fragment>
      <ToastContainer />

      <Loading loading={loading} />

      <Modal show={show} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>Editar dados do Aluno</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            {student?.map((item, index) => (
              <Fragment key={index}>
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
              </Fragment>
            ))}

            <Button variant="primary" type="submit">
              Salvar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
}
