import React from 'react';
import './button.css';

const Button = ({ play, isPlaying }) =>{
  return <>
    <div className='btn-container'>
      <div onClick={play} className={isPlaying ? 'btn-stop' : 'btn-play'}></div>
    </div>
    
    </>
}
export default Button;
