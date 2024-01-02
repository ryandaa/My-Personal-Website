import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-white flex justify-center items-center p-4'>
            <form action="" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-red-500 text-red-900'>Contact</p>
                    <p className='text-red-900 py-4'>// Contact me here below via email! - rda1@stanford.edu</p>
                </div>
                <input className='bg-gray-200 p-2 border-2 border-slate-400' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-gray-200 border-2 border-slate-400' type="email" placeholder='Email' name='email' />
                <textarea className='bg-gray-200 p-2 border-2 border-slate-400'name="message" rows="10" placeholder='Message'></textarea>
                <button className='text-red-900 border-2 hover:bg-red-700 hover:text-white px-4 py-3 my-8 mx-auto flex items-center'>Let's Talk</button>
            </form>
    </div>
  )
}

export default Contact