import React from 'react';
import Link from 'next/link';

function Banner() {
    return (
        <div className='app-banner'>
            <video autoPlay muted loop className='object-cover w-[100%] h-[100%] z-[-1]'>
                <source src='/banner.mp4' type='video/mp4'/>
            </video>
            <div className='banner-layer'></div>
            <div className='w-5/6 absolute top-[35%] left-[8%] z-[2]'>
                <div className='banner-title text-slate-600 text-[3.6rem] font-larken not-italic !font-thin leading-[3.9rem] mb-10'>Enjoy a friction-free<br/>journey between<br/>car and cabin seat. </div>
                <Link href='#' className='w-[162px] h-[73px] relative'>
                    <div className='w-[148.80px] h-[61px] left-[6.23px] top-[6px] absolute bg-amber-800' />
                    <div className='w-[162px] h-[73px] left-0 top-0 absolute border border-amber-800 border-opacity-80' />
                    <div className='w-[148.80px] h-[26px] left-[4.57px] top-[21px] absolute text-center text-amber-50 text-[18.99px] font-bold uppercase'>reserve</div>
                </Link>
            </div>
        </div>
    );
}

export default Banner;