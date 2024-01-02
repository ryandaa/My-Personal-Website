import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-950 text-gray-300'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width: '50px'}} />
        </div>

        {/* MENU */}
            <ul className='hidden md:flex'> {/* how to control when the hidden is activated */}
                <li>Home</li>
                <li>About</li>
                <li>Experience</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />} {/* use tertiary operators for open stuff */}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate-950 flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Experience</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>   

        {/* Social Icons */}
        <div className='hidden lg:flex fixed flex-column top-[35%] left-0'>
            <ul>  {/* change font later */}
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'> {/* pop out for social icons */}
                    <a className='flex justify-between items-center w-full text-gray-100'
                    href="https://www.linkedin.com/in/ryan-da/">
                        LinkedIn <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'> {/* pop out for social icons */}
                    <a className='flex justify-between items-center w-full text-gray-100'
                    href="https://github.com/ryandaa">
                        GitHub <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'> {/* pop out for social icons */}
                    <a className='flex justify-between items-center w-full text-gray-100'
                    href="/">
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'> {/* pop out for social icons */}
                    <a className='flex justify-between items-center w-full text-gray-100'
                    href="https://drive.google.com/file/d/13UqHUG5qyl22RYI7yvJnl4vMXssYQSNA/view?usp=sharing">
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>

        </div>
        
    </div>
  )
}

export default Navbar