import Image from "next/image";
import React from "react";
import Link from "next/link";

function Collaborate() {
  return (
    <div className="h-[176px] bg-amber-50 flex flex-row items-center justify-center gap-10 px-16 w-[100%] max-w-screen-xl">
      <div className="flex flex-row items-center justify-between px-6 w-[1286px]">
        <div className="w-[177px] h-[110px]">
          <Image
            src="/icons/icon-signin-arrow.svg"
            alt="arrow-signin"
            width={14}
            height={0}
            className="ms-3 pt-0.3"
          />
        </div>
        <div>
          <h3 className="text-content text-[40px] font-larken leading-[42.60px]">
            We collaborate with best-in-class.
          </h3>
        </div>
        <div className="w-[259.19px] h-[57px] border border-amber-800 cursor-pointer flex items-center justify-center">
          <Link
            href={"/advisors"}
            className="h-7 text-center text-amber-800 text-[16.96px] font-semibold flex items-center"
          >
            <span>BECOME A PARTNER</span>
            <Image
              src="/icon-signin-arrow.svg"
              alt="arrow-signin"
              width={14}
              height={0}
              className="ms-3 pt-0.3"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Collaborate;
