import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import LoginPage from '../pages/LoginPage'
import { useNavigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {

    const { auth } = useSelector((state) => state.user)

    if (auth) {

        return children
    } else {

        return <LoginPage />
    }


}

export default PrivateRoute