import Image from "next/image";
import React from "react";
import Bullets from "./bullest";

function Information() {
  return (
    <div className="flex items-center justify-center relative flex-grow w-[50%]">
      <div className="w-[150px] h-[140px] absolute top-0 left-10">
        <Image
          src="/logo.svg"
          alt="card-image"
          height={500}
          width={100}
          className="w-[150px] h-[140px]"
        />
      </div>
      <div>
        <h3 className="text-content text-[57px] font-light leading-[62.70px]">
          Elevate your clients’ airport journeys.
        </h3>
        <p className="h-36 text-neutral-700 text-[26.50px] leading-[37.09px]">
          Deliver unparalleled airport concierge services to your most valued
          clients.
        </p>
        <div className="flex flex-row gap-4 ">
          <div className="w-[17.19px] h-[132px]">
            <Bullets />
          </div>
          <div>
            <p>
              Make us your preferred Meet & Assist vendor Our competitive
              <br /> <br />
              commission rates start at 10% We serve VIPs, celebrities,
              <br /> <br />
              executives, dignitaries, seniors, UM, and families
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
{
  /* <div className="w-[17.19px] h-[132px]">
            <Image
              src="/bullets.svg"
              alt="card-image"
              height={500}
              width={100}
              className="w-[17.19px] h-[132px]"
            />
          </div> */
}
