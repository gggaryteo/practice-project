import React, { useState } from "react";
import NewUser from "./Components/AddNewUser/NewUser";
import UserList from "./Components/UserInfo/UserList";

const INITIAL_USER_DATA = [
  { id: "user1", name: "Gary", age: "24" },
  { id: "user2", name: "CHOHOHOL", age: "25" },
];

function App() {
  const [users, setUsers] = useState(INITIAL_USER_DATA);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers]} 
    )
  }
  
  return (
    <div>
      <NewUser onAddNewUser={addUserHandler}/>
      <UserList userData={users}/>
    </div>
  );
}

export default App;
