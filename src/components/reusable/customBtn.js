import React from "react";

const CustomBtn = (props) => {
  const { btnText, border, width, onClick, type = "submit", disabled } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`py-[13px] bg-(--primary) rounded-${border} text-center text-white cursor-pointer w-[${width}] my-[16px] w-[100%] ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {btnText}
    </button>
  );
};

export default CustomBtn;
