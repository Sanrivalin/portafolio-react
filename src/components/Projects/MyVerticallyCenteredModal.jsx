import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from "./MyVerticallyCenteredModal.module.css";


function MyVerticallyCenteredModal(props ) {
  const { show, onHide, projectData } = props;
  if (!projectData) {
    // Manejar el caso en que no se proporciona projectData
    return null;
  }

  const { title, description2 } = projectData;
  return (
    
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={styles.container}
    >
      <Modal.Header className={styles.header} closeButton>       
      </Modal.Header>     
        <Modal.Body className={styles.content} >
        <h4>{title}</h4>
        <p>
          {description2}
        </p>
      </Modal.Body>       
      <Modal.Footer className={styles.footer}>
        <Button variant="dark" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal