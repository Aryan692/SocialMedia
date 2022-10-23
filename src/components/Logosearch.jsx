import React from 'react';
import logo from "../img/logo.png";
import { BiSearchAlt2 } from "react-icons/bi";

const Logosearch = () =>{

    return (<>
    
    <div className='logosearch flex ml-[-3rem] gap-3'>
        <img src={logo} alt="" className='' />

        <div className='inp flex border-none bg-white rounded-md '>
            <input type="text" placeholder='#Explore' className='input scale-90   rounded-md outline-none border-none bg-transparent' />
            <div className='icon flex items-center justify-center bg-gradient-to-r from-[#f99827] to-[#f95f35] rounded-md p-[5px] '>
                <BiSearchAlt2  className='iconx text-2xl text-white cursor-pointer'/>
            </div>
        </div>
    </div>

    </>);
}

export default Logosearch;
