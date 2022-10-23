import React from 'react';

import Notlike from '../img/notlike.png';
import Heart from '../img/like.png';
import share from '../img/share.png';
import comment from '../img/comment.png';

const Post = ({data}) =>{


    return (<>

    <div className='post-div p-[1rem] flex flex-col rounded-lg bg-gray-50'>
   
        <img  className ="image object-cover rounded-md" src={data.img} alt=""/>
       
        <div className='like-comment flex gap-3 mt-[0.5rem]'>

            <img src={data.liked ? Heart : Notlike} alt=""  />
            <img src={comment} alt="" />
            <img src={share} alt="" />
        </div>


        <div className='desc flex flex-col mt-[0.5rem]'>
            <span className='text-gray-600'>{data.likes}Likes</span>
            <span><b>{data.name}</b> {data.desc}</span>
        </div>
        
        </div>
        


    
      

     
    
    </>);
}

export default Post;