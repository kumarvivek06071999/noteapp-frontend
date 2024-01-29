import axios from 'axios'
import React, { useState } from 'react'
import { BASE_URL } from '../constant/config'

const TestPage = () => {
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const handleSubmit = async (event) => {
        console.log(Name, Email, Password)
        event.preventDefault()
        const dataToPost = {
            name: Name,
            email: Email,
            password: Password
        }

        let data = await axios({
            method: "post",
            url: BASE_URL + "/user/register",
            data: dataToPost
        })
        console.log(data)
        if (data) {
            alert("Register")
        }

    }

    return (
        <div>
            <form action="">
                <label htmlFor="name">Name</label>
                <input value={Name} onChange={(e) => { setName(e.target.value) }} type="text" placeholder='type name' />
                <label htmlFor="email">Email</label>
                <input value={Email} onChange={(e) => { setEmail(e.target.value) }} type="text" placeholder='type email' />
                <label htmlFor="password">Password</label>
                <input value={Password} onChange={(e) => { setPassword(e.target.value) }} type="text" placeholder='type password' />
                <button onClick={handleSubmit}>Signup</button>
            </form>
        </div>
    )
}

export default TestPage