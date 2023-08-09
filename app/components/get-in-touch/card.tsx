import React from "react";
import Image from "next/image";
import dayjs from "dayjs";

function Card() {
  return (
    <div className="w-[42%] h-[400px] flex flex-row  bg-white shadow-lg">
      <div className="w-[60%] h-[100%] p-10 py-20 flex flex-col justify-between">
        <div>
          <Image
            src="/icon-facebook-lightblue.svg"
            alt="facebook-icon"
            width={20}
            height={20}
          />
        </div>
        <div>
          <p className="text-cardContent text-lg font-normal leading-7">
            “Traveling tends to magnify all human emotions.” -- Peter Hoeg,
            Danish writer of fiction #PerqSoleil #TravelPartner #LuxuryTravel
            #TravelQuote
          </p>
        </div>
        <hr className="pt-15" />
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-3">
            <Image
              src="/icon-like.svg"
              alt="like-icon"
              width={22}
              height={22}
            />
            <Image
              src="/icon-share.svg"
              alt="like-share"
              width={22}
              height={22}
            />
            <Image
              src="/icon-follow.svg"
              alt="like-follow"
              width={22}
              height={22}
            />
          </div>
          <div>
            <p className="text-right text-content text-[15px] font-medium leading-loose">
              {dayjs().format("MMMM DD, YYYY")}
            </p>
          </div>
        </div>
      </div>
      <div className="w-[230px] h-[100%]">
        <Image
          src="/card-image.png"
          alt="card-image"
          height={500}
          width={100}
          style={{ height: "100%", width: "100%" }}
          className="ms-2 pt-0.5"
        />
      </div>
    </div>
  );
}

export default Card;
