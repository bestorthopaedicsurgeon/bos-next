import React from "react";

const CustomBtn = (props) => {
  const { btnText, border, width } = props;
  return (
    <button
      className={`py-[13px] bg-(--primary) rounded-${border} text-center text-white cursor-pointer w-[${width}] my-[16px] w-[100%]`}
    >
      {btnText}
    </button>
  );
};

export default CustomBtn;
