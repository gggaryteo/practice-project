import React, { useState } from "react";
import "./AddUserForm.css";
import Button from "../UI/Button";
import { ErrorModal } from "../UI/ErrorModal";

function AddUserForm(props) {
  const [enteredName, setName] = useState("");
  const [enteredAge, setAge] = useState("");
  const [error, setError] = useState();

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const userInfo = {
      name: enteredName,
      age: enteredAge
    }
    if(enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty values).'
      })
      return
    }
    
    if(+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return
    }

    props.onSaveUserInfo(userInfo);
    setName("");
    setAge("");
  }

  const errorHandler = () => {
    setError(null);
  }

  return (
    <>
      { error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/> }
      <form onSubmit={submitHandler}>
        <div className="new-user__controls">
          <div className="new-user__control">
            <label>Username:</label>
            <input
              type="text"
              value={enteredName}
              onChange={nameChangeHandler}
            />
          </div>
          <div className="new-user__control">
            <label>Age (Years):</label>
            <input
              type="number"
              min="0"
              max="99"
              value={enteredAge}
              onChange={ageChangeHandler}
            />
          </div>
        </div>
        <div className="new-user__actions">
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </>
  );
}

export default AddUserForm;
