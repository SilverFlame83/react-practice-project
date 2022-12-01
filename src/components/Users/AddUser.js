import React, { useState, Fragment, useRef } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const inputUserName = useRef();
  const inputUserAge = useRef();
  // const [enteredName, setEnteredName] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [modalError, setModalError] = useState("");

  // const enteredNameHandler = (event) => {
  //   event.preventDefault();
  //   setEnteredName(event.target.value);
  // };

  // const enteredAgeHandler = (event) => {
  //   event.preventDefault();
  //   setEnteredAge(event.target.value);
  // };

  const addUserHandler = (event) => {
    event.preventDefault();
    const userName = inputUserName.current.value;
    const userAge = inputUserAge.current.value;

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setModalError({
        title: "Empty name or age",
        message: "Please complete the age and name!",
      });
      return;
    }
    if (+userAge < 1) {
      setModalError({
        title: "Invalid age",
        message: "Please enter valid age > 0!",
      });
      return;
    }
    props.onChangeUser(userName, userAge);
    inputUserName.current.value = '';
    inputUserAge.current.value = '';
    // setEnteredName("");
    //setEnteredAge("");
  };
  const errorHandler = () => {
    setModalError(null);
  };

  return (
    <Fragment>
      {modalError && (
        <ErrorModal
          title={modalError.title}
          message={modalError.message}
          onError={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // value={enteredName}
            // onChange={enteredNameHandler}
            ref={inputUserName}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // value={enteredAge}
            // onChange={enteredAgeHandler}
            ref={inputUserAge}
          ></input>
          <Button type="submit">AddUser</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
