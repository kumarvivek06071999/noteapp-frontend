import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signupUser } from '../../redux/user/userSlice'
import { useNavigate } from 'react-router-dom'

export const RegisterForm = () => {
  const [Name, setName] = useState("")
  const [Email, setEmail] = useState()
  const [Password, setPassword] = useState()
  console.log(Name, Email, Password)
  const dispatch = useDispatch()

  const nav = useNavigate()

  const handleRegister = async (event) => {
    event.preventDefault()
    const dataToPost = {
      name: Name,
      email: Email,
      password: Password
    }
    dispatch(signupUser(dataToPost))
    nav("/login")


  }
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register your account
        </h2>
      </div>

      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="name" className="block text-lg font-medium leading-6 text-gray-900">
              Name
            </label>
            <div className="mt-2">
              <input
                value={Name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                name="name"
                type="name"
                autoComplete="name"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-lg font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-lg">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                name="password"
                type="text"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              onClick={handleRegister}
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}
