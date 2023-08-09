import React from "react";

interface IForm {
  first_name: string;
  last_name: string;
  email: string;
}

export default function Form() {
  async function handleSubmit() {
    "use server";
    // ...
  }

  return (
    <div>
      <form></form>
    </div>
  );
}
