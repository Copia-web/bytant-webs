import React from 'react';
import { motion } from "motion/react"
import webs from '../../assets/web_dev.svg'
import ux from '../../assets/ux.svg'
import collaborate from '../../assets/collaborate.svg'
import build from '../../assets/build.svg'
import new_tech from '../../assets/new_tech.svg'
import girl from '../../assets/girl.svg'


const msg = [
  { title: 'Learn Web Development', msg: 'Start your journey into web development by mastering the foundational skills like HTML, CSS, and JavaScript. Progress to advanced topics such as React, APIs, and responsive design to build websites that are both beautiful and functional', img: webs, url: '' },
  { title: 'Master UX/UI Design', msg: 'Dive into the world of user-centered design. Learn how to craft intuitive user interfaces, conduct user research, and design seamless experiences that keep users engaged and delighted', img: ux, url: '' },
  { title: 'Collaborate and Grow', msg: 'Become part of a dynamic community of tech enthusiasts. Work on collaborative projects, share insights, and grow your network as you learn and innovate together', img: collaborate, url: '' },
  { title: 'Build Real-World Projects', msg: "Apply what you’ve learned by creating real-world projects that solve practical problems. From personal portfolios to team-based applications, showcase your skills in ways that make an impact", img: build, url: '' },
  { title: 'Stay Ahead with Emerging Tech', msg: 'Keep up with cutting-edge technologies like artificial intelligence, blockchain, and machine learning. Gain the tools and insights to excel in the rapidly evolving world of tech.', img: new_tech, url: '' },
  { title: 'Flexible Learning for Everyone', msg: "Whether you're a beginner taking your first steps or an experienced developer sharpening your skills, our tailored resources and self-paced courses ensure you can learn on your own terms.", img: girl, url: '' },
];

export default function Cards() {
  return (
    <div className='pl-8 pr-8'>
      <div className='flex flex-col items-center lg:flex-row lg:flex-wrap gap-4 lg:justify-center'>
        {
          msg.map((i, index) => (
            <motion.div
              key={index}
              className='mb-10 shadow-sm xs:w-80 lg:w-96 pl-3 pr-2 pb-2'
              initial={{ opacity: 0, y: 50 }}  // Initial state
              animate={{ opacity: 1, y: 0 }}   // Final state (when it comes into view)
              transition={{ duration: 0.9, delay: index * 0.4 }} // Adds delay for each card
              >
              <img src={i.img} className='w-52 h-52' alt={i.title} />
              <div className='flex flex-col items-center'>
                <h1 className='font-poppins mt-4 text-[#663399] text-lg'>{i.title}</h1>
                <br />
                <p className='pl-2 text-sm text-center font-semibold text-slate-700 mb-3'>{i.msg}</p>
              </div>
            </motion.div>
          ))
        }
      </div>
    </div>
  );
}
