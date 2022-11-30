import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const changeUserHandler = (uName, uAge) => {
    setUsersList((prevState) => {
      return [
        ...prevState,
        { name: uName, age: uAge, id: Math.round().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onChangeUser={changeUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
