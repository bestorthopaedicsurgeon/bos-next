"use client";
import React, { useEffect, useState } from "react";
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
import { signIn, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

const Page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [form, setForm] = useState({ email: "", password: "" });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (form.email === "" || form.password === "") {
      setError("Please fill in email and password.");
      setLoading(false);
      return;
    }

    console.log("Form Data:", form);
    await signIn("credentials", {
      redirect: true,
      email: form.email,
      password: form.password,
      callbackUrl: "/",
    });

    console.log("SignIn Data:", signInData);

    if (signInData.error) {
      setError(signInData.error);
    } else {
      // setSuccess("Login successful!");
      // redirect("/");
    }
    setLoading(false);
  };

  // useEffect(() => {
  //   if (status === "authenticated") {
  //     router.replace("/"); // redirect to home if already logged in
  //   }
  // }, [status, router]);

  return (
    <div className="flex items-center justify-center min-xl:pr-[200px] min-h-screen">
      <div className="max-lg:hidden min-lg:w-[60%]">
        <Link href="#">
          <Image
            src={login_banner}
            alt="login banner"
            className="h-auto w-[1000px]"
          />
        </Link>
      </div>
      <div className="w-[100%] max-md:mt-30 max-xl:mx-[20px] min-lg:w-[40%] max-w-md mx-auto">
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
