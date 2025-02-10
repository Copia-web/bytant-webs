import React from 'react';
import { motion } from "motion/react"
import web from '../../assets/webs.svg'
import search from '../../assets/search.svg'
import digital from '../../assets/digital.svg'
import video from '../../assets/video.svg'
import design from '../../assets/design.svg'

const services = [
    { label: 'Web development', img: web },
    { label: 'Search Engine Optimization', img: search },
    { label: 'Web Designing', img: design },
    { label: 'Digital Marketing', img: digital },
    { label: 'Video Editing', img: video },
];

export default function Services() {
  return (
    <div>
      <div>
        <p className='font-poppins text-[#663399] text-center p-5'>Our Services</p>
        <p className='text-center text-2xl font-semibold text-[#663399] mt-3 mb-7'>Here's Our Services</p>
        
        <div className='flex flex-col items-center lg:flex-row lg:flex-wrap gap-4 lg:justify-center'>
          {
            services.map((i, index) => (
              <motion.div
                key={index}
                className='mb-10 shadow-sm xs:w-80 lg:w-96 pl-3 pr-2 pb-2'
                initial={{ opacity: 0, y: 50 }}  // Initial state
                animate={{ opacity: 1, y: 0 }}   // Final state (when it comes into view)
                transition={{ duration: 0.9, delay: index * 0.4 }} // Adds delay for each card
              >
                <img src={i.img} className='w-52 h-52' alt={i.label} />
                <div className='flex flex-col items-center'>
                  <h1 className='font-semibold  text-[#663399] text-lg'>{i.label}</h1>
                  <br />
                  
                  <p className='pl-2 text-sm font-semibold text-[#663399] mb-3'>{i.msg}</p>
                </div>
              </motion.div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
