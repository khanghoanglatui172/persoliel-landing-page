"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import React, { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
interface IForm {
  first_name: string;
  last_name: string;
  email: string;
  detail: string;
}

const validate = Yup.object({
  first_name: Yup.string().max(100).required(),
  last_name: Yup.string().max(100).required(),
  email: Yup.string().email().required(),
  detail: Yup.string().max(600).required(),
});

const defaultValues: IForm = {
  first_name: "",
  last_name: "",
  email: "",
  detail: "",
};

export default function Form({
  submit,
}: {
  submit: (data: IForm) => Promise<boolean>;
}) {
  const { pending } = useFormStatus();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IForm>({ defaultValues, resolver: yupResolver(validate) });

  // const test: React.RefObject<HTMLFormElement> = useRef(null);

  const onSubmit: SubmitHandler<IForm> = async (data) => {
    await submit(data);
  };
  // console.log(pending);
  return (
    <>
      <div className="w-[42%] h-[400px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-[100%] h-[400px] flex flex-col justify-around items-center bg-white p-10 shadow-lg">
            <div className="flex flex-row justify-around items-center bg-bgInput gap-8 columns-3">
              <input
                placeholder="First name"
                className="w-[45%] h-[60px] flex-grow  bg-bgInput"
                type="text"
                {...register("first_name", { required: true })}
              />
              <input
                placeholder="Last Name"
                className="w-[45%] h-[60px] flex-grow  bg-bgInput"
                type="text"
                {...register("last_name", { required: true })}
              />
            </div>
            <input
              className="w-[90%] h-[60px] bg-bgInput"
              type="text"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            <input
              className="w-[90%] h-[60px] bg-bgInput"
              type="text"
              placeholder="Detail"
              {...register("detail", { required: true })}
            />
            <div className="flex justify-end w-[90%]">
              <button
                disabled={pending}
                className="w-[100px] h-[48px] text-center text-amber-50 text-base font-bold bg-bgButton hover:shadow-lg hover:border-black hover:border-[1px]"
                type="submit"
              >
                SEND
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
