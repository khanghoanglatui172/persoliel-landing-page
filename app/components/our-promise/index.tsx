import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function OurPromise() {
    return (
        <div className={`bg-[url('/background-vector.svg')] mt-24 bg-center bg-no-repeat`}>
            <div>
                <h2 className='text-center text-slate-600 text-[1rem] text-base font-medium uppercase tracking-wide'>
                    our promise
                </h2>
                <h1 className='text-center text-slate-600 text-[50px] font-light leading-[53.25px] mb-[1rem]'>
                    Simplified travel, extraordinary service
                </h1>
                <div className='text-center w-[57rem] m-auto'>
                <span className='text-neutral-700 text-[21px] leading-[29.40px]'>
                    Picture your own airport concierge: A personal assistant to meet your needs, ensuring that every step of your departure, connection, or arrival is swift and smooth&nbsp;
                </span>
                    <Link href='#' className='text-amber-800 text-[21px] font-medium underline leading-[29.40px]'>
                        this is a text link
                    </Link>
                    <span className='text-neutral-700 text-[21px] leading-[29.40px]'>.</span>
                </div>
            </div>
            <div className='m-auto w-4/5'>
                <div className='mt-16 text-center text-amber-800 text-xl font-medium flex items-center justify-center'>
                    <span>
                        Watch the video
                    </span>
                    <Image src='/icon-play.svg' alt='icon-play' width={17} height={17} className='ms-2 pt-0.5'/>
                </div>
                <div className='relative mt-16'>
                    <div className='w-[100%] h-[100%] absolute top-0 left-0 bg-neutral-900 opacity-[0.6] z-1'></div>
                    <div className='w-[120px] h-[120px] absolute top-[40%] left-[50%] translate-x-[-50%] 0 z-2'>
                        <Image src='/play-video-button.png' alt='play-video-button' width={120} height={120}/>
                    </div>
                    <Image src='/our-promise-thumbnail.png' alt='our-promise-thumnail' width={1200} height={500} className='w-[100%]'/>
                </div>
            </div>
        </div>
    );
}

export default OurPromise;