import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-white'> {/* naming home is for react smooth scroll */}
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-black'r> Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-red-700'>Ryan Da</h1>
            <h2 className='text-3xl sm:text-7xl font-bold text-red-900'>I'm currently studying Computer Science at Stanford University</h2> {/* eventually change so that it types out different sentences(go youtube) */}
            <p className='text-red-900 py-4 max-w-[700px]'>I'm a First-Gen Cambodian American currently focused on developing my skills as a programmer and figuring out ways on how to
                give back to my community! </p>
            <div>
              <Link to="work" smooth={true} duration={500}>
                <button className='text-black group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-700 hover:text-white hover:border-red-700'>View Work
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

export default Home