import React from 'react'
import { MdOutlineVideoCameraFront } from "react-icons/md";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineWeb } from "react-icons/md";
import { FaSearch } from "react-icons/fa";


const msg =[
    {label:'Digital Marketing',msg:'Expand your reach and connect with your audience through targeted digital strategies across multiple online platforms',img:MdOutlineVideoCameraFront},
    {label:'Graphic Design',msg:"Create compelling visuals that communicate your brand’s message effectively using typography, color, and imagery.",img:MdOutlineDesignServices},
    {label:'Video Editing',msg:'Engage your audience with high-quality videos, animations, and illustrations that bring your ideas to life',img:FaVideo},
    {label:'Web Design',msg:'Build stunning, user-friendly websites that provide seamless experiences and align with your brand identity',img:CgWebsite},
    {label:'Web Development',msg:'Turn ideas into functional, high-performing websites with robust coding and cutting-edge technologies',img:MdOutlineWeb},
    {label:'SEO (Search Engine Optimization)',msg:'Optimize your website to rank higher on search engines, attract organic traffic, and boost your online visibility',img:FaSearch}
]

export default function Reasons() {
  return (
    <div className=''>
       {
        msg.map((i,index)=>(
            <div className=''key={index}>
                <div className='flex gap-3 mb-3'>
                    <i.img className='text-4xl text-[#663399]'/>
                    <p className='text-[#663399] text-lg font-semibold'>{i.label}</p>
                </div>
                <p className='mb-8 text-wrap'>{i.msg}</p>
            </div>
        ))
       }
    </div>
  )
}
