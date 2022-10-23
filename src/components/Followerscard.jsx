import React from 'react';
import { FollowerData } from '../Data/FollowerData';


const Followerscard = ({img , name , username}) =>{

    return (<>

    <div className='followercard  mt-[3rem] flex flex-col gap-3 ml-[-4rem] text-[13px]'> 
    
    <span className='followercard font-bold text-black ml-[1rem]'>Who is following you</span> 


    {

        FollowerData.map((follower , id) =>{

            return(<>
            
            <div className='follower flex w-[120%] border-none border-black  h-[10vh] items-center justify-between'>

                <div className='seconddiv flex items-center justify-center gap-4'>
                    <img src={follower.img} alt="" className="img w-[3rem] h-[3rem] flex ml-[1rem] rounded-full cursor-pointer" />
                    

                    <div className='divi flex flex-col justify-center items-center'>
                    <span>{follower.name}</span>
                    <span>@{follower.username}</span>
                    </div>

                </div>
                <button className='btn mr-[1rem]  bg-[#fca61f] text-white w-[5rem] transition-all ease-in-out  h-[2rem] rounded-lg cursor-pointer hover:bg-white hover:text-[#fca61f] hover:border-[#fca61f] hover:border-[2px] flex items-center justify-center'>Follow</button>

            </div>
            
          
            
            </>


            )
        })

    }
    </div>
    
    </>);
}

export default Followerscard;