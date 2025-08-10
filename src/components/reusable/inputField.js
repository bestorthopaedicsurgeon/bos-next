import React from "react";

const InputField = (props) => {
  const { placeholder, inputType, label, name, value } = props;
  return (
    <div className="mt-[40px] flex flex-col gap-3">
      <label htmlFor={name}>{label}</label>
      <input
        className="outline-primary rounded-md border-solid px-[16px] py-[14px] outline"
        type={inputType}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value || ""}
        onChange={props.onChange}
      />
    </div>
  );
};

export default InputField;
