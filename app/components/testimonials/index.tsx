'use client'
import React, {useState} from 'react';
import Image from "next/image";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Link from "next/link";

const quotes = [
    {
        id: 1,
        content: 'Debi handled the whole situation in Dulles like the true professional that she is!',
        author: {
            name: 'Keith B',
            role: 'Client'
        },
    },
    {
        id: 2,
        content: 'They are empathetic to every traveller’s needs and sensitive to their particular requirements. There is no ‘one size fits all.',
        author: {
            name: 'Steve S',
            role: 'Head of Platinum Suite'
        },
    },
    {
        id: 3,
        content: 'Their professionalism and reliability is second to none. We don’t use anyone else.',
        author: {
            name: 'Sarah C',
            role: 'Personal Assistant'
        },
    },
    {
        id: 4,
        content: 'Their professionalism and reliability is second to none. We don’t use anyone else.',
        author: {
            name: 'Sarah C',
            role: 'Personal Assistant'
        },
    },
]


function QuoteItem({quote}: any) {
    return (
        <div id='quote-item' className='bg-white text-neutral-700 w-[22rem] min-h-[20rem] shadow p-5'>
            <div className='min-h-[13rem]'>
                <p className='text-[1.2rem] leading-[31.05px]'>
                    “{quote.content}”
                </p>
            </div>
            <div className='flex justify-between'>
                <div>
                    <p className='text-lg font-normal leading-[19.17px]'>{quote.author.name}</p>
                    <span className='text-[15px] font-normal leading-none'>{quote.author.role}</span>
                </div>
                <div className='pt-4'>
                    <Image src='/quotes.png' alt='quote' width={50} height={50}/>
                </div>
            </div>
        </div>
    )
}

function Testimonials() {
    const settings = {
        centerMode: true,
        className: "center",
        centerPadding:3,
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoPlay: true,
        autoplaySpeed:2000,
        speed: 500,
    };

    return (
        <div
            className={`bg-[url('/background-contourmap3.svg')] pt-24 bg-no-repeat bg-cover bg-testimonials-percentage w-[100%] h-[85rem]`}>
            <div>
                <h2 className='mb-11 text-center text-slate-600 text-[1rem] text-base font-medium uppercase tracking-wide'>
                    testimonials
                </h2>
                <h1 className='text-center text-slate-600 text-[50px] font-light leading-[53.25px] mb-[1rem]'>
                    From travelers like you:
                </h1>
            </div>
            <div className='mt-16 m-auto w-4/5 h-[28rem] relative'>
                <div className='w-[100%] h-[100%] absolute top-[0%]'>
                    <Slider {...settings}>
                        {
                            quotes.map((e, index) => {
                                return (
                                    <QuoteItem key={e.id} quote={e}/>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
            <div className={`bg-[url('/woman-in-lounge.jpg')] bg-discover-perq-soleil bg-cover w-[100%] h-[35rem] relative`}>
                <div className='absolute w-[100%] h-[100%] top-0 right-0 z-[1] bg-gradient-to-r from-layer-blue from-25% to-50%'></div>
                <div className='absolute w-[20rem] h-[100%] top-[5rem] left-[8%] z-[2] text-amber-50'>
                    <h1 className='text-[3.6rem] mb-12 font-light leading-[4.4rem]'>
                        Discover the Perq Soleil difference.
                    </h1>
                    <Link href='#' className="w-56 h-[73px] relative">
                        <div className="w-[210.95px] h-[61px] left-[6.52px] top-[6px] absolute bg-amber-800" />
                        <div className="w-56 h-[73px] left-0 top-0 absolute border border-amber-800" />
                        <div className="w-[210.95px] h-[26px] left-[6.52px] top-[20.45px] absolute text-center text-amber-50 text-[19px] font-medium uppercase">reserve now</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;