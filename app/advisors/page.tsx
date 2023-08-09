import React from "react";
import Information from "./components/information";
import FormAdvisors from "./components/formAdvisors";

function Advisors() {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="w-[1280px] h-[842px] relative bg-white bg-opacity-50 flex px-10">
        <Information />
        <FormAdvisors />
      </div>
    </div>
  );
}

export default Advisors;
