'use client'
import Image from "next/image";
import React, {useState} from "react";

function Country({name, isLast, onClick}: any) {
    const [chosen, setChosen] = useState<boolean>(false)



    return (
        <>
            <div className='me-2'>
                <Image src={`/${name === 'Europe' ? 'icons/active-dot.svg' : 'icons/white-dot.svg'}`} alt=''
                       width={15} height={15}/>
                {!isLast &&
                    <Image src='/icons/line-2.svg' alt='' width={3} height={1}
                           className='w-[1rem] h-[10rem]'/>}
            </div>
            <p className={`text-white ${name === 'Europe' ? '' : 'text-opacity-50'} text-xl font-medium leading-[0.9rem]`}>{name}</p>
        </>
    );
}

export default Country;