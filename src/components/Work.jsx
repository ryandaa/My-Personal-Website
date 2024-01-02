import React from 'react'
import QuickWatch from '../assets/quickwatch4.png'
import TextHalfBold from '../assets/texthalfbold.png'
import QuickWatch3 from '../assets/quickwatch3.png'

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-red-900 bg-white'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-red-900 border-red-500'>Work</p>
                    <p className='py-6'>// Here is some of the work that I've done!</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* card item */}
                    <div style={{ 
                        backgroundImage: `url(${QuickWatch})`, 
                        backgroundSize: 'cover',
                        backgroundPosition: 'left center',
                        backgroundRepeat: 'no-repeat'
                    }}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-black tracking-wider'> {/* where we can change our text title */}
                                YouTube Summary App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://www.quickwatch.info/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/ryandaa/Quickwatch">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ 
                        backgroundImage: `url(${TextHalfBold})`, 
                        backgroundSize: 'cover',
                        backgroundPosition: 'left center',
                        backgroundRepeat: 'no-repeat'
                    }}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-black tracking-wider'> {/* where we can change our text title */}
                                Chrome Extension App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://github.com/ryandaa/TextHalfBold">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Try it for yourself!
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Work