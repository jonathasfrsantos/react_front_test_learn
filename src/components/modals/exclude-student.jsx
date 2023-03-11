import { Button, Modal } from "react-bootstrap";

export function ExcludeModal({ show, close }) {
  const handleExcludeSubmit = () => {
    console.log("endpoint de exclusão aqui");
  };

  return (
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>
          Tem certeza que deseja excluir esse estudante?
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Button onClick={close}>Fechar</Button>
        <Button onClick={handleExcludeSubmit}>Excluir</Button>
      </Modal.Body>
    </Modal>
  );
}
