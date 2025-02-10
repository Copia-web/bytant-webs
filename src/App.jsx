import { useState,useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import { MdContactSupport } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { IoCloseCircle } from "react-icons/io5";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";





function App() {
  const [showContact,setShowContact] = useState(false)
  const [isVisible,setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return(
    <div className='relative '>
   
      <div className="">
      <Outlet/>
      </div>
      <div className=''>
        {
          showContact && (<div>
            <Contact/>
          </div>)
        }
      </div>
     {
      showContact ? (<IoCloseCircle className='text-6xl text-[#663399] fixed bottom-7 right-5 z-40  cursor-pointer' onClick={()=>setShowContact(!showContact)}/>): ( <div>
        <MdContactSupport className='text-6xl text-[#663399] fixed bottom-7 right-5 z-40 animate-bounce cursor-pointer' onClick={()=>setShowContact(!showContact)}/>
      </div>)
     }
     <div className='border-t-2 border-[#663399] p-5'>
     <Footer/>
     </div>
     {
      isVisible && (<FaArrowCircleUp onClick={()=>scrollToTop()} className='text-5xl text-[#663399] fixed bottom-32 right-9 cursor-pointer'/>)
     }
    </div>
  )
}
 

export default App


 const Contact = ()=>{

  return(
    <div className='fixed right-3 bottom-28 bg-[#CEA2FD] shadow-2xl h-80 rounded-md p-4'>
      
      <p className='mb-16 text-md pt-5 font-poppins font-semibold text-gray-800'>click on any of them to connect with us </p>
      <div className='  w-80 flex gap-8 justify-center'>
        <a href='https://wa.me/message/UJQH3BXTQDMLC1'target='_blank'><IoLogoWhatsapp  className='shadow-sm text-4xl text-green-700'/></a>
        <a href='https://www.linkedin.com/in/bytant-innovative-group' target='_blank'>
        <FaLinkedin className='shadow-sm text-4xl text-blue-950'/>
        </a>
      <a href='https://www.instagram.com/bytants?igsh=MWFkMjd4MmZhaHpxeA%3D%3D&utm_source=qr' target='_blank'>  <FaInstagramSquare className='shadow-sm text-4xl text-text-blue-950'/></a>
      <a href='mailto:bytantinnovativegroup@gmail.com' target='_blank'><MdEmail  className='shadow-sm text-4xl text-blue-950'/></a>
    </div>
    </div>
  )
 }
 