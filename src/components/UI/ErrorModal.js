import { React, Fragment } from "react";
import  ReactDOM from "react-dom";

import styles from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onError}></div>;
};

const LayerDrop = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onError}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onError={props.onError} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <LayerDrop
          title={props.title}
          message={props.message}
          onError={props.onError}
        />,
        document.getElementById('layout-root')
      )}
    </Fragment>
  );
};

export default ErrorModal;
