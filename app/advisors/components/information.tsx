import Image from "next/image";
import React from "react";
import Bullets from "./bullest";

function Information() {
  return (
    <div className="flex justify-center relative flex-grow w-[50%] px-[2.333rem]">
      <div className="w-[150px] h-[140px] absolute top-0 left-[4.688rem]">
        <Image
          src="/logo.svg"
          alt="card-image"
          height={500}
          width={100}
          className="w-[150px] h-[140px]"
        />
      </div>
      <div className="flex flex-col gap-12 mt-[13.563rem] h-[26.25rem] w-[100%] px-8">
        <div className="flex-grow">
          <h3 className="text-content text-[50px] font-light leading-[62.70px] font-larken">
            Elevate your clients’ airport journeys.
          </h3>
        </div>
        <div className="flex-grow">
          <p className="text-cardContent text-[23.50px] leading-[38.09px]">
            Deliver unparalleled airport concierge services to your most valued
            clients.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="w-[17.19px] h-[132px]">
            <Bullets />
          </div>
          <div className="flex flex-col mt-[-5px] gap-9">
            <p className="text-[18px] font-brother1816">
              Make us your preferred Meet & Assist vendor
            </p>
            <p className="text-[18px] font-brother1816">
              Our competitive commission rates start at 10% We serve VIPs,
            </p>
            <p className="text-[18px] font-brother1816">
              We serve VIPs, celebrities, executives, dignitaries, seniors, UM,
              and families
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
