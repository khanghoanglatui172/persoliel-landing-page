'use client'
import React, {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import TopBanner from "@/app/components/top-banner";

const headers = [
    {
        name: "Who We Are",
        scrollTo: "#whoweare",
    },
    {
        name: "What We Do",
        scrollTo: "#whatwedo",
    },
    {
        name: "Where We Are",
        scrollTo: "#whereweare",
    },
    {
        name: "Our Partners",
        scrollTo: "#ourpartners",
    },
];

function NavBar() {
    const [scrollTop, setScrollTop] = useState(0);
    const [position, setPosition] = useState<string>('sticky')

    useEffect(() => {
        const handleScroll = (event: any) => {
            setScrollTop(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollTop > 112) {
            setPosition('fixed p-4 min-w-full justify-center transition-all duration-500')
        } else setPosition('sticky pe-20')
    }, [scrollTop])

    return (
        <div className='bg-app-bg h-[112px]'>
            <TopBanner/>
            <div className="nav-bar text-app-blue">
                <div className="h-16 m-auto flex items-center justify-between relative">
                    <div className="w-[149px] h-[139.69px] ps-20 relative">
                        <div
                            className="w-[inherit] h-[inherit] top-[27%] absolute"
                            style={{zIndex: 3}}
                        >
                            <Image src="/logos/logo.svg" alt="app-logo" width={149} height={140}/>
                        </div>
                    </div>
                    <div className={`bg-app-bg ${position} top-0 z-[100] flex items-center`}>
                        <div className="nav-bar-center">
                            <ul className="list-none flex items-center justify-end">
                                {headers.map((header, index) => {
                                    return (
                                        <li key={index} className="px-5">
                                            <Link
                                                href={header.scrollTo}
                                                scroll={true}
                                                className="text-right text-[1.0625rem] not-italic font-medium"
                                            >
                                                {header.name}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="nav-bar-right">
                            <div className="flex justify-between items-center text-app-amber">
                                <Link href={"#"} className="flex items-center">
              <span className="text-right text-[1.0625rem] not-italic font-medium me-3">
                Sign in
              </span>
                                    <Image
                                        src="/icons/icon-signin-arrow.svg"
                                        alt="arrow-signin"
                                        width={14}
                                        height={0}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
