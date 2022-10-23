import React from 'react';
import Followerscard from '../Followerscard';
import InfoCard from '../Infocard';
import Logosearch from '../Logosearch';

const ProfileLeft = () =>{

    return (<>

    <div className='profileside flex flex-col items-center gap-[1rem] overflow-auto'>

        <Logosearch />
        <InfoCard />
        <Followerscard />
    </div>
    
    </>);

}

export default ProfileLeft;