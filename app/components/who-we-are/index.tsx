import React from 'react';
import Image from "next/image";

function WhoWeAre() {
    return (
        <div id='whoweare' className={`bg-[url('/backgrounds/image-yourtrustedpartner_tom-barrett-M0AWNxnLaMw-unsplash.jpg')] bg-no-repeat bg-who-we-are-percentage bg-cover w-[100%] h-[46rem] relative`}>
            <div className='absolute w-[100%] h-[100%] top-0 right-0 z-[1] bg-gradient-to-l from-layer from-10% to-50%'></div>
            <div className='absolute w-fit h-[100%] top-0 right-0 z-[2]'>
                <Image src='/logos/logo-text-vertical.svg' alt='logo-text-vertical' width='100' height='100' className='w-[100%] h-[100%] text-right'/>
            </div>
            <div className='absolute w-5/6 h-[100%] m-auto top-[45%] left-20 z-[3] text-whiteBg'>
                <div className='w-[33rem]'>
                    <h2 className='text-[1rem] mb-3 text-base font-medium uppercase tracking-wide'>
                        who we are
                    </h2>
                    <h1 className='text-[3.6rem] mb-3 font-larken leading-[4.4rem]'>
                        Your trusted partner in seamless travel
                    </h1>
                    <p className='w-[27.7rem] text-[1.3rem] leading-[1.8rem]'>
                        Perq Soleil is a premier travel concierge company, specializing in expedited airport Meet & Assist services.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default WhoWeAre;