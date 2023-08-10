import React from "react";
import Information from "./components/information";
import FormAdvisors from "./components/formAdvisors";
import emailConfig from "@/config/email.config";
import mg from "@/lib/SendEmail";

export interface IFormAdvisors {
  first_name: string;
  last_name: string;
  company: string;
  email: string;
  phone: string;
  business: string;
  detail_support: string;
}

function Advisors() {
  async function handleSubmit(form: IFormAdvisors) {
    "use server";

    try {
      await mg.messages.create(emailConfig.domain || "tuanprodd@gmail.com", {
        from: `Excited User <${emailConfig.email}>`,
        to: ["tuandd.310797@gmail.com"],
        subject: "New request - Become a partner",
        html: `
        <h1 style="margin-bottom: 10px;" >New request - Become a partner</h1>
        <p style="margin-bottom: 10px;" ><strong>Name:</strong> ${form.first_name} ${form.last_name}</p>
        <p style="margin-bottom: 10px;" ><strong>Company:</strong> ${form.company}</p>
        <p style="margin-bottom: 10px;" ><strong>Email:</strong> ${form.email}</p>
        <p style="margin-bottom: 10px;" ><strong>Phone:</strong> ${form.phone}</p>
        <p style="margin-bottom: 10px;" ><strong>Business:</strong> ${form.business}</p>
        <p style="margin-bottom: 10px;" ><strong>Detail Support:</strong> ${form.detail_support}</p>
      `,
      });
      return true;
    } catch (error) {
      throw error;
    }
  }
  return (
    <div className="flex items-center justify-center h-[100vh] bg-white bg-opacity-50 overflow-auto">
      <div className="flex flex-row p relative bg-white bg-opacity-50 overflow-auto bg-[url('/backgrounds/background-contourmap4-subpage.svg')] bg-repeat-x bg-advisor-bg">
        <Information />
        <FormAdvisors submit={handleSubmit} />
      </div>
    </div>
  );
}

export default Advisors;
