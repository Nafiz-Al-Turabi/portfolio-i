import React from 'react';
import './ContactMe.css'

const ContactMe = () => {
    return (
        <div className='pt-20'>
            <div className='max-w-7xl mx-auto px-4'>
                <h1 className='text-center text-4xl md:text-5xl lg:text-6xl font-bold primary-text mb-10 md:mb-20 lg:mb-10'>Contact</h1>
                <form className=' rounded-lg lg:w-[50%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 p-4 md:py-6 lg:py-8 '>
                    <div>
                        <label className='block text-gray-600 text-xl' htmlFor="">Email</label>
                        <input className='w-full text-xl text-gray-700  p-4 bg-transparent border-b-2 border-gray-600 placeholder:text-gray-200 placeholder:text-xl focus:outline-none' type="email" name="email" id="" placeholder='Enter your email' />
                    </div>
                    <div>
                        <label className='block text-gray-600 text-xl' htmlFor="">Name</label>
                        <input className='w-full text-xl text-gray-700  p-4 bg-transparent border-b-2 border-gray-600 placeholder:text-gray-200 placeholder:text-xl focus:outline-none' type="name" name="name" id="" placeholder='Enter your name' />
                    </div>
                    <div className='md:col-span-2 lg:col-span-2'>
                        <label className='block text-gray-600 text-xl' htmlFor="">Message</label>
                        <textarea className='w-full text-xl text-gray-700  p-4 bg-transparent border-b-2 border-gray-600 placeholder:text-gray-200 placeholder:text-xl focus:outline-none ' type="text" name="message" id="" placeholder='Your Message...' />
                    </div>
                    <button className='button w-32' type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;