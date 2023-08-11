import Image from "next/image";
import Link from "next/link";
import React from "react";

function Reserve() {
  return (
    <div
      className={`h-[35.25rem] w-[1286px] relative bg-[url('/backgrounds/image-womanseatedcoffee.jpg')] bg-center bg-no-repeat bg-cover`}
    >
      <div className="w-[100%] h-[100%] absolute top-0 left-0 bg-gradient-to-r from-layer-blue from-25% to-50% z-[1]"></div>
      <div className="absolute h-[25.625rem] w-[21.875rem] top-[7.875rem] left-[4.688rem] z-[2] flex flex-col justify-start gap-6">
        <h3 className="text-white text-[52px] font-larken leading-[55.38px]">
          Discover the Perq Soleil difference.
        </h3>
        <div className="w-56 h-[73px] border border-app-amber flex items-center justify-center">
          <Link href="/booking/index.html">
            <button className="uppercase w-[210.95px] h-[61px] bg-app-amber text-white font-bold">
              Reserve Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Reserve;
