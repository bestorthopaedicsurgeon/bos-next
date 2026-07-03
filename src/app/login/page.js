"use client";
import React, { useEffect, useState, Suspense } from "react";
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
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import ForgotPasswordModal from "@/components/auth/ForgotPasswordModal";
import Cookies from "js-cookie";
import { useSanitizedForm } from "@/hooks/useSanitizedForm";

const LoginPageContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rawCallbackUrl = searchParams.get("callbackUrl") || "/";
  // Only allow internal paths so a crafted link can't redirect users off-site
  const callbackUrl = rawCallbackUrl.startsWith("/") && !rawCallbackUrl.startsWith("//")
    ? rawCallbackUrl
    : "/";

  const [form, setForm, handleChange] = useSanitizedForm({ email: "", password: "" });
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Load remembered credentials from cookies on component mount
  useEffect(() => {
    const savedEmail = Cookies.get("rememberedEmail");

    if (savedEmail) {
      setForm((prev) => ({
        ...prev,
        email: savedEmail,
      }));
      setRememberMe(true);
    }
  }, [setForm]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (form.email === "" || form.password === "") {
      setError("Please fill in email and password.");
      setLoading(false);
      return;
    }


    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: form.email,
        password: form.password,
        callbackUrl: callbackUrl,
      });

      if (result?.error) {
        setError(result.error);
      } else if (result?.ok) {
        // Handle remember me functionality
        try {
          if (rememberMe) {
            // Save email to cookies (expires in 30 days)
            Cookies.set("rememberedEmail", form.email, { expires: 30 });
          } else {
            // Clear remembered data if remember me is unchecked
            Cookies.remove("rememberedEmail");
          }
        } catch (error) {
          console.error("Error handling remember me data:", error);
          // Continue with login even if cookie fails
        }

        toast.success("Login successful!");
        router.push(callbackUrl);
      }
    } catch (error) {
      setError("An error occurred during login.");
      console.error("Login error:", error);
    }

    setLoading(false);
  };

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
        <form onSubmit={handleSubmit}>
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
              inputType="text"
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



          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="rememberMe"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked)}
              />
              <label htmlFor="rememberMe" className="text-sm text-gray-600 cursor-pointer">
                Remember me
              </label>
            </div>
            <ForgotPasswordModal>
              <button type="button" className="text-sm text-[--primary] hover:underline">
                Forgot Password?
              </button>
            </ForgotPasswordModal>
          </div>

          <div
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
        </form>
        {/* input form end */}

        {/* social login */}
        <SocialLogin headerTxt="Or login with" />
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-[#83C5BE]"></div>
          <p className="text-lg text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <LoginPageContent />
    </Suspense>
  );
}
