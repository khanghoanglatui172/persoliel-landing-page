import Image from "next/image";
import React from "react";
import "./box.css";

interface ICard {
  title: string;
  image_url: string;
  content: string;
}

function Cart({ card }: { card: ICard }) {
  return (
    <div className="flex flex-col justify-between w-[330px] h-[343px] bg-white shadow relative">
      <div className="absolute top-0 right-0">
        <div className="box-our-guests"></div>
      </div>
      <div className="p-5">
        <h4
          className="text-slate-600 text-3xl font-normal"
          style={{ fontFamily: "Brother 1816" }}
        >
          {card.title}
        </h4>
        <p className="text-content text-[17px] leading-[22.95px] mt-5">
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

export default Cart;
