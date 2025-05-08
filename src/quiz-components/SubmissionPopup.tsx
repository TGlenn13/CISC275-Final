import React from "react";
import { Modal, Button } from "react-bootstrap";

interface SubmissionPopupProps {
    show: boolean;
    setShow: (newShow: boolean) => void;
    changePage: (pageName:"results") => void;
}

export function SubmissionPopup({show, setShow, changePage}: SubmissionPopupProps) {
    return(
        <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
        <Modal.Title>Submission Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your responses have been submitted!</Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={() => changePage("results")}>
            Show Results
        </Button>
        </Modal.Footer>
    </Modal>
  );
}