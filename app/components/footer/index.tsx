import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="flex justify-center items-center bg-bgBottom">
      <div className="w-[1286px] h-[400px] bg-orange-100">
        <div className="flex flex-row justify-center gap-40 px-12">
          <div className="w-[600px] flex-grow">
            <p className="text-neutral-700 text-[24px] leading-[29.40px]">
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
        <div className="pl-12 mt-5 flex flex-row justify-start gap-10 text-[15px]">
          <p>© 2023 Perq Soleil. All Rights Reserved.</p>
          <p>(202) 573-7705</p>
          <p>contact@perqsoleil.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
