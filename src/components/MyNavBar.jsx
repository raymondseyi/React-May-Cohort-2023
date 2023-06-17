import React from 'react'
import { Link } from 'react-router-dom'

const MyNavBar = () => {
  return (
    <>
        {/* <a href="/home">Home</a>|
        <a href="/about">About</a> */}

        <Link to="/"> Home</Link>|
        <Link to="/about">About</Link>

    </>
  )
}

export default MyNavBar