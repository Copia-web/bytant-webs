import React from 'react'
import Founderfemale from '../../assets/Founder-female.PNG'
import Foundermale from '../../assets/Founder-male.PNG'
const founders = [
    {
      img: Founderfemale,
      msg: "Hi, I'm Henrietta Kumi, a tech enthusiast, software developer, and graphic designer. I'm pursuing a Computer Science degree at the University of Cape Coast, focusing on software development, UI/UX, and web development. Passionate about innovation, I aim to empower women in tech, fostering a community of growth and leadership."
    },
    {img:Foundermale,msg:"Hi, I’m Kelvin Omaboe, a tech enthusiast, cybersecurity expert, and graphic designer. I’m studying Computer Science at the University of Cape Coast while advancing my software engineering skills through ALX.As the founder of Bytant Innovative Group, I lead a team solving real-world problems with tech, including a weather app for Ghanaian universities. Beyond tech, I’m a skilled saxophonist, using music to inspire.I’m passionate about Africa’s tech potential and committed to empowering the next generation of innovators through creativity, collaboration, and impactful solutions."}
  ];
  
  export default function Founders() {
    return (
      <div>
         <p className='text-center text-3xl font-bold text-[#663399]'>Team Lead</p>
      <div className='flex flex-col lg:flex-row  p-5 gap-6'>
        {founders.map((i, index) => (
          <section key={index} className='w-[350px] bg-white shadow-lg p-5 rounded-lg'>
            <img
              src={i.img}
              className='w-32 h-32 object-cover rounded-full mx-auto mb-4'
              alt="Founder"
            />
            <p className='text-sm font-semibold text-gray-700 text-center'>{i.msg}</p>
          </section>
        ))}
      </div>
      </div>
    );
  }
  