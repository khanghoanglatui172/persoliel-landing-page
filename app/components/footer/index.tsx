import Image from "next/image";
import React from "react";
import Collaborate from "./collaborate";

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center pb-10">
      <div className="w-[1286px] h-[auto] bg-orange-100 flex flex-col gap-10">
        <Collaborate />
        <div className="flex flex-row justify-center gap-32 px-12">
          <div className="w-[600px] flex-grow">
            <p className="text-neutral-700 text-[24px] leading-[29.40px] pl-10">
              Perq Soleil was founded in Washington, DC in 2009 to provide
              premium Meet & Assist services to travelers worldwide.
            </p>
          </div>
          <div className="flex flex-row gap-4 w-[350px]">
            <Image
              src="/Vector_P.svg"
              alt="Vector_P"
              width={180}
              height={110}
            />
            <Image
              src="/Vector_S.svg"
              alt="Vector_S"
              width={180}
              height={110}
            />
          </div>
        </div>
      </div>
      <div className="pl-20 mt-5 flex flex-row justify-start gap-10 text-[15px] w-[1286px]">
        <p>© 2023 Perq Soleil. All Rights Reserved.</p>
        <p>(202) 573-7705</p>
        <p>contact@perqsoleil.com</p>
      </div>
    </div>
  );
}

export default Footer;
