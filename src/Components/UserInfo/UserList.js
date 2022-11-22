import React from "react";
import User from "./User";
import './UserList.css'
import Card from "../UI/Card";

function UserList(props) {
  if(props.userData.length === 0) {
    return <h2 className="users-list__fallback">Found No Users</h2>;
  }

  return (
    <Card className="userInfo">
      <div className="users-list">
        {props.userData.map((user) => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </div>
    </Card>
  );
}

export default UserList;
