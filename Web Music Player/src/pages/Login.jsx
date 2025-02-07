import React, { useState } from 'react'
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../authContext/UserContext.jsx';


const Login = () => {

    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined
    })

    const { dispatch } = useContext(UserContext)
    const navigate = useNavigate()

    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleClick = async e => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" })

        try {
            const res = await fetch(`http://localhost:4000/api/v1/auth/login`, {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(credentials)
            })

            const result = await res.json()

            if (!res.ok) alert(result.message)
            console.log(result.data)
            dispatch({ type: "LOGIN_SUCCESS", payload: result.data })
            navigate('/User_main')
        }
        catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.message })
        }
    }



    return (
        <div className='w-full h-5/6 flex justify-center items-center '>
            <div className='w-2/8 h-5/8 border-2 border-gray-200 backdrop-blur-xl rounded-lg p-8'>

                <h2 className='w-full h-1/6 text-4xl flex justify-center items-center font-bold'>LOGIN</h2>
                <div
                    className='w-full h-3/6 flex flex-col justify-center items-center gap-4'
                >
                    <input className='w-full rounded-lg px-4 py-2 bg-transparent border-2 border-gray-400 placeholder:text-gray-300 text-black' type='email' placeholder='Email' id='email' onChange={handleChange}></input>
                    <input className='w-full rounded-lg px-4 py-2 bg-transparent border-2 border-gray-400 placeholder:text-gray-300 text-black' type='password' placeholder='Password' id='password' onChange={handleChange}></input>
                </div>
                <div
                    className='w-full h-2/6 flex flex-col justify-between items-center gap-2'
                >
                    <button onClick={handleClick} className='w-full h-2/6 bg-blue-500 text-white rounded-lg'>Login</button>
                    <p>Dont Have An account?<Link to='/register' className='text-xl text-blue-400 font-light mx-1'>Create</Link></p>
                </div>
                {/* <div>
                    <input className='email' type='email' placeholder='Email' id='email' onChange={handleChange} required></input>

                    <input className='password' type='password' placeholder='Password' id='password' onChange={handleChange} required></input>

                    <Button className='btn secondary__btn auth__btn' type='submit'>Login</Button>
                    <p>Dont Have An account?<Link to='/Register'>Create</Link></p>
                </div> */}
            </div>
        </div>
    )
}

export default Login;