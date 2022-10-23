import React from 'react';
import { TrendData } from '../Data/TrendData';

const TrendCard = () =>{

    return (<>
     
        <div className='trendcard flex flex-col p-[1rem] rounded-lg pl-[1rem] bg-gray-50 gap-[1rem]'>
            
            <h1 className='heading text-2xl font-bold'>Trends for you</h1>

     {

        TrendData.map((trend ,id) =>{
                return (<>
                
                <div className='seconddiv flex flex-col gap-[0.2rem]'>
                    <span className='spany font-bold'>#{trend.name}</span>
                    <span>#{trend.shares}k shares</span>
                </div>
                
               

                </> )
        })
     }


</div>
     
    </>);

}

export default TrendCard;