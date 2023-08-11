'use client'
import React, {useState} from 'react';
import Image from "next/image";

function Continents({continents, onContinentClick}: any) {
    const [chosen, setChosen] = useState<number>()

    const handleCLick = (index: any) => {
        setChosen(index)
        onContinentClick(continents[index].countries)
    }

    const renderContinents = (data: any) => {
        return data.map((e: any, index: any) => {
            const isLast = (data.length - 1 === index);
            const isActive = (chosen === index)
            return (
                    <li key={index} onClick={() => handleCLick(index)}>
                    <div className=' w-[20rem] h-fit flex'>
                        <div className='me-2'>
                            <Image src={`/${isActive ? 'icons/active-dot.svg' : 'icons/white-dot.svg'}`} alt=''
                                   width={15} height={15}/>
                            {!isLast &&
                                <Image src='/icons/line-2.svg' alt='' width={3} height={1}
                                       className='w-[1rem] h-[3.1rem]'/>}
                        </div>
                        <p className={`text-white ${isActive ? '' : 'text-opacity-50'} text-xl font-medium leading-[0.9rem]`}>{e.name}</p>
                    </div>
                </li>
            )
        })
    }

    return (
        <div>
            <ul>
                {
                    renderContinents(continents)
                }
            </ul>
        </div>
    );
}

export default Continents;