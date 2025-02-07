import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-5/6 flex justify-center items-center '>
      <div className='w-7/8 h-3/4 mx-auto px-8 '>
        <h1 className='text-8xl font-bold'>Welcome to Sweet Melody</h1>
        <div className='h-1/3 flex justify-center items-center'>
          <h1 className='text-9xl rotate-45'>🎧</h1>
          <span className='text-4xl font-medium'> Sweet Melody – Play, Listen, Enjoy!</span>
        </div>
        <div className='h-2/4 w-full flex justify-center'>
          <span className='max-w-5xl text-xl text-gray-200 leading-relaxed text-center font-semibold flex justify-center items-center'>
            Discover, play, and enjoy your favorite tunes with Sweet Melody, a seamless and immersive web music player. Whether you're vibing to the latest hits or diving into timeless classics, Sweet Melody brings you a smooth and personalized listening experience.<h1 className='text-6xl rotate-315'>🎵</h1>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Home