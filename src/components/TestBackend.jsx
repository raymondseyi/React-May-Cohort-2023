import React from 'react'
import axios from "axios"
const TestBackend = () => {
    let url = "http://localhost:5000/user/register"
    const registerUser = ()=>{
        axios.post(url,{firstname:"sola"})
    }
  return (
    <>
        <button onClick={registerUser}>Register</button>
    </>
  )
}

export default TestBackend