import React, { useState } from "react";
import Button from "../UI/Button";

import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const enteredNameHandler = (event) => {
    event.preventDefault();
    setEnteredName(event.target.value);
  };

  const enteredAgeHandler = (event) => {
    event.preventDefault();
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    props.onChangeUser(enteredName,enteredAge)
    setEnteredName("");
    setEnteredAge("");
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredName}
          onChange={enteredNameHandler}
        ></input>
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={enteredAgeHandler}
        ></input>
        <Button type="submit">AddUser</Button>
      </form>
    </Card>
  );
};

export default AddUser;
