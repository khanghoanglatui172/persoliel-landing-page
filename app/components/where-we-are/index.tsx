"use client"
import React from 'react';
import Image from 'next/image';
import {ComposableMap, Geographies, Geography} from 'react-simple-maps'
import Country from "@/app/components/where-we-are/country";

const countries = [
    'Africa', 'Asia', 'Australia/ Oceania', 'Europe', 'North America', 'South America'
]

function WhereWeAre() {
    return (
        <div id='whereweare' className={`pt-24 pt-24 h-[1000px]`}
             style={{background: 'linear-gradient(180deg, #385D7D 35%, #1A4163 100%)'}}>
            <div>
                <h2 className='text-center text-orange-100 text-[1rem] text-base font-medium uppercase tracking-wide mb-[1rem]'>
                    Where we are
                </h2>
                <div className='font-larken'>
                    <h1 className='text-center text-orange-100 text-[50px] font-light leading-[53.25px] mb-[1rem]'>
                        300+ airports, 150 countries
                    </h1>
                    <span className='text-center block text-orange-100 text-[21px] leading-[29.40px] mb-[1rem]'>
                                A network of airports, rail stations, private aviation terminals with
                        </span>
                    <div className='text-center text-orange-100 text-[50px] font-light leading-[53.25px]'>
                        1 mission, 0 friction
                    </div>
                </div>
            </div>
            <div className='w-5/6 m-auto'>
                <div className='flex items-center justify-between'>
                    <div className='relative'>
                        <ul>
                            {
                                countries.length && countries.map((text: string, index: number) => (
                                    <li key={index} className='h-[4rem] overflow-hidden flex'>
                                        <Country name={text} isLast={countries.length - 1 === index}/>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className='absolute top-[-2.5rem] left-[15rem] z-[3]'>
                            <div className="w-[327.51px] h-[511px] relative bg-white px-3">
                                <div className='absolute h-1 w-[100%] top-0 left-0 bg-amber-200'></div>
                                <div className="w-[282.44px] h-[454.93px] left-[33.05px] top-[34.91px] absolute">
                                    <div
                                        className="w-[121.19px] h-[16.93px] left-0 top-0 absolute text-neutral-700 text-base font-medium uppercase leading-none">Choose
                                        one:
                                    </div>
                                    <div
                                        className="w-[129.20px] h-[414.72px] left-0 top-[40.20px] absolute text-app-blue text-[15px] font-medium leading-[15px]">Albania<br/><br/>Belgium<br/><br/>Bulgaria<br/><br/>Croatia<br/><br/>Czech
                                        Republic<br/><br/>Denmark<br/><br/>Estonia<br/><br/>France<br/><br/>Germany<br/><br/>Greece<br/><br/>Hungary<br/><br/>Iceland<br/><br/>Italy<br/><br/>Latvia
                                    </div>
                                    <div
                                        className="w-[142.22px] h-[412.61px] left-[140.22px] top-[40.20px] absolute text-slate-600 text-[15px] font-medium leading-[15px]">Lithuania<br/><br/>Luxembourg<br/><br/>Montenegro<br/><br/>Netherlands<br/><br/>North
                                        Madedonia<br/><br/>Norway<br/><br/>Portugal<br/><br/>Romania<br/><br/>Slovakia<br/><br/>Slovenia<br/><br/>Spain<br/><br/>Turkey<br/><br/>United
                                        Kingdom<br/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[800px]'>
                        <ComposableMap>
                            <Geographies geography='/topojson-file.json'>
                                {({geographies}) =>
                                    geographies.map((geo) => {
                                        return (
                                            <Geography key={geo.rsmKey} geography={geo}
                                                       fill="#b4c0ca"
                                                       stroke="#94a3b8" style={{pressed: {outline: "none"},}}/>
                                        )
                                    })
                                }
                            </Geographies>
                        </ComposableMap>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default WhereWeAre;