import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import LOGOSTYLE from '../../assets/LOGOSTYLE.PNG'
import LOGOWORDS from '../../assets/LOGOWORDS.PNG'



const msg =[
  {label:'Address',msg:'University of Cape Coast, Ghana,',icon:FaLocationDot},
  {label:'Email Us',msg:'bytantinnovativegroup@gmail.com',icon:MdEmail},

  {label:'Call Us',msg:"+23350 437 8971",icon:BsFillTelephoneFill
},
{label:'Open Hours',msg:'Monday - Friday 9:00AM - 7:00PM',icon:FaClock}
]

export default function Footer() {
  return (
    <div className='bg-white'>
      <p className='text-2xl text-center text-[#663399] font-semibold mb-6'>Contact Us</p>
    <div>
     <div className='flex flex-col lg:flex-row justify-center gap-16 p-14 '>
     {
        msg.map((i,index)=>(
         <div key={index} className='flex flex-col lg:items-center'>
           <i.icon className='text-5xl text-[#663399] mb-2'/>
           <p className='text-[#663399] font-semibold mb-2'>{i.label}</p>
           <p className='text-[#663399] font-semibold'>{i.msg}</p>
          </div>
        ))
      }
     </div>
    </div>
    <div className='flex justify-center mb-5'>
      <img src={LOGOSTYLE} className='w-28'/>
      <img src={LOGOWORDS} className='w-28'/>
    </div>
    <div className='border-t-2 border-[#663399] pt-10 text-center text-[#663399] font-semibold'>
    © Copyright Bytant. All Rights Reserved
    </div>
    </div>
  )
}
