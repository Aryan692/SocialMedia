import React from 'react';
import Logo from '../img/logo.png'

const Authentication = () =>{

    return (<>
       <div className='authentication flex items-center justify-center h-[100vh] relative gap-[4rem]'>
        <div  className='auth flex items-center justify-center gap-[1rem]'>
            <img src={Logo} alt="" className='img w-[3.2rem] h-[3.2rem]' />

            <div className='Webname flex flex-col gap-3'>
                <h1 className='text-5xl font-bold text-[#fca61f]'>ZKC media</h1>
                <h6 className=' font-semibold'>explore the ideas throughout the world</h6>
            </div>
        </div>

        <LogIn />
       </div>
    </>);
}


function LogIn(){
    return(<>


        <div className='logindiv flex w-[30%] rounded-xl flex-col items-center justify-center gap-[3rem] bg-gray-200'>
            <div className='text-3xl font-bold flex mt-[2rem] items-center justify-center'>Log in</div>  
            <div className='inside-div flex flex-col gap-[1rem]'>
            
                <div>
                    <input className='inp3 px-[1rem] w-[99%] h-[3rem] rounded-lg'  type="text" placeholder='Username' name='username' />
                </div>
                <div>
                    <input className='inp3 px-[1rem] w-[99%] h-[3rem] rounded-lg'  type="text" placeholder='Password' name='Password' />
                </div>

                


                <div className='flex gap-[1rem] mb-[1rem] items-center justify-center'>
                    <h1 className='heading hover:text-blue-500 hover:underline ml-[1rem] cursor-pointer'>already have an account. login!</h1>
                    <button className='btn flex items-center justify-center w-[6rem] h-[2.5rem] text-white bg-[#fca61f] hover:text-[#fca61f] hover:border-[1px] hover:bg-white hover:border-[#fca61f] transtition-all ease-in rounded-xl cursor-pointer'>Sign up</button>
                </div>

               
            </div>
            </div>
    </>);
}

function SignIn(){
    return(<>


        <div className='logindiv flex w-[30%] rounded-xl flex-col items-center justify-center gap-[3rem] bg-gray-200'>
            <div className='text-3xl font-bold flex mt-[2rem] items-center justify-center'>Sign up</div>  
            <div className='inside-div flex flex-col gap-[1rem]'>
                <div className='flex gap-3'> 
                    <input className='inp1 px-[1rem] w-[10rem] h-[3rem] rounded-md' type="text" placeholder='FirstName' name='firstname'/>
                    <input className='inp2 px-[1rem] w-[10rem] h-[3rem] rounded-md' type="text" placeholder='LastName' name='lastname' />
                </div>

                <div>
                    <input className='inp3 px-[1rem] w-[99%] h-[3rem] rounded-lg'  type="text" placeholder='Username' name='username' />
                </div>

                <div className='flex gap-[1rem] '> 
                    <input className='inp2 px-[1rem] w-[10rem] h-[3rem] rounded-md'type="text" placeholder='Password'name='Password' />
                    <input className='inp2 px-[1rem] w-[10rem] h-[3rem] rounded-md' type="text" placeholder='Confirm Password' name='confirmPassword' />
                </div>


                <div className='flex gap-[1rem] mb-[1rem]'>
                    <h1 className='heading hover:text-blue-500 hover:underline ml-[1rem] cursor-pointer'>already have an account. login!</h1>
                    <button className='btn flex items-center justify-center w-[6rem] h-[2.5rem] text-white bg-[#fca61f] hover:text-[#fca61f] hover:border-[1px] hover:bg-white hover:border-[#fca61f] transtition-all ease-in rounded-xl cursor-pointer'>Sign up</button>
                </div>

               
            </div>
            </div>
    </>);
}
export default Authentication;