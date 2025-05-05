"use client";
import { React, useState } from "react";
import InputField from "@components/reusable/inputField";
import { input } from "@data/input.js";
import CustomBtn from "@components/reusable/customBtn";
import { Checkbox } from "@/components/ui/checkbox";
import SocialLogin from "@/components/reusable/socialLogin";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import WelcomeTxt from "@/components/reusable/welcomeTxt";
import login_banner from "../../../public/login_banner.png";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Link from "next/link";
const Page = () => {
  const [phone, setPhone] = useState("");
  return (
    <div className="flex justify-center items-center min-xl:pr-[200px]">
      <div className="min-lg:w-[60%] max-lg:hidden">
        <Link href="#">
          <Image
            src={login_banner}
            alt="login banner"
            className="w-[1000px] h-auto"
          />
        </Link>
      </div>
      <div className="min-lg:w-[40%] w-[100%] max-xl:mx-[20px]">
        <WelcomeTxt
          header="Sign up"
          cta="Login"
          ctaLink="#"
          subTxt="Already have an account ?"
          color="--primary"
        />
        {/* input form start */}
        <form action="">
          <RadioGroup
            defaultValue="comfortable"
            className="flex justify-center items-center m-auto gap-[40px] mt-[40px]"
          >
            <div className="flex justify-center items-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <label htmlFor="r1">Join as Patient</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <label htmlFor="r2">Join as Doctor</label>
            </div>
          </RadioGroup>
          <div className="flex gap-5 w-full max-lg:flex-wrap">
            <div className="min-lg:w-[50%] max-lg:w-full">
              {input.fname.map((data) => (
                <InputField
                  placeholder={data.placeholder}
                  name={data.name}
                  inputType={data.inputType}
                  label={data.label}
                  key={data.name}
                />
              ))}
            </div>
            <div className="min-lg:w-[50%] max-lg:w-full">
              {input.lname.map((data) => (
                <InputField
                  placeholder={data.placeholder}
                  name={data.name}
                  inputType={data.inputType}
                  label={data.label}
                  key={data.name}
                />
              ))}
            </div>
          </div>
          {input.email.map((data) => (
            <InputField
              placeholder={data.placeholder}
              name={data.name}
              inputType={data.inputType}
              label={data.label}
              key={data.name}
            />
          ))}
          {/* phone  */}
          <div className="w-full mt-[40px]">
            <label>Phone Number</label>
            <PhoneInput
              country={"us"}
              value={phone}
              onChange={(phone) => setPhone(phone)}
              inputClass="!w-full !py-[26px] !px-[56px] max-w-[800px] !bg-transparent !border-none"
              containerClass="w-full !border-solid !outline-(--primary) !outline !rounded-md !bg-transparent mt-[10px]"
              className="w-full"
              buttonClass="!bg-transparent w-[50px] !border-0 !border-r !border-r-(--text-secondary) hover:!bg-transparent"
            />
          </div>
          {input.pass.map((data) => (
            <InputField
              placeholder={data.placeholder}
              name={data.name}
              inputType={data.inputType}
              label={data.label}
              key={data.name}
            />
          ))}
          <div className="min-lg:mt-[27px] max-lg:mt-[17px]">
            <CustomBtn btnText="Sign Up" border="md" width="100%" />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label htmlFor="terms">Remember me</label>
          </div>
        </form>
        {/* input form end */}

        {/* social login */}
        <SocialLogin headerTxt="Or login with" />
      </div>
    </div>
  );
};

export default Page;
