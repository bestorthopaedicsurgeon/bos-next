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
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
const Page = () => {
  const [data, setData] = useState();
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      console.log(data);

      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await res.json();
      console.log(json);

      if (!res.ok) {
        throw new Error(data.error || "Registration failed");
      }

      setSuccess("Registration successful!");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (result?.ok) {
        // ✅ Redirect manually — e.g., to profile or dashboard
        if (data.role === "PATIENT") {
          redirect("/");
        } else if (data.role === "DOCTOR") {
          redirect("/doctor/registration");
        }
      } else {
        setError("Sign-in failed");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-xl:pr-[170px]">
      <div className="max-lg:hidden min-lg:w-[65%]">
        <Link href="#" className="h-full">
          <Image
            src={login_banner}
            alt="login banner"
            className="h-[990px]"
            // height="100%"
          />
        </Link>
      </div>
      <div className="w-[100%] max-md:mt-30 max-xl:mx-[20px] min-lg:w-[35%]">
        <WelcomeTxt
          header="Sign up"
          cta="Login"
          ctaLink="/login"
          subTxt="Already have an account ?"
          color="--primary"
        />
        {/* input form start */}
        <form action="">
          <RadioGroup
            defaultValue="comfortable"
            onValueChange={(value) =>
              setData((prev) => ({ ...prev, role: value }))
            }
            className="m-auto mt-[40px] flex items-center justify-center gap-[40px]"
          >
            <div className="flex items-center justify-center space-x-2">
              <RadioGroupItem value="PATIENT" id="r1" />
              <label htmlFor="r1">Join as Patient</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="DOCTOR" id="r2" />
              <label htmlFor="r2">Join as Doctor</label>
            </div>
          </RadioGroup>
          <div className="flex w-full gap-5 max-lg:flex-wrap">
            <div className="max-lg:w-full min-lg:w-[50%]">
              {input.fname.map((data) => (
                <InputField
                  placeholder={data.placeholder}
                  name={data.name}
                  inputType={data.inputType}
                  label={data.label}
                  key={data.name}
                  onChange={(e) => {
                    setData((prev) => ({
                      ...prev,
                      firstName: e.target.value,
                    }));
                  }}
                />
              ))}
            </div>
            <div className="max-lg:w-full min-lg:w-[50%]">
              {input.lname.map((data) => (
                <InputField
                  placeholder={data.placeholder}
                  name={data.name}
                  inputType={data.inputType}
                  label={data.label}
                  key={data.name}
                  onChange={(e) => {
                    setData((prev) => ({
                      ...prev,
                      lastName: e.target.value,
                    }));
                  }}
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
              onChange={(e) => {
                setData((prev) => ({
                  ...prev,
                  email: e.target.value,
                }));
              }}
            />
          ))}
          {/* phone  */}
          <div className="mt-[40px] w-full">
            <label>Phone Number</label>
            <PhoneInput
              country={"us"}
              value={data?.phone}
              onChange={(phone) => {
                setData((prev) => ({
                  ...prev,
                  phone: phone,
                }));
              }}
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
              onChange={(e) => {
                setData((prev) => ({
                  ...prev,
                  password: e.target.value,
                }));
              }}
            />
          ))}
          <div
            className="max-lg:mt-[17px] min-lg:mt-[27px]"
            onClick={handleSignUp}
          >
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
