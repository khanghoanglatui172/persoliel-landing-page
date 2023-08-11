import Image from "next/image";
import React from "react";

interface ICard {
  title: string;
  image_url: string;
  content: string;
}

function Card({ card }: { card: ICard }) {
  return (
    <div className="flex bg-white flex-col justify-between w-[330px] h-[343px] shadow relative">
      <div className="absolute top-0 right-0">
        <div className=" w-[30px] h-[30px] bg-white after:border-t-[30px] after:border-l-[30px] after:border-t-rose-800 after:border-l-transparent after:w-0 after:absolute after:right-0"></div>
      </div>
      <div className="p-5">
        <h4 className="text-3xl font-normal">{card.title}</h4>
        <p className="text-app-dark text-[17px] leading-[22.95px] mt-5">
          {card.content}
        </p>
      </div>
      <div className="w-[330px] h-[122px]">
        <Image
          src={card.image_url}
          alt={card.image_url}
          width="330"
          height="122"
        />
      </div>
    </div>
  );
}

export default Card;
