import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./MyVerticallyCenteredModal.module.css";
import { useTranslation } from "react-i18next";

function MyVerticallyCenteredModal(props) {
  const { show, onHide, projectId } = props;
  const { t } = useTranslation();

  let modalContent = null;

  if (projectId === 1) {
    modalContent = (
      <>
        <Modal.Header className={styles.header} closeButton></Modal.Header>
        <Modal.Body className={styles.content}>
          <h4>{t("projectsTitle1")}</h4>
          <p>{t("projectTotalDescA")}</p>
        </Modal.Body>
        <Modal.Footer className={styles.footer}>
          <Button variant="dark" onClick={props.onHide}>
            {t("close")}
          </Button>
        </Modal.Footer>
      </>
    );
  } else if (projectId === 2) {
    modalContent = (
      <>
        <Modal.Header className={styles.header} closeButton></Modal.Header>
        <Modal.Body className={styles.content}>
          <h4>{t("projectsTitle2")}</h4>
          <p>{t("projectTotalDescB")}</p>
        </Modal.Body>
        <Modal.Footer className={styles.footer}>
          <Button variant="dark" onClick={props.onHide}>
            {t("close")}
          </Button>
        </Modal.Footer>
      </>
    )
  } else {
    modalContent = (
      <>
        <Modal.Header className={styles.header} closeButton></Modal.Header>
        <Modal.Body className={styles.content}>
          <h4>{t("projectsTitle3")}</h4>
          <p>{t("projectTotalDescC")}</p>
        </Modal.Body>
        <Modal.Footer className={styles.footer}>
          <Button variant="dark" onClick={props.onHide}>
            {t("close")}
          </Button>
        </Modal.Footer>
      </>
    );
  }

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className={styles.container}
      >
        {modalContent}
      </Modal>
    </>
  );
}

export default MyVerticallyCenteredModal;
