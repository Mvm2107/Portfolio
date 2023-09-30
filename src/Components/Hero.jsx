import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
             <p className='text-pink-600'>Hi my name is</p>
             <h2 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Manivannan</h2>
             <h2 className='text-4xl sm:text-5xl font-bold text-[#8892b0]'>I'm a Data Scientist.</h2>
             <p className='text-[#8892b0] py-4 max-w-[700px]'> I am an aspiring Data Scientist with a strong passion for diving into the world of data analytics and predictive modeling. My journey into the field of data science is driven by an insatiable curiosity and a desire to explore the vast opportunities that data offers for making informed decisions and solving complex problems.</p>
          <div>
          <Link to="work"  smooth={true}  duration={1000} >
            <button className='text-white group border-2 py-3 px-6 my-2 flex items-center hover:border-pink-600  hover:bg-pink-600'>View Work
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3' />
            </span>  
            </button>
            </Link>
          </div>
        </div>
       
        
    </div>
  )
}

export default Hero