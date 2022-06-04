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
        dialogClassName="modal-90w"
      >
        <Modal.Body>
          <Container>
            <Row>
              <Col md={6}>
                <img style={{width: "100%"}} src='https://images.unsplash.com/photo-1648737154547-b0dfd281c51e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' />
              </Col>
              <Col md={6}>
                <h2>Name: Blah Blah Blah Blah</h2>
                <h3>Uploaded By: Bla Bhlah</h3>
                <h5>Upload Date: Some Date, 1990</h5>
                <br />
                <p>Tag1, Tag2, Tag3, Tag4</p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.closeModal}>
            Close
          </Button>
          <Button variant="primary">Download</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Popup