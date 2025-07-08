"use client";
import React, { useState } from "react";
import InputField from "@components/reusable/inputField";
import { input } from "@data/input.js";
import CustomBtn from "@components/reusable/customBtn";
import { Checkbox } from "@/components/ui/checkbox";
import SocialLogin from "@/components/reusable/socialLogin";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import WelcomeTxt from "@/components/reusable/welcomeTxt";
import login_banner from "../../../public/login_banner.png";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";


const Page = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    // setError("");
    // setSuccess("");
    console.log("Form Data:", form);
    const signInData = await signIn("credentials", {
      redirect: false,
      email: form.email,
      password: form.password,
    });

    console.log("SignIn Data:", signInData);

    if (signInData.error) {
      setError(signInData.error);

    } else {
      setSuccess("Login successful!");
      redirect("/profile");
    }
    setLoading(false);
  };

  // const handleSubmit = async (e) => {
  //   console.log(form);
  //   e.preventDefault();
  //   setLoading(true);
  //   setError("");
  //   setSuccess("");
  //   try {
  //     const res = await fetch("/api/login", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ email: form.email, password: form.pass }),
  //     });
  //     const data = await res.json();
  //     console.log("this is the data", data);
  //     if (res.ok) {
  //       setSuccess("Login successful!");
  //       // TODO: Redirect or set user context here
  //     } else {
  //       setError(data.error || "Login failed");
  //     }
  //   } catch (err) {
  //     setError("Something went wrong");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="flex items-center justify-center min-xl:pr-[200px]">
      <div className="max-lg:hidden min-lg:w-[60%]">
        <Link href="#">
          <Image
            src={login_banner}
            alt="login banner"
            className="h-auto w-[1000px]"
          />
        </Link>
      </div>
      <div className="w-[100%] max-xl:mx-[20px] min-lg:w-[40%]">
        <WelcomeTxt
          header="Welcome Back"
          cta="Sign up"
          ctaLink="/signup"
          subTxt="Don’t have an account?"
          color="--primary"
        />
        {/* input form start */}
        {/* <form onSubmit={handleSubmit}> */}
        {/* <RadioGroup
            defaultValue="comfortable"
            className="m-auto mt-[40px] flex items-center justify-center gap-[40px]"
          >
            <div className="flex items-center justify-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <label htmlFor="r1">Login as Patient</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <label htmlFor="r2">Login as Doctor</label>
            </div>
          </RadioGroup> */}

        {input.email.map((data) => (
          <InputField
            placeholder={data.placeholder}
            name={data.name}
            inputType={data.inputType}
            label={data.label}
            key={data.name}
            value={form.email}
            onChange={handleChange}
          />
        ))}
        {input.pass.map((data) => (
          <InputField
            placeholder={data.placeholder}
            name={data.name}
            inputType={data.inputType}
            label={data.label}
            key={data.name}
            value={form.password}
            onChange={handleChange}
          />
        ))}
        <div
          onClick={handleSubmit}
          className="max-lg:mt-[17px] min-lg:mt-[27px]"
        >
          <CustomBtn
            btnText={loading ? "Logging in..." : "Login"}
            border="md"
            width="100%"
            disabled={loading}
          />
        </div>
        {error && <div className="mt-2 text-red-500">{error}</div>}
        {success && <div className="mt-2 text-green-500">{success}</div>}
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label htmlFor="terms">Remember me</label>
        </div>
        {/* </form> */}
        {/* input form end */}

        {/* social login */}
        <SocialLogin headerTxt="Or login with" />
      </div>
    </div>
  );
};

export default Page;
