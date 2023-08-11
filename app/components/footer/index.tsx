import Image from "next/image";
import React from "react";
import Collaborate from "./collaborate";

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center pb-10">
      <div className="w-[1286px] h-[auto] flex flex-col gap-10">
        <Collaborate />
        <div className="flex flex-row justify-center gap-32 px-12">
          <div className="w-[55rem] flex-grow">
            <p className="text-app-dark text-[24px] font-light leading-[29.40px] pl-10">
              Perq Soleil was founded in Washington, DC in 2009 to provide
              premium Meet & Assist services to travelers worldwide.
            </p>
          </div>
          <div className="gap-4 w-[350px]">
            <Image
              src="/logos/logo-PS-footer.svg"
              alt="Vector_P"
              width={350}
              height={300}
            />
          </div>
        </div>
      </div>
      <div className="pl-20 mt-5 flex flex-row justify-start gap-10 text-[15px] w-[100%]">
        <p>© 2023 Perq Soleil. All Rights Reserved.</p>
        <p>(202) 573-7705</p>
        <p>contact@perqsoleil.com</p>
      </div>
    </div>
  );
}

export default Footer;
