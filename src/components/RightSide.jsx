
import React,{useState} from 'react';

import home from '../img/home.png';
import noti from '../img/noti.png';
import comment from '../img/comment.png';

import {AiFillSetting} from "react-icons/ai";
import TrendCard from './TrendCard';
import ShareModel from './ShareModel';

const RightSide = () =>{
    const [modalOpened, setmodalOpened] = useState(false);
    return (<>

<div className='rightside flex flex-col gap-[1rem]'>

    <div className='div1 flex h-[5vh] justify-between items-center'>

        <img src={home} alt="" className='h-[1.5rem] w-[1.5rem] cursor-pointer' />

       < AiFillSetting className='h-[1.5rem] w-[1.5rem] cursor-pointer' />

        <img src={noti} alt="" className='h-[1.5rem] w-[1.5rem] cursor-pointer' />
        <img src={comment} alt="" className='h-[1.5rem] w-[1.5rem] cursor-pointer' />
    </div>


    <TrendCard />

    <button className='btn w-[90%] self-center h-[3rem] bg-[#fca61f] text-white transition-all ease-in hover:border-[#fca61f] hover:bg-white hover:text-[#fca61f] rounded-xl font-serif '
    
    onClick={()=>{setmodalOpened(true)}}
    >Share</button>

    <ShareModel modalOpened={modalOpened} setmodalOpened={setmodalOpened} />

    </div>
    
    </>);


}
export default RightSide;