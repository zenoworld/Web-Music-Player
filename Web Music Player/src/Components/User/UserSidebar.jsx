import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { NavLink } from 'react-router-dom';

const UserSidebar = () => {
  return (
    <div className="w-[190px] h-screen overflow-y-auto bg-[#1c1c1c] text-white [&::-webkit-scrollbar]:hidden p-4">

      <h3 className="text-2xl font-bold text-center mb-6">SweetMelody</h3>
      <div className="flex flex-col justify-between h-full gap-4 ">
        <div className='pl-2'>
          <NavLink to="/" className="flex items-center gap-3 px-3 py-2 hover:text-blue-600" ><i class="fas fa-home"></i>Home</NavLink>
        </div>
        <div>
          <span className="block text-xl font-extrabold px-2 mb-3">MENU</span>
          <div className="flex flex-col gap-3 pl-2">
            <NavLink to="/" className="flex items-center gap-3 px-3 py-2 hover:text-blue-600">
              <i className="fab fa-internet-explorer"></i> Explore
            </NavLink>
            <NavLink to="/" className="flex items-center gap-3 px-3 py-2 hover:text-blue-600">
              <i className="fas fa-compact-disc"></i> Albums
            </NavLink>
            <NavLink to="/" className="flex items-center gap-3 px-3 py-2 hover:text-blue-600">
              <i className="fas fa-microphone-alt"></i> Artists
            </NavLink>
            <NavLink to="/" className="flex items-center gap-3 px-3 py-2 hover:text-blue-600">
              <i className="fas fa-broadcast-tower"></i> Radio
            </NavLink>
          </div>
        </div>


        <div>
          <span className="block text-xl font-extrabold px-2 mb-3">LIBRARY</span>
          <div className="flex flex-col gap-3 pl-2">
            <NavLink to="/" className="flex items-center gap-3 px-3 py-2 hover:text-blue-600">
              <i className="fas fa-spinner"></i> Recent
            </NavLink>
            <NavLink to="/" className="flex items-center gap-3 px-3 py-2 hover:text-blue-600">
              <i className="fas fa-music"></i> Albums
            </NavLink>
            <NavLink to="/" className="flex items-center gap-3 px-3 py-2 hover:text-blue-600">
              <i className="far fa-heart"></i> Favourites
            </NavLink>
            <NavLink to="/" className="flex items-center gap-3 px-3 py-2 hover:text-blue-600">
              <i className="fas fa-folder"></i> Local
            </NavLink>
          </div>
        </div>


        <div>
          <span className="block text-xl font-extrabold px-2 mb-3">PLAYLIST</span>
          <div className="flex flex-col gap-3 pl-2">
            <NavLink to="/" className="flex items-center gap-3 px-3 py-2 hover:text-blue-600">
              <i className="fas fa-folder-plus"></i> My Playlists
            </NavLink>
            <NavLink to="/" className="flex items-center gap-3 px-3 py-2 hover:text-blue-600">
              <i className="fas fa-cubes"></i> Best of 2025
            </NavLink>
            <NavLink to="/" className="flex items-center gap-3 px-3 py-2 hover:text-blue-600">
              <i className="fas fa-users-cog"></i> About Music
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSidebar;
