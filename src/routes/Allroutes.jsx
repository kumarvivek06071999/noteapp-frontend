import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import NotePage from '../pages/NotePage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/Register'
import PrivateRoute from './PrivateRoute'

const Allroutes = () => {

  return (
    <Routes>
      <Route path='/' element={<HomePage />}> </Route>
      <Route path='/login' element={<LoginPage />}> </Route>
      <Route path='/register' element={<RegisterPage />}> </Route>
      <Route path='/notes' element={<PrivateRoute><NotePage /></PrivateRoute>}> </Route>
    </Routes>
  )
}

export default Allroutes