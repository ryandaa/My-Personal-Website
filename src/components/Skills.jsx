import React from 'react'
import REACT from '../assets/react.png';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import Python from '../assets/python.png';
import ReactImg from '../assets/react.png';
import Angular from '../assets/angular.png';
import Vercel from '../assets/vercel.png';

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-white text-red-900'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-red-500'>Skills</p>
                    <p className='py-4'>// These are some tools/languages that I've had previous experience with!</p>
                </div>
                <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-4 text-center py-8'> {/* container for all the icons */}
                    <div className='shadow-md hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                        <p className='py-4'>HTML</p>
                    </div>
                    <div className='shadow-md hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                        <p className='py-4'>CSS</p>
                    </div>
                    <div className='shadow-md hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                        <p className='py-4'>JavaScript</p>
                    </div>
                    <div className='shadow-md hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Python} alt="HTML icon" />
                        <p className='py-4'>Python</p>
                    </div>
                    <div className='shadow-md hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={REACT} alt="HTML icon" />
                        <p className='py-4'>React</p>
                    </div>
                    <div className='shadow-md hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Angular} alt="HTML icon" />
                        <p className='py-4'>Angular</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills