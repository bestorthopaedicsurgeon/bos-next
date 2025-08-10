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
import { toast } from "sonner";

const Page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [form, setForm] = useState({ email: "", password: "" });
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Load remembered credentials on component mount
  useEffect(() => {
    try {
      const rememberedData = localStorage.getItem("rememberMeData");
      
      if (rememberedData) {
        const parsedData = JSON.parse(rememberedData);
        const { email, password, rememberMe: remembered } = parsedData;
        
        if (remembered && email && password) {
          setForm({ email: email, password: password });
          setRememberMe(true);
        }
      }
    } catch (error) {
      console.error("Error loading remembered data:", error);
      // Clear corrupted data
      try {
        localStorage.removeItem("rememberMeData");
      } catch (e) {
        console.error("Error clearing corrupted data:", e);
      }
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (form.email === "" || form.password === "") {
      setError("Please fill in email and password.");
      setLoading(false);
      return;
    }

    console.log("Form Data:", form);
    
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: form.email,
        password: form.password,
        callbackUrl: "/",
      });

      if (result?.error) {
        setError(result.error);
      } else if (result?.ok) {
        // Handle remember me functionality
        try {
          if (rememberMe) {
            // Save credentials to localStorage
            const dataToRemember = {
              email: form.email,
              password: form.password,
              rememberMe: true,
            };
            localStorage.setItem("rememberMeData", JSON.stringify(dataToRemember));
          } else {
            // Clear remembered data if remember me is unchecked
            localStorage.removeItem("rememberMeData");
          }
        } catch (error) {
          console.error("Error handling remember me data:", error);
          // Continue with login even if localStorage fails
        }
        
        toast.success("Login successful!");
        router.push("/");
      }
    } catch (error) {
      setError("An error occurred during login.");
      console.error("Login error:", error);
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
          subTxt="Don't have an account?"
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
        <div className="flex items-center space-x-2 mt-4">
          <Checkbox 
            id="rememberMe" 
            checked={rememberMe}
            onCheckedChange={(checked) => setRememberMe(checked)}
          />
          <label htmlFor="rememberMe" className="text-sm text-gray-600 cursor-pointer">
            Remember me
          </label>
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
