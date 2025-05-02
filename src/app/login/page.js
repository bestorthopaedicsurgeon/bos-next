import React from "react";
import InputField from "@components/reusable/inputField";
import { input } from "@data/input.js";
const Page = () => {
  console.log(input);
  return (
    <div>
      <form action="">
        {input.email.map((data) => (
          <InputField
            placeholder={data.placeholder}
            name={data.name}
            inputType={data.inputType}
            label={data.label}
            key={data.name}
          />
        ))}
      </form>
    </div>
  );
};

export default Page;
