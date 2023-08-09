import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const dataCards = [
    {
        id: 1,
        title: 'Departure',
        icon: 'icon-departure.svg',
        content: ['Meet curbside with boarding pass', 'Secure porter for luggage assistance', 'Expedite check in', 'Fast track through security', 'Escort to lounge, fulfill special requests', 'Escort to gate for on-time boarding']
    },
    {
        id: 2,
        title: 'Connection',
        icon: 'icon-connection.svg',
        content: ['Meet at arrival gate', 'Escort to lounge', 'Fulfill special requests', 'Escort to gate for boarding']
    },
    {
        id: 3,
        title: 'Arrival',
        icon: 'icon-arrival.svg',
        content: ['Meet at arrival gate', 'Escort to baggage claim', 'Secure porter for luggage assistance', 'Coordinate with chauffeur', 'Escort to waiting car and driver', 'Assist with tracking delayed luggage']
    }
]


function Card({card}: any) {
    return (
        <div
            className='block min-h-[28.6rem] bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
            <div className={`w-[inherit] h-16 relative`}>
                <div className='w-[100%] h-[100%] absolute top-0 left-0 bg-slate-600 z-3'></div>
                <div
                    className={`bg-[url('/card-header-bg.svg')] bg-no-repeat bg-center bg-cover absolute w-[100%] h-[100%] top-0 left-0 z-[2]`}>
                </div>
                <div className='absolute left-[9rem] top-[2rem]'>
                    <Image src={`/${card.icon}`} alt='' width={90} height={90}/>
                </div>
            </div>
            <div className='mt-12'>
                <div className='px-5'>
                    <h4 className='text-center text-slate-600 text-3xl font-normal leading-loose'>{card.title}</h4>
                    <div>
                        <ul>
                            {
                                card.content.length && card.content.map((text: string, index: number) => {
                                    return (
                                        <li key={index} className='h-[2.5rem] overflow-hidden flex'>
                                            <div className='me-2'>
                                                <Image src='/icon-bullet.svg' alt='' width={15} height={15}/>
                                                {card.content.length - 1 !== index &&
                                                    <Image src='/line-1.svg' alt='' width={3} height={1}
                                                           className='w-[1rem] h-[10rem]'/>}
                                            </div>
                                            <p className='text-neutral-700 text-[1rem] font-normal leading-[0.9rem]'>{text}</p>
                                        </li>
                                    )
                                })
                            }


                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}


function WhatWeDo() {
    return (
        <div className={`mt-24 h-[800px] relative after:absolute after:bottom-[-5.5rem] after:right-0 after:z-[-1] after:w-[22rem] after:h-[25rem] after:bg-[url('/rotated-background-vector.svg')] after:bg-no-repeat after:bg-center after: after:content-['dddddd']`}>
            <div className='mb-20'>
                <h2 className='text-center text-slate-600 text-[1rem] text-base font-medium uppercase tracking-wide'>
                    what we do
                </h2>
                <h1 className='text-center text-slate-600 text-[50px] font-light leading-[53.25px] mb-[1rem]'>
                    Minimize stress, optimize experience
                </h1>
                <div className='text-center w-[57rem] mb-14 m-auto'>
                <span className='text-neutral-700 text-[21px] leading-[29.40px]'>
                     Indulge in the comfort of an effortless journey through the terminal, leaving the details to us. Our priority is to ensure you’re able to focus on what matters most to you.
                </span>
                </div>
                <div className='w-2/3 m-auto flex justify-center'>
                    <Link href='#' className='w-[302px] h-[73px] relative'>
                        <div className='w-[290.41px] h-[61px] left-[5.79px] top-[6px] absolute bg-amber-800'/>
                        <div className='w-[302px] h-[73px] left-0 top-0 absolute border border-amber-800'/>
                        <div
                            className='w-[290.41px] h-[26px] left-[5.79px] top-[21.45px] absolute text-center text-amber-50 text-[18.99px] font-bold uppercase'>BOOK
                            YOUR SERVICE
                        </div>
                    </Link>
                </div>
            </div>
            <div className='w-5/6 m-auto'>
                <div className='grid grid-cols-3 gap-8'>
                    {dataCards.map((card) => {
                        return (
                            <div key={card.id}>
                                <Card card={card}/>
                            </div>
                        )
                    } )}
                </div>
            </div>
        </div>
    );
}

export default WhatWeDo;