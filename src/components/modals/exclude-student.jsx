import { Modal } from "react-bootstrap";

export function ExcludeModal({ show, close }) {
  return (
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>
          Tem certeza que deseja excluir esse estudante?
        </Modal.Title>
      </Modal.Header>
    </Modal>
  );
}
