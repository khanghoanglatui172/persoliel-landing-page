import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

const headers = [
  {
    name: "Who We Are",
    scrollTo: "#",
  },
  {
    name: "Who We Are",
    scrollTo: "#",
  },
  {
    name: "Who We Are",
    scrollTo: "#",
  },
  {
    name: "Who We Are",
    scrollTo: "#",
  },
];
function NavBar() {
  return (
    <div className="nav-bar">
      <div className="w-5/6 h-16 m-auto flex items-center relative">
        <div className="w-[149px] h-[139.69px] relative flex-grow-0">
          <div
            className="w-[inherit] h-[inherit] top-[27%] absolute"
            style={{ zIndex: 3 }}
          >
            <Image src="/logo.svg" alt="app-logo" width={149} height={140} />
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
                    className="text-right text-[1.0625rem]  not-italic font-medium text-slate-600"
                  >
                    {header.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="nav-bar-right flex-grow-0">
          <div className="flex justify-between items-center">
            <Link href={""} className="text-amber-800 flex items-center">
              <span className="text-right text-[1.0625rem] not-italic font-medium me-3">
                Sign in
              </span>
              <Image
                src="/icon-signin-arrow.svg"
                alt="arrow-signin"
                width={14}
                height={0}
                className="pt-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
