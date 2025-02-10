import { FaLongArrowAltRight } from "react-icons/fa";
import Cards from '../Utils/Cards';
import { Link } from 'react-router-dom';
import Services from '../Services/Services';
import About from '../About/About';
import Reasons from "../Reasons/Reasons";
import Founders from "../Founders/Founders";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import LOGOSTYLE from '../../assets/LOGOSTYLE.PNG'
import LOGOWORDS from '../../assets/LOGOWORDS.PNG'
import community from '../../assets/community_rkf4.svg'



export default function LandingPage() {
  const [showMenu,setShowMenu] = useState(false);
  
    const scrollToSection = (id)=>{
      document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
    }

    const handleMenu = (id)=>{
      setShowMenu(!showMenu)
      document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
    }

    
  
  return (
    <div className="">
      {/* Header */}

      <div className='fixed top-0 w-full z-50 shadow-sm bg-blue-50 h-16'>
        <div className='flex justify-between  pl-2 pr-5 items-center justify-items-center'>
            {/* LOGO */}
            <a href='/' className='flex cursor-pointer'>
                <img src={LOGOSTYLE} className='w-16 rounded-md' alt="Logo Style" />
                <img src={LOGOWORDS} className='w-16 rounded-md' alt="Logo Words" />
            </a>
                <div className="flex gap-1 justify-center items-center">
                <a href='/' className='hover:text-[#CEA2FD] text-sm xs:hidden sm:block cursor-pointer font-semibold text-gray-800 pr-5'>Home</a>
                <div onClick={()=> handleMenu('service')} className='hover:text-[#CEA2FD] text-sm xs:hidden sm:block cursor-pointer font-semibold text-gray-800 pr-5'>Services</div>
                <div onClick={()=> handleMenu('course')} className='hover:text-[#CEA2FD] text-sm xs:hidden sm:block cursor-pointer font-semibold text-gray-800 pr-5'>Courses</div>
                <div onClick={()=> handleMenu('about-us')} className='hover:text-[#CEA2FD] text-sm xs:hidden sm:block cursor-pointer font-semibold text-gray-800 pr-5'>About Us</div>
                </div>

                {/* small screens menu */}
                <div className="sm:hidden">
                  
                  <IoMenu className="text-3xl" onClick={()=> setShowMenu(!showMenu)}/>
                  
                </div>
        </div>
        {
          showMenu && (<div className="sm:hidden absolute top-0 w-full h-screen bg-[#CEA2FD] pt-5 ">
            <div className="flex justify-between it pr-5">
            <a href='/' className='flex cursor-pointer'>
                <img src='/LOGOSTYLE.PNG' className='w-14 rounded-md' alt="Logo Style" />
                <img src='/LOGOWORDS.PNG' className='w-14 rounded-md' alt="Logo Words" />
            </a>
               <MdClose className="text-3xl  text-gray-700" onClick={()=> setShowMenu(!showMenu)}/></div>
          <div className=" flex flex-col items-center gap-5 " >
          <a href="/" className="text-2xl font-semibold text-gray-700 onClick={()=> setShowMenu(!showMenu)}">Home</a>
           <div className="text-2xl font-semibold text-gray-700" onClick={()=> handleMenu('service')}>Services</div>
           <div  className="text-2xl font-semibold text-gray-700" onClick={()=> handleMenu('course')}>Courses</div>
           <div className="text-2xl font-semibold text-gray-700  " onClick={()=> handleMenu('about-us')}>About Us</div>
          </div>
          <div className="border-b-2  border-b-[#663399] mt-3"></div>
          </div>)
        }

    </div>
      {/* Hero Section */}
      <div className="bg-[#CEA2FD]   h-[450px] pb-28 mt-16 ">
      <div className='flex justify-center p-4 '>   
      <div className='p-8  shadow-lg rounded-lg rotate-x-3  bg-gray-100 xs:[350px] sm:w-[700px] mb-20'>
      <div className='p-9 bg-[#CEA2FD] rounded-lg shadow-lg flex flex-col items-center '>
            <div className='text-4xl mb-3 text-white text-center' > Empower Your Future with Tech Skills</div><br/>
            <div className='text-gray-950 font-semibold text-center mb-7 '> We train individuals to master cutting-edge technologies and thrive in the digital world</div>
            <button onClick={()=>scrollToSection('portfolio')} className='bg-[#663399] pl-2 pr-2 pt-1 pb-1 rounded-sm text-white shadow-lg flex items-center gap-3 justify-items-center transform transition duration-300 hover:scale-105 cursor-pointer'>
              <div className='font-mono '>Learn More</div>
              <FaLongArrowAltRight/>
            </button>
            
          </div>
      </div>
      </div>
      </div>
       

      {/* Cards Section */}
     
        {/* Quote */}
        <div className='flex flex-col items-center bg-gray-50 pb-10 pl-4 p-4'>
        <div className="mt-16 border-l-4 border-[#663399] mb-5 pl-2 bg-gray-300 text-2xl font-semibold text-gray-700 p-4 xs:text-lg lg:text-2xl rounded-r-2xl flex flex-col items-center ">
          <div className='p-5 '>
            "Not embracing tech in today’s world is like building a rocket and never
            <br />
            launching it—unlock your potential and thrive in the digital era with the power of technology"
          </div>
         
        </div>
        <div className='mt-28 p-8  shadow-lg rounded-lg xs:rotate-0 sm:-rotate-z-1 flex justify-center bg-[#CEA2FD] xs:w-[350px] sm:w-[700px]'>
        <div className='shadow-lg p-6 rounded-lg bg-gray-200'>
            <span className='font-semibold text-gray-700'>
            Welcome to Bytant! We empower individuals with in-demand tech skills through hands-on training in Web Development, UX/UI Design, Data Science, and more. Our expert-led courses, mentorship, and project-based learning bridge the gap between education and real-world application. Join us and be part of the future of technology!
            </span>
          </div>
        </div>
        </div>

        {/* Portfolio Section */}
        <div className="bg-gray-200 flex flex-col items-center " id='portfolio'>
        <div className="mt-20 flex flex-col">
          <span className="font-poppins text-[#663399] text-center" >PORTFOLIO</span>
          <span className="text-2xl font-semibold text-[#663399] mt-3 mb-7 " id='course'>Our Courses</span>
        </div>
        <Cards />
      </div>
      <div className='bg-gray-50 pt-20' id="service">
      <Services/>
      </div>
      <div className="flex justify-center justify-items-center p-4 mb-9 bg-gray-100 " id="about-us">
        <About/>
      </div>
      <div className=" p-7 bg-white ">
        <p className="mb-10 text-3xl font-semibold text-[#663399] text-center">Here's why you should work with us</p>
       <div className=" flex flex-col lg:flex-row gap-8">
         <img src={community} className="w-[550px]"/>
        <Reasons/>
       </div>
      </div>
      <div className="flex justify-center">
      <Founders/>
      </div>
    </div>
  );
}
