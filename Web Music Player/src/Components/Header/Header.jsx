import React from 'react'
import { Link } from 'react-router-dom'
const navLink = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'About',
    link: '/about'
  },
  {
    name: 'Contact',
    link: '/contact'
  },
  {
    name: 'UserMain',
    link: '/userMain'
  },
]
const Header = () => {

  return (
    <div
      className='w-full h-20 top-0 flex justify-center items-center '>
      <div className='w-5/6 h-full flex justify-between items-center '>
        <h1 className='text-4xl font-bold text-white'>Sweet Melody</h1>

        <div className='w-2/3 h-full flex justify-between items-center'>
          <ul className='w-2/4 flex justify-between items-center'>
            {
              navLink.map((item, index) => (
                <li key={index} className=' text-xl text-gray-200 font-bold cursor-pointer'>
                  <Link to={item.link}> {item.name}</Link>
                </li>
              ))
            }
          </ul>

          <div className='w-1/4 h-full flex justify-center items-center'>
            <div className='w-full h-3/5 flex justify-center  items-center gap-2'>
              <button
                className='h-3/4 w-1/2 font-bold cursor-pointer  rounded-4xl border-2 border-gray-900 bg-gray-900 text-white px-4 py-2 flex justify-center  items-center hover:bg-gray-700 hover:text-white hover:border-none'
              >
                <Link to='/login'>Login</Link>
              </button>
              <button
                className='h-3/4 w-1/2 font-bold cursor-pointer rounded-4xl border-2 border-gray-900 bg-gray-900 text-white px-4 py-2 flex justify-center  items-center hover:bg-gray-700 hover:text-white hover:border-none'
              >
                <Link to='/register'>Register</Link>
              </button>
            </div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default Header