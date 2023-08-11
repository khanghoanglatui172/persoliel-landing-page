"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { IForm } from ".";

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
            <div className="w-[90%] flex flex-row justify-around items-center gap-8 columns-3">
              <input
                placeholder="First name"
                className="w-[100%] h-[60px] flex-grow  bg-bgInput placeholder:text-content pl-4 font-medium"
                type="text"
                {...register("first_name", { required: true })}
              />
              <input
                placeholder="Last Name"
                className="w-[100%] h-[60px] flex-grow  bg-bgInput placeholder:text-content pl-4 font-medium"
                type="text"
                {...register("last_name", { required: true })}
              />
            </div>
            <input
              className="w-[90%] h-[60px] bg-bgInput placeholder:text-content pl-4 font-medium"
              type="text"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            <textarea
              className="w-[90%] h-[90px] bg-bgInput placeholder:text-content pl-4 font-medium pt-4"
              style={{ resize: "none" }}
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
