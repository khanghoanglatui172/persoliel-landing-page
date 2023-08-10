"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import { IFormAdvisors } from "../page";

const validate = Yup.object({
  first_name: Yup.string().max(100).required(),
  last_name: Yup.string().max(100).required(),
  company: Yup.string().max(100).required(),
  email: Yup.string().email().required(),
  phone: Yup.string()
    .max(15)
    .required()
    .test(
      "is-Number",
      "Phone must be number",
      (value, testContext) => typeof parseInt(value) === "number"
    ),
  business: Yup.string().max(100).required(),
  detail_support: Yup.string().max(600).required(),
});

const defaultValues: IFormAdvisors = {
  first_name: "",
  last_name: "",
  company: "",
  email: "",
  phone: "",
  business: "",
  detail_support: "",
};

function FormAdvisors({
  submit,
}: {
  submit: (data: IFormAdvisors) => Promise<boolean>;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormAdvisors>({
    defaultValues,
    resolver: yupResolver(validate),
  });

  const onSubmit: SubmitHandler<IFormAdvisors> = async (data) => {
    console.log(data);
    // console.log(submit);
    await submit(data);
  };

  return (
    <div className="flex flex-col items-center  relative flex-grow w-[50%] bg-layer pt-[4.563rem] gap-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-around items-center flex-grow gap-5 w-[100%] h-[43.75rem]">
          <h4 className=" text-titleContent text-3xl font-normal leading-loose">
            Get in touch
          </h4>
          <div className="w-[100%] flex flex-row justify-around items-center gap-8 columns-3">
            <input
              placeholder="First name"
              className="w-[100%] h-[3.75rem] flex-grow  bg-white pl-2  placeholder:text-content placeholder:font-brother1816 placeholder:font-semibold"
              type="text"
              {...register("first_name", { required: true })}
            />
            <input
              placeholder="Last Name"
              className="w-[100%] h-[3.75rem] flex-grow  bg-white pl-2 placeholder:text-content placeholder:font-brother1816 placeholder:font-semibold"
              type="text"
              {...register("last_name", { required: true })}
            />
          </div>
          <input
            className="w-[100%] h-[3.75rem] bg-white pl-2 placeholder:text-content placeholder:font-brother1816 placeholder:font-semibold"
            type="text"
            placeholder="Company Name"
            {...register("company", { required: true })}
          />
          <input
            className="w-[100%] h-[3.75rem] bg-white pl-2 placeholder:text-content placeholder:font-brother1816 placeholder:font-semibold"
            type="text"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <input
            className="w-[100%] h-[3.75rem] bg-white pl-2 placeholder:text-content placeholder:font-brother1816 placeholder:font-semibold"
            type="number"
            placeholder="Number"
            {...register("phone", { required: true })}
          />

          <input
            className="w-[100%] h-[3.75rem] bg-white pl-2 placeholder:text-content placeholder:font-brother1816 placeholder:font-semibold"
            type="text"
            placeholder="What is your line of business?"
            {...register("business", { required: true })}
          />

          <textarea
            className="w-[100%] h-[10.302rem] bg-white pl-2 pt-2 placeholder:text-content placeholder:font-brother1816 placeholder:font-semibold"
            style={{ resize: "none" }}
            placeholder="How can we support you?"
            {...register("detail_support", { required: true })}
          />
          <div className="flex justify-end w-[100%]">
            <button
              // disabled={pending}
              className="w-[14.375rem] h-[48px] text-center text-amber-50 text-base font-bold bg-bgButton hover:shadow-lg hover:border-black hover:border-[1px]"
              type="submit"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormAdvisors;
