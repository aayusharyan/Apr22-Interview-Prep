import React from 'react'
import {Modal, Button, Container, Col, Row} from 'react-bootstrap';

const Popup = (props) => {
  return (
    <>
      <Modal
        show={props.showModal}
        onHide={props.closeModal}
        backdrop="static"
        keyboard={false}
        centered
        dialogClassName="modal-60w"
        style={{backgroundColor: `${props.modalData?.color}77`}}
      >
        <Modal.Body>
          <Container>
            <Row>
              <Col md={6}>
                <img style={{maxWidth: "100%", maxHeight: "75vh", borderRadius: "5px"}} src={props.modalData?.urls?.full} />
              </Col>
              <Col md={6}>
                <h3>Uploaded By: {props.modalData?.user?.name} (@{props.modalData?.user?.id})</h3>
                <h4>Upload Date: {props.modalData?.created_at}</h4>
                <hr />
                {props.modalData?.description ? (
                  <>
                  <h5>Description:</h5>
                  <h6>{props.modalData?.description}</h6>
                  <hr />
                  </>
                ) : false}
                <h6>Width: {props.modalData?.width}</h6>
                <h6>Height: {props.modalData?.height}</h6>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.closeModal}>
            Close
          </Button>
          <Button variant="primary" style={{backgroundColor: props.modalData?.color, borderColor: props.modalData?.color}} href={props.modalData?.links?.download} target="_blank">Download</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Popup