import React from 'react'
import { ErrorModal } from '../UI/ErrorModal'
import AddUserForm from './AddUserForm'
import "./NewUser.css"

function NewUser(props) {

  const saveUserInfoHandler = (enteredUserInfo) => {
    const userInfo = {
      ...enteredUserInfo,
      id: Math.random().toString(),
    }
    props.onAddNewUser(userInfo)
  }

  return (

    <div className='new-user'>
      <AddUserForm onSaveUserInfo={saveUserInfoHandler}/>
    </div>
  )
}

export default NewUser