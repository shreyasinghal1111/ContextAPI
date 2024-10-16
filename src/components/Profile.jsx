import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

const Profile=()=> {
  const {user}=useContext(UserContext)
  if(!user) return <div>Please Login</div>
  return (
    <div>
      <h1>Profile</h1>
      <h2>Username: {user.username}</h2>
      <h2>Password: {user.password}</h2>
    
    </div>
)}

export default Profile;
