import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../authContext/UserContext.jsx';

const Register = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        email: undefined,
        password: undefined
      })
  
      const {dispatch} = useContext(UserContext);
      const navigate = useNavigate()
  
      const handleChange = e => {
        setCredentials(prev => ({...prev, [e.target.id]: e.target.value}))
      }

    const handleClick = async e => {
        e.preventDefault()

        try {
            const res = await fetch(`http://localhost:4000/api/v1/auth/register`, {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(credentials)
            })
            const result = await res.json()

            if (!res.ok) alert(result.message)
            dispatch({ type: "REGISTER_SUCCESS" })
            navigate('/login')
        }
        catch (err) {
            alert(err.message)
        }

    }


    return (
        <div className='w-full h-5/6 flex justify-center items-center '>
            <div className='w-2/8 h-6/8 border-2 border-gray-200 backdrop-blur-xl rounded-lg p-8'>

                <h2 className='w-full h-1/7 text-4xl flex justify-center items-center font-bold'>Register</h2>
                <div
                    className='w-full h-4/7 flex flex-col justify-center items-center gap-4'
                >
                    <input className='w-full rounded-lg px-4 py-2 bg-transparent border-2 border-gray-400 placeholder:text-gray-300 text-black' type='text' placeholder='userName' id='name' onChange={handleChange}></input>
                    <input className='w-full rounded-lg px-4 py-2 bg-transparent border-2 border-gray-400 placeholder:text-gray-300  text-black' type='email' placeholder='Email' id='email' onChange={handleChange}></input>
                    <input className='w-full rounded-lg px-4 py-2 bg-transparent border-2 border-gray-400 placeholder:text-gray-300 text-black' type='password' placeholder='Password' id='password' onChange={handleChange}></input>
                </div>
                <div
                    className='w-full h-2/7 flex flex-col justify-between items-center gap-2'
                >
                    <button onClick={handleClick} className='w-full h-2/6 bg-blue-500 text-white rounded-lg'>Sign Up</button>
                    <p>Already Have An account?<Link to='/login' className='text-xl text-blue-400 font-light mx-1'>Sign In</Link></p>
                </div>

            </div>
        </div>
    )
}

export default Register