import React from "react";
import "../bootstrap.min.css";
import "../App.css";
import { Button, Modal } from "react-bootstrap";

const ResultModal = (props) => {
  return (
    <>
      <Modal show={props.show} onHide={props.close}>
        <Modal.Header closeButton>
          <Modal.Title> Binary Converter </Modal.Title>
        </Modal.Header>
        <Modal.Body>Your answer is: {props.result}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ResultModal;