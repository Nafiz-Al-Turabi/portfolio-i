import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner h-screen md:h-screen lg:h-screen">
            <div className='max-w-7xl mx-auto'>
                <div className='relative pt-72 md:pl-5 lg:pt-72 text-white text-center md:text-left lg:text-left z-10 '>
                    <h1 className='header-1 animate-pop-in text-7xl md:text-9xl lg:text-9xl mb-5 font-thin'>Hello!</h1>
                    <h1 className='header-2 animate-pop-in text-5xl md:text-7xl lg:text-8xl mb-3'>I'm Nafiz Al Turabi</h1>
                    <p className='header-3 animate-pop-in text-xl md:text-2xl lg:text-3xl'>Junior Full Stake Web Developer</p>
                    <div>
                        <img className='hidden md:hidden lg:block h-80 absolute top-56 left-56 -rotate-12  opacity-40 -z-10'  src="https://i.ibb.co/vjHLWBj/3BBS.gif" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
