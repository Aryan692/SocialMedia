import React from 'react';
import Ai from '../img/Ai.jpg'
// import profileImg from '../img/profileImg.jpg'
import myProfile from '../img/myProfile.jpg'

import '../App.css';
// import Profile from './Profile/Profile';

// import { NavLink, Route, Routes } from 'react-router-dom';

const Profilecards = ()=>{

    const profilepage = true;

    return (<>


    <div className='cover flex flex-col justify-center items-center mt-[1rem] relative  bg-gray-50 overflow-x-clip rounded-3xl shadow-xl'>

        <div className='profile flex flex-col justify-center items-center '>
        <img src={Ai} alt="" className='cover w-[100%] rounded-t-3xl mt-[-2rem] cursor-pointer shadow-2xl' />

        <img src={myProfile} alt="" className='profile w-[7rem] rounded-full cursor-pointer mb-[-2rem] mt-[-3rem] shadow-xl' />

        </div>

        <div className='profiledetail flex flex-col items-center justify-center gap-4 mt-[3rem]'>

            <span className='name text-1xl font-bold'>Aryan Tiwari</span>

            <span className='quality'> full stack developer</span>

            <hr className='hr w-[115%] border-[1px]  border-gray-600'/>

            <div className='follower flex items-center justify-center gap-6'>
            <div className='div1 flex flex-col items-center justify-center'>
                <span className='span font-bold'>8,657</span>
                <span>Follower</span>
            </div>
            <div className='hr-div h-[50px] border-[1px] items-center justify-center flex border-gray-600'></div>
            <div className='div1 flex flex-col items-center justify-center'>
                <span className='span font-bold'>4</span>
                <span>Follower</span>
            </div>

            {
                profilepage && (
                    <>
                    <div className='hr-div h-[50px] border-[1px] items-center justify-center flex border-gray-600'></div>
                    <div className='div1 flex flex-col items-center justify-center'>
                        <span className='span font-bold'>3</span>
                        <span>Posts</span>
                    </div>
                    </>
                )
            }
            </div>


                <hr className='hr w-[115%] border-[1px]  border-gray-600' />

                <div className='divi mb-[0.5rem] '>  <span className='span font-bold text-[#fca61f] cursor-pointer hover:text-[#f5c32c]'>My Profile</span> </div>


           
        </div>
    </div>
   
    
    </>);


}
export default Profilecards;