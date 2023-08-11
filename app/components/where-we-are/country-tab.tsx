import React, {useState} from 'react';
import Link from "next/link";

function CountryTab({countries}: any) {
    const [airports, setAirports] = useState<[]>([])

    return (
        <>
            {<div className='absolute top-[-7rem] left-[12rem] min-h-[40rerm]'>
                <div className="w-[50rem] h-[40rem] relative bg-white px-3">
                    <div className='absolute h-1 w-[100%] top-0 left-0 bg-amber-200'></div>
                    <div className="w-[282.44px] h-[454.93px] left-[33.05px] top-[34.91px] absolute">
                        <div
                            className="w-[100%] h-[16.93px] left-0 top-0 absolute text-base font-medium uppercase leading-none">
                            Where we are
                        </div>
                        <div
                            className="w-[433px] h-[17px] left-0 top-[3rem] absolute text-app-dark text-base font-medium leading-none">
                            Discover which airports we serve:
                        </div>
                        {
                            !!countries.length && <select
                                onChange={(event) => {
                                    setAirports(countries[event.target.value].airports)
                                }}
                                className='w-[30rem] left-[0] top-[5rem] bg-bgInput absolute border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"'>
                                {countries.map((country: any, index: any) => <option key={index}
                                                                                     value={index}>{country.name}</option>)}
                            </select>
                        }

                        <div className='absolute top-[10rem] left-0'>
                            <ul>
                                {!!airports.length && airports.map((text: any, index: any) => (
                                    <li className='py-2' key={index}>
                                        {text}
                                    </li>))}
                            </ul>
                        </div>
                    </div>
                    <div className="w-[100%] h-fit absolute bottom-0 left-0 bg-amber-50 px-5 py-5">
                        <div className='flex items-center justify-between'>
                            <div className="text-[1rem] leading-[29.40px]">Ready? Get started today and
                                let us assist you on your journey
                            </div>
                            <Link href='#'
                                  className='w-[162px] h-[73px] relative bg-app-amber p-4 text-center text-white text-base font-medium tracking-wide uppercase leading-[43px]'>
                                rerserve
                            </Link>
                        </div>

                    </div>
                </div>
            </div>}
        </>
    );
}

export default CountryTab;