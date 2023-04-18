import React from "react";
import { Button } from "../Button";
import { Modal } from "react-bootstrap";

function ModalDelete({handleClose,modalText, btnDeleteMtn, btnLaghvMtn, handleDeleteItem, show }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className="fs-4"> {modalText} </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" size="lg" onClick={handleClose}>
                    {btnLaghvMtn}
                </Button>
                <Button variant="danger" size="lg" onClick={handleDeleteItem}>
                   {btnDeleteMtn}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalDelete;