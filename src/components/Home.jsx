import React from 'react';

import './Home.css'
import Postside from './Postside';
import Profileside from './Profileside';
import RightSide from './RightSide';

const Home  = () =>{

    return(<>
<div className='main-div '>
   <Profileside />
  <Postside />
   <RightSide />
    </div>
    </>);
}
 export default Home;