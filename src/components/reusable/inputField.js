import React from "react";

const InputField = (props) => {
  const { placeholder, inputType, label, name } = props;
  return (
    <div className="flex flex-col gap-3 mt-[40px] ">
      <label htmlFor={name}>{label}</label>
      <input
        className="border-solid outline-(--primary) outline rounded-md py-[14px] px-[16px]"
        type={inputType}
        name={name}
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
