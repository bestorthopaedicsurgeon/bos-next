import Image from "next/image";
import React from "react";
import google from "../../../public/google.svg";
import fb from "../../../public/fb.svg";
import apple from "../../../public/apple.svg";
import { signIn } from "next-auth/react";
import Cookies from "js-cookie";
import { useSearchParams } from "next/navigation";

const btnStyle =
  "bg-white py-[8px] w-full flex items-center justify-center rounded-sm cursor-pointer";

const SocialLogin = (props) => {
  const { headerTxt, role } = props;
  const searchParams = useSearchParams();

  const handleGoogleSignIn = () => {
    if (role) {
      Cookies.set("oauth_signup_role", role, { expires: 1 / 96 }); // Expires in 15 minutes
    } else {
      Cookies.remove("oauth_signup_role");
    }
    const defaultCallback = role === "DOCTOR" ? "/doctor/registration" : "/";
    const callbackUrl = searchParams.get("callbackUrl") || defaultCallback;
    signIn("google", { callbackUrl });
  };

  return (
    <div className="my-[29px]">
      <p className="my-[12px]">{headerTxt}</p>
      <div className="flex w-full">
        <button className={btnStyle} onClick={handleGoogleSignIn}>
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
