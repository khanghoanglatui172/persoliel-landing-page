import Image from "next/image";
import React from "react";
import Link from "next/link";
function Collaborate() {
  return (
    <div className="h-[176px] bg-amber-50 flex flex-row gap-10 px-10 items-center">
      <div className="w-[177px] h-[110px]">
        <Image
          src="/logo.svg"
          alt="like-icon"
          width={180}
          height={110}
          className="w-[177px] h-[110px]"
        />
      </div>
      <div>
        <h3 className="text-content text-[40px] font-light leading-[42.60px]">
          We collaborate with best-in-class.
        </h3>
      </div>
      <div className="w-[259.19px] h-[57px] border border-amber-800 cursor-pointer flex items-center justify-center">
        <Link
          href={"/advisors"}
          className="h-7 text-center text-amber-800 text-[16.96px] font-semibold"
        >
          BECOME A PARTNER --&gt;
        </Link>
      </div>
    </div>
  );
}

export default Collaborate;
