// A functional react component, a function, that returns JSX
// rfce - es5 react component
// rafce - es6 react component
// CSS IN JS

import React from 'react'
import Fish from './components/Fish'
import myModule from './Fish.module.css'
import MyButton from './components/MyButton'
import API from './components/API'
import Effect from './components/Effect'
import TestBackend from './components/TestBackend'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import MyNavBar from './components/MyNavBar'
import NotFound from './pages/NotFound'
import UserPage from './pages/UserPage'
import SignUp from './pages/SignUp'
import FormikForm from './pages/FormikForm'

const App = () => {
  // const tryMe = (params)=>{
  //   alert(params)
  // }
  return (
    <>
        <MyNavBar />
        <Routes>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/form' element={<FormikForm/>}/>
          {/* <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Navigate to="/"/> }/>
          <Route path='/about' element={<About/>}/>
          <Route path='/about/:username' element={<UserPage/>}/>
          <Route path='*' element={<NotFound/>}/> */}
        </Routes>

    </>
  )
}

export default App