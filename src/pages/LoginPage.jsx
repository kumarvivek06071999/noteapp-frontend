import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { LoginForm } from '../components/login/LoginForm'
const LoginPage = () => {

    return (
        <div >
            <Navbar />

            <div className='  min-h-screen w-full flex'>
                <div className=' w-1/2 flex items-center justify-center '>
                    <img className=' object-cover' src="https://garizon.in/public/img/login.jpg" alt="" />
                </div>
                <div className='w-1/2'>
                    <LoginForm />
                </div>
            </div>

        </div>
    )
}

export default LoginPage