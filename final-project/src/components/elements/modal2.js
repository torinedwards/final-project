import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Wages from "../table/bar";
import "./modals.css";



class Modals extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.state = {
        show: false,
      };
  
      this.handleShow = () => {
        this.setState({ show: true });
      };
  
      this.handleHide = () => {
        this.setState({ show: false });
      };
    }
  
    render() {
      return (
        <>
          <Button variant="primary" onClick={this.handleShow}>
            Chart card
          </Button>
  
          <Modal
            show={this.state.show}
            onHide={this.handleHide}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Custom Modal Styling
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
             
              <div className="modals">
              <Wages />
              </div>
              <div className="modal-content">
                <p>
                  this is just some test text to help see if this looks right

                </p>
              </div>
            </Modal.Body>
          </Modal>
        </>
      );
    }
  }
  
export default Modals;