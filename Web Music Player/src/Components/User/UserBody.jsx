import React, { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom';
import image1 from '../../assets/img1.jpeg'
import image2 from '../../assets/img2.jpeg'
import image3 from '../../assets/img3.jpeg'
import image4 from '../../assets/img4.jpeg'
import image5 from '../../assets/img5.jpeg'
import image6 from '../../assets/img10.jpeg'
import image7 from '../../assets/img7.jpeg'
import image8 from '../../assets/img8.jpeg'
import image9 from '../../assets/song1.jpg'
import image10 from '../../assets/song2.jpg'
import image11 from '../../assets/song3.jpg'
import image12 from '../../assets/song4.jpg'
import image13 from '../../assets/song5.jpg'

import song1 from '../../assets/songs/infinity.mp3';
import song2 from '../../assets/songs/song1.mp3'
import song3 from '../../assets/songs/kksong.mp3'
import song4 from '../../assets/songs/shapeofyou.mp3'
import song5 from '../../assets/songs/mastmagan.mp3'

import Slider from '../slider/Slider.jsx'
import ControlPanel from '../controls/ControlPanel.jsx'

const artistsData = [
  {
    name: "Arijit Singh",
    image: image1,
  },
  {
    name: "Arijit Singh",
    image: image2,
  },
  {
    name: "Arijit Singh",
    image: image3,
  },
  {
    name: "Arijit Singh",
    image: image4,
  },
  {
    name: "Arijit Singh",
    image: image5,
  },
  {
    name: "Arijit Singh",
    image: image6,
  },
  {
    name: "Arijit Singh",
    image: image7,
  },
  {
    name: "Arijit Singh",
    image: image8,
  },
]
const UserBody = () => {
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const [percentage3, setPercentage3] = useState(0);
  const [percentage4, setPercentage4] = useState(0);
  const [percentage5, setPercentage5] = useState(0);

  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);
  const [isPlaying3, setIsPlaying3] = useState(false);
  const [isPlaying4, setIsPlaying4] = useState(false);
  const [isPlaying5, setIsPlaying5] = useState(false);

  const [duration1, setDuration1] = useState(0);
  const [duration2, setDuration2] = useState(0);
  const [duration3, setDuration3] = useState(0);
  const [duration4, setDuration4] = useState(0);
  const [duration5, setDuration5] = useState(0);

  const [currentTime1, setCurrentTime1] = useState(0);
  const [currentTime2, setCurrentTime2] = useState(0);
  const [currentTime3, setCurrentTime3] = useState(0);
  const [currentTime4, setCurrentTime4] = useState(0);
  const [currentTime5, setCurrentTime5] = useState(0);

  const audioRef1 = useRef()
  const audioRef2 = useRef()
  const audioRef3 = useRef()
  const audioRef4 = useRef()
  const audioRef5 = useRef()

  const musicCard = [
    {
      name: "",
      percentage: percentage1,
      duration: duration1,
      currentTime: currentTime1,
      playing: isPlaying1,
      audioReference: audioRef1,
      song: song1,
      poster: image9
    },
    {
      name: "",
      percentage: percentage2,
      duration: duration2,
      currentTime: currentTime2,
      playing: isPlaying2,
      audioReference: audioRef2,
      song: song2,
      poster: image10
    },
    {
      name: "",
      percentage: percentage3,
      duration: duration3,
      currentTime: currentTime3,
      playing: isPlaying3,
      audioReference: audioRef3,
      song: song3,
      poster: image11
    },
    {
      name: "",
      percentage: percentage4,
      duration: duration4,
      currentTime: currentTime4,
      playing: isPlaying4,
      audioReference: audioRef4,
      song: song4,
      poster: image12
    },
    {
      name: "",
      percentage: percentage5,
      duration: duration5,
      currentTime: currentTime5,
      playing: isPlaying5,
      audioReference: audioRef5,
      song: song5,
      poster: image13
    },
  ]

  const onChange = (e, cardIndex) => {
    let audio;
    switch (cardIndex) {
      case 1:
        audio = audioRef1.current;
        break;
      case 2:
        audio = audioRef2.current;
        break;
      case 3:
        audio = audioRef3.current;
        break;
      case 4:
        audio = audioRef4.current;
        break;
      case 5:
        audio = audioRef5.current;
        break;
      default:
        audio = null; // or provide a default value if none of the cases match
    }
    audio.currentTime = (audio.duration / 100) * e.target.value;

    if (cardIndex === 1) {
      setPercentage1(e.target.value);
    } else if (cardIndex === 2) {
      setPercentage2(e.target.value);
    } else if (cardIndex === 3) {
      setPercentage3(e.target.value);
    } else if (cardIndex === 4) {
      setPercentage4(e.target.value);
    } else if (cardIndex === 5) {
      setPercentage5(e.target.value);
    }
  }

  const playSong = (index) => {
    const audioRefs = [audioRef1, audioRef2, audioRef3, audioRef4, audioRef5];
    const isPlayingStates = [isPlaying1, isPlaying2, isPlaying3, isPlaying4, isPlaying5];
    const setIsPlaying = [setIsPlaying1, setIsPlaying2, setIsPlaying3, setIsPlaying4, setIsPlaying5];

    const audio = audioRefs[index - 1].current;
    if (!audio) return;

    audio.volume = 0.1;
    if (!isPlayingStates[index - 1]) {
      setIsPlaying[index - 1](true);
      audio.play();
    } else {
      setIsPlaying[index - 1](false);
      audio.pause();
    }
  };

  const getCurrDuration = (e, cardIndex) => {
    const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
    const time = e.currentTarget.currentTime

    if (cardIndex === 1) {
      setPercentage1(+percent)
      setCurrentTime1(time.toFixed(2))
    } else if (cardIndex === 2) {
      setPercentage2(+percent)
      setCurrentTime2(time.toFixed(2))
    } else if (cardIndex === 3) {
      setPercentage3(+percent)
      setCurrentTime3(time.toFixed(2));
    } else if (cardIndex === 4) {
      setPercentage4(+percent)
      setCurrentTime4(time.toFixed(2));
    } else if (cardIndex === 5) {
      setPercentage5(+percent)
      setCurrentTime5(time.toFixed(2))
    }
  }

  return (
    <>
      <div className="w-full h-screen overflow-y-auto">

        <div className='w-full h-20 flex justify-between border-b-2 mb-4 border-gray-200'>
          <div className='w-3/4 h-full flex justify-center items-center'>
            <div className='w-1/3 flex justify-between items-center'>
              <NavLink to='/userMain' className='text-2xl font-extrabold'>MUSIC</NavLink>
              <NavLink to='/userMain/podcast' className='text-2xl font-extrabold'>PODCAST</NavLink>
            </div>

          </div>
          <div className='w-1/4 h-full flex justify-between items-center'>
            <NavLink to='/PaymentGateway' className='text-2xl font-extrabold'>✨PREMIUM</NavLink>
          </div>
        </div>

        <div className='w-full h-5/6'>
          <div className="w-full h-1/2">

            <h1 className='w-full text-3xl font-bold mb-3 px-2'>Top Artists</h1>
            <div className="flex justify-between w-full overflow-x-auto">
              {artistsData.map((item, index) => (
                <div key={index} className="w-[140px] h-[140px] ">
                  <img className='object-cover rounded-full w-full h-full' src={item.image} alt="img" />
                </div>
              ))}
            </div>

          </div>

          <div className="w-full h-1/2">

            <h1 className='w-full text-3xl font-bold mb-4 px-2'>Songs Recommended For You</h1>
            <div className='w-full flex justify-between'>
              {musicCard.map((item, index) => (
                <div key={index} className="w-[200px] h-[250px] bg-gray-700 backdrop-blur-3xl p-1 rounded-2xl border-2 border-amber-50 ">
                  <img src={item.poster} className='w-full h-4/6' alt="img" style={{ borderRadius: '10px' }} />
                  <div className="">
                    <Slider percentage={item.percentage} onChange={(e) => onChange(e, index + 1)} />
                    <audio
                      ref={item.audioReference}
                      onTimeUpdate={(e) => getCurrDuration(e, index + 1)}
                      onLoadedData={(e) => {
                        if (index === 0) setDuration1(e.currentTarget.duration.toFixed(2));
                        if (index === 1) setDuration2(e.currentTarget.duration.toFixed(2));
                        if (index === 2) setDuration3(e.currentTarget.duration.toFixed(2));
                        if (index === 3) setDuration4(e.currentTarget.duration.toFixed(2));
                        if (index === 4) setDuration5(e.currentTarget.duration.toFixed(2));
                      }}
                      src={item.song}
                    />
                    <ControlPanel
                      play={() => playSong(index + 1)}
                      isPlaying={item.playing}
                      duration={item.duration}
                      currentTime={item.currentTime}
                    />

                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </>
  );
}

export default UserBody