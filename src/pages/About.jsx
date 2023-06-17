import React from 'react'
import { useNavigate } from 'react-router-dom';
const About = () => {
    const navigate = useNavigate()
    const takeMeHome = ()=>{
        alert("it is working");
        navigate("/")
    }
  return (
    <>
        <h1>
            They said they are looking for me
            They said they are looking for me
            I'm in San Francisco, Germany.

        </h1>
        <button onClick={takeMeHome}>Take me to Home when you are done.</button>
    </>
  )
}

export default About