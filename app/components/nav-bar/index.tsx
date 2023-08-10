import React from "react";
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
  return (
    <div className='sticky top-0 z-[100] w-full bg-app-bg'>
      <TopBanner/>
      <div className="nav-bar text-app-blue">
        <div className="w-5/6 h-16 m-auto flex items-center relative">
          <div className="w-[149px] h-[139.69px] relative flex-grow-0">
            <div
                className="w-[inherit] h-[inherit] top-[27%] absolute"
                style={{ zIndex: 3 }}
            >
              <Image src="/logos/logo.svg" alt="app-logo" width={149} height={140} />
            </div>
          </div>
          <div className="nav-bar-center flex-grow">
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
          <div className="nav-bar-right flex-grow-0">
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
  );
}

export default NavBar;
