import React ,{useState , useRef} from 'react';
import {  BsCardImage  } from "react-icons/bs";
import {  FiPlayCircle  } from "react-icons/fi";
// import {  IoLocationOutline  } from "react-icons/io";
import {  GrScheduleNew  } from "react-icons/gr";
import {  MdOutlineLocationOn  } from "react-icons/md";
import {  FaTimes } from "react-icons/fa";
  
import myProfile from '../img/myProfile.jpg'


const Postshare = () =>{

    const [image , setImage] = useState(null);
    const imageRef = useRef();

    const onImageChange = (event)=>{

        if(event.target.files && event.target.files[0]){
            let img = event.target.files[0];

            setImage({
                image: URL.createObjectURL(img)
            })
        }
    }

    return (<>
<div className='div0  p-3 flex flex-col border-[1px] items rounded-xl gap-1 bg-gray-50'>
    <div className='div1 flex gap-2'>
        <img src={myProfile} alt="" className="img w-[3rem] h-[3rem] rounded-full" />

        <input type="text" placeholder="What's happening?" className="imp rounded-lg w-[90%] px-[1rem] bg-gray-200 " />
    </div>

    <div className='icons flex mt-[1rem] justify-center gap-8 '>
<div className='flex items-center justify-center gap-1 cursor-pointer hover:text-gray-500'>
   < BsCardImage className='icon text-1xl text-green-500' onClick={()=>{imageRef.current.click()}}/>
   Photos
 </div>

 <div className='flex items-center gap-1 cursor-pointer hover:text-gray-500'>
   <FiPlayCircle className='icon text-1xl text-red-500'/>
   video
</div>
<div className='flex items-center gap-1 cursor-pointer hover:text-gray-500 '>
   <MdOutlineLocationOn className='icon text-1xl text-blue-500' />
   Location
   </div>

  <div className='flex items-center gap-1  cursor-pointer hover:text-gray-500'>
  <GrScheduleNew className='icon text-1xl text-red-500'/>
  schedule
  </div>

  <button className='btn   bg-[#fca61f] text-white w-[5rem] h-[2rem] rounded-lg cursor-pointer hover:bg-white hover:text-[#fca61f] hover:border-[#fca61f] hover:border-[2px] flex items-center justify-center transition-all ease-in-out mr-[-2rem]'>Share</button>



        <div>
            <input className='inp hidden' type="file" name="myImage" ref={imageRef} onChange={onImageChange} />
        </div>


    </div>
        { image && (
            
            <div className='previewimage relative'>
                <FaTimes onClick={()=>{setImage(null)}} className="cross absolute right-[1rem] top-[0.5rem] text-2xl text-black cursor-pointer"/>
                <img src={image.image} alt="" className='img w-[100%] max-h-[30rem] object-cover rounded-lg' />
            </div>
           
            
        )}


    </div>



    </>);

}

export default Postshare;