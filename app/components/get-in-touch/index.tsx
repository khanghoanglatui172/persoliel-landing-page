import emailConfig from "@/config/email.config";
import mg from "@/lib/SendEmail";
import React from "react";
import Form from "./form";
import Card from "./card";
import Collaborate from "./collaborate";
import Image from "next/image";

export interface IForm {
  first_name: string;
  last_name: string;
  email: string;
}

const getInTouchData = {
  title: "Send a message. We’ll reach out.",
  form: {},
  meta_data: {},
};

function GetInTouch() {
  async function handleSubmit(form: IForm) {
    "use server";
    try {
      await mg.messages.create(emailConfig.domain || "tuanprodd@gmail.com", {
        from: `Excited User <${emailConfig.email}>`,
        to: ["tuandd.310797@gmail.com"],
        subject: "test",
        message: `${JSON.stringify(form)}`,
      });
      return true;
    } catch (error) {
      throw error;
    }
  }

  return (
    <div className="flex justify-center items-center ">
      <div className="w-[1286px] h-[850px] bg-orange-100 z-50 flex flex-col gap-10 py-10 relative">
        <div>
          <h5 className="h-8 text-center text-content text-base font-medium uppercase tracking-wide">
            Get In Touch
          </h5>
          <h2 className="text-center text-content text-[50px] font-light leading-[53.25px]">
            {getInTouchData.title}
          </h2>
        </div>
        <div className="flex flex-row w-[100%] justify-center gap-5">
          <Form submit={handleSubmit} />
          <Card />
        </div>
        <Collaborate />
        <div className="absolute top-[30%] right-12 flex flex-col gap-8">
          <Image
            src="/icon-instagram.svg"
            alt="icon-instagram"
            height={22}
            width={22}
            className="ms-2 pt-0.5"
          />
          <Image
            src="/icon-twitter.svg"
            alt="icon-twitter"
            height={22}
            width={22}
            className="ms-2 pt-0.5"
          />
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
