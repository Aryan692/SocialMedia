import React from 'react';
import Profilecards from './Profilecards';
import Logosearch from './Logosearch';

import Followerscard from './Followerscard'



const Profileside = () =>{

    return (<>

            <div className='profileside flex flex-col items-center gap-[1rem] overflow-auto'>

         <Logosearch />

         <Profilecards />


         <Followerscard />

         </div>

    
    </>);
}

export default Profileside;