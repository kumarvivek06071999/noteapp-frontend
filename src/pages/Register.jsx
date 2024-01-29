import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { RegisterForm } from '../components/register/RegisterForm'
const RegisterPage = () => {

    return (
        <div >
            <Navbar />

            <div className='  min-h-screen w-full flex'>
                <div className=' w-1/2 flex items-center justify-center '>
                    <img className=' object-cover' src="https://garizon.in/public/img/login.jpg" alt="" />
                </div>
                <div className='w-1/2'>
                    <RegisterForm />
                </div>
            </div>

        </div>
    )
}

export default RegisterPage