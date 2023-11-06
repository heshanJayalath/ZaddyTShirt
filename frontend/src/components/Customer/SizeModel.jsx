import React from 'react'
import { RxCross1 } from 'react-icons/rx';
import prizeCHart from "../../Assets/Customer/CustomerHomePage/sizechart.jpeg";
function SizeModel({setOpen}) {
  return (
    <div onClick={() => setOpen(false)} className=' fixed flex w-full md:h-screen md:p-0 pt-60 top-0 left-0 bg-[#7ec41b2f] z-40 
    content-center items-center justify-center'>
    <img class="h-5/6 transition-all 
    duration-300 rounded-lg cursor-pointer filter 
    grayscale hover:grayscale-0" src={prizeCHart}/>
    {/* <RxCross1 size={30} className='absolute right-0 top-0 z-50 '
    onClick={() => setOpen(false)}
                            /> */}
    </div>
  )
}

export default SizeModel
