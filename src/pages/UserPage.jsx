import React from 'react'
import { useParams } from 'react-router-dom'
const UserPage = () => {
    console.log(useParams())
    let {username} = useParams()
    console.log(username)
  return (
    <>
        <h1>User Page</h1>
        <h1>{username}</h1>
    </>
  )
}

export default UserPage