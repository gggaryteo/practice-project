import React from "react";
import "./User.css";
import Card from "../UI/Card";

function User(props) {
  return (
    <Card className="user-info">
      <div className="user-info__description">
        <h3>
          {props.name} ({props.age} years old)
        </h3>
      </div>
    </Card>
  );
}

export default User;
