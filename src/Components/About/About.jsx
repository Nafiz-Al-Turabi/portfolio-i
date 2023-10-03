import React from 'react';
import { AiOutlineCloudDownload } from "react-icons/ai";
import './About.css'

const About = () => {
    return (
        <div className='about bg-[#202020] screen'>
            <div className='max-w-7xl mx-auto pt-32 md:pt-32 lg:pt-48'>
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 p-4'>
                    <div className='relative ml-20 md:ml-28 lg:ml-0  '>
                        <div className='animation-fade-left animation-fade-left-1 h-[220px] w-[220px] md:h-[450px] md:w-[450px] lg:h-[380px] lg:w-[380px] absolute -top-12 left-12 rounded-md  border-[5px] border-secondary '></div>
                        <img className="animation-fade-left animation-fade-left-2 h-60 md:h-[450px] lg:h-96 rounded-md absolute " src="https://i.ibb.co/nQqLwt2/img-1.jpg" alt="" />
                        <button className=' animation-fade-up dropShadow linear-gradient flex items-center px-5 py-2  text-white text-xl absolute -bottom-[240px] left-1.5 md:-bottom-[510px] md:left-36   lg:-bottom-[30px] lg:left-24  '><AiOutlineCloudDownload className=' mr-2' />Download resume</button>
                    </div>
                    <div className='mt-[246px] md:mt-[500px] lg:mt-0'>
                        <h1 className='animation-fade-right-1 animation-fade-right gradient-text text-3xl lg:text-5xl font-bold uppercase  mb-3'>ABOUT ME</h1>
                        <p className='animation-fade-right-2 animation-fade-right text-gray-400 text-lg mb-6'>Hello! I’m Oliver Queen. Web Developer with over 8 years of experience. Experienced with all stages of the development cycle for dynamic web projects. Having an in-depth knowledge including advanced HTML5, CSS3, JavaScript, jQuery, Angular JS. Strong background in management and leadership.</p>
                        <p className='animation-fade-right-3 animation-fade-right text-lg md:text-2xl lg:text-2xl font-bold  mb-0 lg:mb-2 gradient-text'>NAME:
                            <span className='text-gray-300 ml-2 font-normal'>Nafiz Al Turabi</span>
                        </p>
                        <p className='animation-fade-right-4 animation-fade-right text-lg md:text-2xl lg:text-2xl font-bold  mb-0 lg:mb-2 gradient-text'>DATE OF BIRTH:
                            <span className='text-gray-300 ml-2 font-normal'>2 March 1999</span>
                        </p>
                        <p className='animation-fade-right-5 animation-fade-right text-lg md:text-2xl lg:text-2xl font-bold  mb-0 lg:mb-2 gradient-text'>NATIONALITY:
                            <span className='text-gray-300 ml-2 font-normal'>Bangladesh</span>
                        </p>
                        <p className='animation-fade-right-6 animation-fade-right text-lg md:text-2xl lg:text-2xl font-bold  mb-0 lg:mb-2 gradient-text'>PHONE:
                            <span className='text-gray-300 ml-2 font-normal'>+(880) 1747206719, +(880) 1755659843</span>
                        </p>
                        <p className='animation-fade-right-7 animation-fade-right text-lg md:text-2xl lg:text-2xl font-bold  mb-0 lg:mb-2 gradient-text'>E-MAIL:
                            <span className='text-gray-300 ml-2 font-normal'>nafizalturabi@gmail.com</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;