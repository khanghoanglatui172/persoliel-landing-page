import React from "react";
import Image from "next/image";
import Cart from "./cart";

const content = {
  content: "We match our services to your needs.",
  title: "Travelers are not all the same",
  list_card: [
    {
      image_url: "/VIPpassengers-image.jpg",
      title: "VIP passengers",
      content:
        "From celebrities to dignitaries to business executives, we curate a first-class experience for our most discerning guests.",
    },
    {
      image_url: "/seniortravelers-image.jpg",
      title: "Senior travelers",
      content:
        "For seniors desiring assistance or extra care, we handle all necessary arrangements and logistics to create a worry-free and delightful trip.",
    },
    {
      image_url: "/families-image.jpg",
      title: "Families",
      content:
        "We offer an additional pair of helping hands, minimizing stress and enabling families to enjoy the wonder of travel together.",
    },
    {
      image_url: "/minors-image.jpg",
      title: "Unaccompanied minors",
      content:
        "We prioritize the safety and well-being of children traveling alone, ensuring peace of mind for parents and guardians.",
    },
    {
      image_url: "/specialneeds-image.jpg",
      title: "Special needs passengers",
      content:
        "We emphasize comfort when it comes to guaranteeing smooth passage for guests with mobility challenges or special needs.",
    },
  ],
};

function OurGuests() {
  return (
    <div id="our-guests" className=" flex justify-center items-center">
      <div className="grid grid-cols-3 gap-3 relative w-[1286px] h-[1024px] bg-whiteBg">
        <div
          className="absolute w-[inherit] h-[inherit] top-[-14%]"
          style={{ zIndex: 0 }}
        >
          <Image
            src="/background-contourmap3.svg"
            alt="our_guests-logo"
            width="1286"
            height="1024"
          />
        </div>
        <div className="grid grid-cols-3 gap-3 w-[inherit] h=[900px] p-10">
          <div className="z-30 flex items-center flex-col justify-center gap-y-10 p-10">
            <div>
              <p
                className="text-content w-[173px] h-8 text-slate-600 text-base font-semibold uppercase tracking-wide"
                style={{ fontFamily: "Brother 1816" }}
              >
                Our Guests
              </p>
              <h2
                className="text-slate-600 text-[45px] font-light leading-[53.25px]"
                style={{ fontFamily: "Larken" }}
              >
                {content.title}
              </h2>
              <p
                className="w-60 h-[58px] text-neutral-700 text-[21px] leading-[29.40px]"
                style={{ fontFamily: "Brother 1816" }}
              >
                {content.content}
              </p>
            </div>
          </div>
          {content.list_card.map((card, i) => (
            <div
              className="z-30 flex items-center flex-col justify-center p-10"
              key={i}
            >
              <Cart card={card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurGuests;
