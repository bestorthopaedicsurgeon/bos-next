import Image from "next/image";
import React from "react";
import google from "../../../public/google.svg";
import fb from "../../../public/fb.svg";
import apple from "../../../public/apple.svg";
import { signIn } from "next-auth/react";
const btnStyle =
  "bg-white py-[8px] w-full flex items-center justify-center rounded-sm cursor-pointer";
const SocialLogin = (props) => {
  const { headerTxt } = props;
  return (
    <div className="my-[29px]">
      <p className="my-[12px]">{headerTxt}</p>
      <div className="flex w-full">
        <button className={btnStyle} onClick={() => signIn("google", { callbackUrl: "/" })}>
          <Image src={google} alt="google" />
        </button>
        {/* <button className={btnStyle}>
          <Image src={fb} alt="fb" />
        </button>
        <button className={btnStyle}>
          <Image src={apple} alt="apple" />
        </button> */}
      </div>
    </div>
  );
};

export default SocialLogin;
