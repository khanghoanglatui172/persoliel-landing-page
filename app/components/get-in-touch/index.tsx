import emailConfig from "@/config/email.config";
import mg from "@/lib/SendEmail";
import React from "react";
import Form from "./form";
import Card from "./card";
import Collaborate from "../footer/collaborate";
import Image from "next/image";
import Reserve from "./reserve";

export interface IForm {
  first_name: string;
  last_name: string;
  email: string;
  detail: string;
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
        subject: "New request - get in touch",
        html: `
        <h1 style="margin-bottom: 10px;" >New request - get in touch</h1>
        <p style="margin-bottom: 10px;" ><strong>Name:</strong> ${form.first_name} ${form.last_name}</p>
        <p style="margin-bottom: 10px;" ><strong>Email:</strong> ${form.email}</p>
        <p style="margin-bottom: 10px;" ><strong>Detail:</strong> ${form.detail}</p>
      `,
      });
      return true;
    } catch (error) {
      throw error;
    }
  }

  return (
    <div className="flex flex-col justify-center items-center ">
      <Reserve />
      <div className="w-[1286px] z-50 flex flex-col gap-10 py-20 relative">
        <div>
          <h5 className="h-8 text-center text-content text-base font-larken uppercase tracking-wide">
            Get In Touch
          </h5>
          <h2 className="text-center text-content text-[50px] font-larken leading-[53.25px]">
            {getInTouchData.title}
          </h2>
        </div>
        <div className="flex flex-row w-[100%] justify-center gap-5">
          <Form submit={handleSubmit} />
          <Card />
        </div>
        <div className="absolute top-[36%] right-12 flex flex-col gap-8">
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
