import React from 'react';
import Post from './Post';
import { PostsData } from '../Data/PostData';

const Posts = () =>{

    return (<>



    <div className='post flex flex-col gap-[1rem]'>

        {
            PostsData.map((post ,id)=>{

                return  <Post data={post} id={id}/>
            })


        }
       
    </div>
   

    </>);


}
export default Posts;
