import React,{useState} from 'react';
import { BiEdit } from "react-icons/bi";
import ProfileModal from './ProfileModal';

const InfoCard = () =>{

    const [modalOpened, setmodalOpened] = useState(false);

    return (<>
    <div className="infocard flex flex-col p-[1rem] bg-gray-50 mt-[1rem]  rounded-xl gap-2 w-[90%]" >
        <div className='infocard2 flex justify-between items-center'>
            <h1 className='heading font-bold text-2xl'>Your Info</h1>
            < BiEdit className='text-2xl cursor-pointer' onClick={()=>{setmodalOpened(true)}} />
            <ProfileModal modalOpened ={modalOpened} setmodalOpened={setmodalOpened} />
        </div>
        <div className='flex gap-1'>
            <span className='font-bold'>Status</span>
            <span>in Relationship</span>
        </div>
        <div className='flex gap-1'>
            <span className='font-bold'>Lives</span>
            <span>Rishikesh uttarakhand</span>
        </div>
        <div className='flex gap-1'>
            <span className='font-bold'>Work at</span>
            <span>B.tech</span>
        </div>

        <button className='btn h-[1.7rem] w-[5rem] bg-[#fca61f] text-white hover:bg-white hover:text-[#fca61f] hover:border-[1px] hover:border-[#fca61f] transition-all ease-in rounded-xl flex items-center justify-center mt-[3rem] self-end'>Logout</button>
    </div>
    </>);
}
export default InfoCard;