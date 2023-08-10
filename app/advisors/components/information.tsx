import Image from "next/image";
import React from "react";
import Bullets from "./bullest";

function Information() {
  return (
    <div className="flex justify-center relative flex-grow w-[50%] pl-[4.688rem]">
      <div className="w-[150px] h-[140px] absolute top-0 left-[4.688rem]">
        <Image
          src="/logo.svg"
          alt="card-image"
          height={500}
          width={100}
          className="w-[150px] h-[140px]"
        />
      </div>
      <div className="flex flex-col gap-16 mt-[13.563rem] h-[26.25rem] w-[100%]">
        <div className="flex-grow">
          <h3 className="text-content text-[57px] font-light leading-[62.70px]">
            Elevate your clients’ airport journeys.
          </h3>
        </div>
        <div className="flex-grow">
          <p className="text-neutral-700 text-[26.50px] leading-[37.09px]">
            Deliver unparalleled airport concierge services to your most valued
            clients.
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <div className="w-[17.19px] h-[132px]">
            <Bullets />
          </div>
          <div className="flex flex-col gap-8">
            <p>Make us your preferred Meet & Assist vendor Our competitive</p>
            <p> commission rates start at 10% We serve VIPs, celebrities,</p>
            <p> executives, dignitaries, seniors, UM, and families</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
