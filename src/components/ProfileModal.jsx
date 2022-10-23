import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({modalOpened , setmodalOpened}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size="50%"
      opened ={modalOpened}
      onClose ={()=>{setmodalOpened(false)}}
    >
     <form className='forminfo flex flex-col gap-[2rem] items-center justify-center'>
        <h1 className=' font-bold text-3xl'>Your Info</h1>

        <div className='w-[94%] flex gap-2'>
            <input className='w-[50%] h-[3rem] bg-gray-200 rounded-lg px-[1rem]' type="text" name="Firstname" placeholder='FirstName' />
            <input className='w-[50%] h-[3rem] bg-gray-200 rounded-lg px-[1rem]' type="text" name="Lastname" placeholder='LastName' />
        </div>

        <input className='w-[94%] h-[3rem] rounded-lg bg-gray-200' type="text" name="WorksAt" placeholder='Work at' />

        <div className='w-[94%] flex gap-2'>
            <input className='w-[50%] h-[3rem] bg-gray-200 rounded-lg px-[1rem]' type="text" name="Livesin" placeholder='Lives in' />
            <input className='w-[50%] h-[3rem] bg-gray-200 rounded-lg px-[1rem]' type="text" name="country" placeholder='Country' />
        </div>
    
        <input className='w-[94%] h-[3rem] rounded-lg bg-gray-200' type="text" name="Relationship" placeholder='RelationShip status' />
    

        <div className='flex w-[90%] '>
            <div className='flex'>
                Profile image
            <input type="file" name='profileimg' />
            </div>
            <div className='flex'>
                Cover image
            <input type="file" name='coverimg' />
            </div>
        </div>


        <button className='btn h-[2rem] w-[6rem] bg-[#fca61f] text-white hover:bg-white hover:text-[#fca61f] hover:border-[1px] hover:border-[#fca61f] transition-all ease-in rounded-xl flex items-center justify-center mt-[1.5rem] mb-[1rem]'>Update</button>
     </form>
    </Modal>
  );
}

export default ProfileModal;