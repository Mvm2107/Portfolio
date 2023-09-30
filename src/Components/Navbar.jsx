import React,{ useState } from 'react'
import {FaBars, 
        FaTimes,
        FaGithub,
        FaLinkedin,
        FaFacebook, } from "react-icons/fa"
import { SiTableau } from 'react-icons/si';
import { BsFillPersonLinesFill } from 'react-icons/bs';        
import Logo from "../assests/logo1.png"
import Logo2 from "../assests/logo2.png"
import Logo3 from "../assests/logo3.png"
import {Link} from "react-scroll"

const Navbar = () => {
     
    const [nav,setNav] = useState(false)
    const handleClick = ()=>setNav(!nav)


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center bg-[#0a192f] text-gray-300'>
      <div className='py-8'>
        <img className='mt-10 ml-[-25px]' src={Logo3} alt='logo image' style={{width:"180px"}} />
      </div>
      <div>
        <ul className='hidden md:flex'>
        <li>
            <Link to="home"  smooth={true}  duration={500} >
          Home
        </Link>
        </li>
        <li>
            <Link to="about"  smooth={true}  duration={500} >
          About
        </Link>
        </li>
        <li>
            <Link to="skills"  smooth={true}  duration={500} >
          Skills
        </Link>
        </li>
        <li>
            <Link to="work"  smooth={true}  duration={500} >
          Work
        </Link>
        </li>
        <li>
            <Link to="contact"  smooth={true}  duration={500} >
          Contact
        </Link>
        </li>
        </ul>
      </div>

      <div onClick={handleClick} className='md:hidden z-10 px-3'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul className={!nav ? "hidden ": "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center" }>
            <li className='py-6 text=4xl'><Link onClick={handleClick} to="home"  smooth={true}  duration={500} >
          Home
        </Link></li>
            <li className='py-6 text=4xl'> <Link onClick={handleClick} to="about"  smooth={true}  duration={500} >
          About
        </Link></li>
            <li className='py-6 text=4xl'><Link onClick={handleClick} to="skills"  smooth={true}  duration={500} >
          Skills
        </Link></li>
            <li className='py-6 text=4xl'><Link onClick={handleClick}  to="work"  smooth={true}  duration={500} >
          Work
        </Link></li>
            <li className='py-6 text=4xl'><Link onClick={handleClick} to="contact"  smooth={true}  duration={500} >
          Contact
        </Link></li>
        </ul>

        <div className='hidden lg:flex fixed  flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a className='flex justify-between items-center w-full text-gray-300 ' href="https://www.linkedin.com/in/manivannan-m-011106239/">
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>

            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
              <a className='flex justify-between items-center w-full text-gray-300 ' href="https://github.com/Mvm2107">
                Github <FaGithub size={30} />
              </a>
            </li>

            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#4b4e1c]'>
              <a className='flex justify-between items-center w-full text-gray-300 ' href="https://public.tableau.com/app/profile/manivannan.m2382/vizzes">
                Tableau Dashboard <SiTableau size={30} />
              </a>
            </li>

            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
              <a className='flex justify-between items-center w-full text-gray-300 ' href="https://drive.google.com/file/d/1N6ugdyytKxyPhKu4AzzNMkjLoF5JmZMm/view?usp=sharing">
                Resume <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>

        </div>
    </div>
  )
}

export default Navbar