import Image from "next/image";
import React from "react";

function Reserve() {
  return (
    <div className="h-[35.25rem] w-[1286px] relative">
      <Image
        src="/get-in-touch-image.jpg"
        alt="get-in-touch"
        width={1280}
        height={570}
        className="w-[100%] h-[100%]"
      />
      <div className="w-[47.7rem] h-[100%] absolute top-0 left-0 z-20">
        <Image
          src="/Rectangle10-image.png"
          alt="get-in-touch"
          width={1280}
          height={570}
          className="w-[100%] h-[100%]"
        />
      </div>
      <div className="absolute h-[25.625rem] w-[21.875rem] top-[7.875rem] left-[4.688rem] z-50 flex flex-col justify-start gap-6">
        <h3 className="text-white text-[52px] font-larken leading-[55.38px]">
          Discover the Perq Soleil difference.
        </h3>
        <div className="w-56 h-[73px] border border-amber-800 flex items-center justify-center">
          <button className="uppercase w-[210.95px] h-[61px] bg-bgButton">
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reserve;
