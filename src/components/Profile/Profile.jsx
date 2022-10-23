import React from 'react';

import Postside from '../Postside';
import Profilecards from '../Profilecards';
import RightSide from '../RightSide';
import './Profile.css';
import ProfileLeft from './ProfileLeft';

const Profile =() =>{

    return (<>

    <div className='Profile'>
    <ProfileLeft />

    <div className='profile-center flex flex-col gap-[1rem] '>

        <Profilecards/>
        <Postside />

    </div>

     <RightSide />
    </div>
    </>);
}

export default Profile;