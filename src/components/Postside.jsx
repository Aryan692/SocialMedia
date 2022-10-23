import React from 'react';
import Posts from './Posts';
import Postshare from './Postshare';

const Postside = () =>{

    return (<>

    <div className='postside flex flex-col gap-[1rem] h-[100vh] overflow-auto'>
     <Postshare />

     <Posts />
     
     </div>


    
    </>);
}

export default Postside;