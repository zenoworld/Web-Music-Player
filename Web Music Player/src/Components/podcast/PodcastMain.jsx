import React from 'react'
import { NavLink } from 'react-router-dom'
import pod1 from '../../assets/pod1.jpg'
import pod2 from '../../assets/pod2.jpg'
import pod3 from '../../assets/pod3.jpg'
import pod4 from '../../assets/pod4.jpg'
import pod5 from '../../assets/pod5.jpg'
import pod6 from '../../assets/pod6.jpeg'
import pod7 from '../../assets/pod7.jpeg'
import pod8 from '../../assets/pod8.jpeg'
import pod9 from '../../assets/pod9.jpeg'
import pod10 from '../../assets/pod10.jpeg'

const podcastData = [
    {
        name: "",
        poster: pod1,
    },
    {
        name: "",
        poster: pod2,
    },
    {
        name: "",
        poster: pod3,
    },
    {
        name: "",
        poster: pod4,
    },
    {
        name: "",
        poster: pod5,
    },
    {
        name: "",
        poster: pod6,
    },
    {
        name: "",
        poster: pod7,
    },
    {
        name: "",
        poster: pod8,
    },
    {
        name: "",
        poster: pod9,
    },
    {
        name: "",
        poster: pod10,
    },
]
const PodcastMain = () => {
    return (
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

            <div className='w-full h-5/6 overflow-y-auto [&::-webkit-scrollbar]:hidden'>
                <h1 className='w-full text-3xl font-bold mb-3 px-2'>Top Podcasts for You</h1>
                <div className="grid grid-cols-4 gap-6 justify-between w-full overflow-x-auto">
                    {podcastData.map((item, index) => (
                        <div key={index} className="w-[200px] h-[200px] ">
                            <img className='object-cover rounded-xl w-full h-full' src={item.poster} alt="img" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default PodcastMain