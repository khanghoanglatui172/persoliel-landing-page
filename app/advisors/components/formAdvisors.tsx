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
    <div className="relative flex-grow w-[50%] pt-[4.563rem] gap-5 h-[100%] p-10 px-16">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-around items-center flex-grow gap-5 h-[100%] w-[100%]">
          <div className="w-[100%]">
            <h4 className="text-bgButton text-3xl font-normal leading-loose text-start">
              Get in touch
            </h4>
          </div>
          <div className="w-[100%] flex flex-row justify-around items-center gap-8 columns-3">
            <input
              placeholder="First name"
              className="w-[100%] h-[3.75rem] flex-grow  bg-white pl-4 placeholder:text-content placeholder:font-brother1816 placeholder:font-medium"
              type="text"
              {...register("first_name", { required: true })}
            />
            <input
              placeholder="Last Name"
              className="w-[100%] h-[3.75rem] flex-grow  bg-white pl-4 placeholder:text-content placeholder:font-brother1816 placeholder:font-medium"
              type="text"
              {...register("last_name", { required: true })}
            />
          </div>
          <input
            className="w-[100%] h-[3.75rem] bg-white pl-4 placeholder:text-content placeholder:font-brother1816 placeholder:font-medium"
            type="text"
            placeholder="Company Name"
            {...register("company", { required: true })}
          />
          <input
            className="w-[100%] h-[3.75rem] bg-white pl-4 placeholder:text-content placeholder:font-brother1816 placeholder:font-medium"
            type="text"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <input
            className="w-[100%] h-[3.75rem] bg-white pl-4 placeholder:text-content placeholder:font-brother1816 placeholder:font-medium [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
            type="number"
            placeholder="Phone"
            {...register("phone", { required: true })}
          />

          <input
            className="w-[100%] h-[3.75rem] bg-white pl-4 placeholder:text-content placeholder:font-brother1816 placeholder:font-medium"
            type="text"
            placeholder="What is your line of business?"
            {...register("business", { required: true })}
          />

          <textarea
            className="w-[100%] h-[7rem] bg-white pl-4 pt-2 placeholder:text-content placeholder:font-brother1816 placeholder:font-medium "
            style={{ resize: "none" }}
            placeholder="How can we support you?"
            {...register("detail_support", { required: true })}
          />
          <div className="flex justify-end w-[100%]">
            <button
              // disabled={pending}
              className="w-[14.375rem] h-[48px] text-center text-amber-50 text-base font-bold tracking-[0.16em] bg-bgButton hover:shadow-lg hover:border-black hover:border-[1px]"
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
