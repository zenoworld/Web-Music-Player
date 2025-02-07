import React from 'react'
import { Routes, Route } from 'react-router-dom';
import UserBody from './UserBody';
import UserSidebar from './UserSidebar'
import PodcastMain from '../podcast/PodcastMain';

const UserMain = () => {
  return (
    <>
      <div className='w-full h-screen'>
        <UserSidebar />
        <div className=' w-6/7 absolute  right-2 top-0' >
        <Routes>
          <Route path='/' element={<UserBody />}/>
          <Route path='/podcast' element={<PodcastMain/>}/>
        </Routes>
          
        </div>
      </div>
    </>
  )
}

export default UserMain