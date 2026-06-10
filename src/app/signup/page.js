"use client";
import { React, useState } from "react";
import InputField from "@components/reusable/inputField";
import { input } from "@data/input.js";
import CustomBtn from "@components/reusable/customBtn";
import { Checkbox } from "@/components/ui/checkbox";
import SocialLogin from "@/components/reusable/socialLogin";
import WelcomeTxt from "@/components/reusable/welcomeTxt";
import login_banner from "../../../public/login_banner.png";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import OtpVerification from "@/components/auth/OtpVerification";
import { useSanitizedForm } from "@/hooks/useSanitizedForm";
import { User, Stethoscope } from "lucide-react";

const Page = () => {
  const [formData, setFormData, handleInputChange] = useSanitizedForm({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "PATIENT",
  });
  const [loading, setLoading] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const hasMinLength = formData.password.length >= 8;
  const hasCapital = /[A-Z]/.test(formData.password);
  const hasNumber = /[0-9]/.test(formData.password);

  const handlePhoneChange = (phone) => {
    setFormData(prev => ({
      ...prev,
      phone: `+${phone}`
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Password validation: at least 8 characters, at least 1 uppercase letter, at least 1 number
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      toast.error("Password must be at least 8 characters long and contain at least one uppercase letter and one number.");
      setLoading(false);
      return;
    }

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Registration failed");
      }

      // Show OTP modal after successful registration
      setShowOtpModal(true);
      toast.success("Verification code sent to your email");
    } catch (err) {
      toast.error(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (otp) => {
    setOtpLoading(true);
    try {
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          otp,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Verification failed");
      }

      // Sign in the user after successful verification
      const signInResult = await signIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });

      if (signInResult?.ok) {
        toast.success("Account verified successfully!");
        const defaultCallback = formData.role === "DOCTOR" ? "/doctor/registration" : "/";
        const callbackUrl = searchParams.get("callbackUrl") || defaultCallback;
        router.push(callbackUrl);
      } else {
        throw new Error("Failed to sign in after verification");
      }
    } catch (err) {
      toast.error(err.message || "Failed to verify OTP");
      throw err;
    } finally {
      setOtpLoading(false);
    }
  };

  const handleResendOtp = async () => {
    try {
      const res = await fetch("/api/resend-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.email }),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Failed to resend OTP");
      }
      toast.success("New OTP sent to your email");
    } catch (err) {
      toast.error(err.message);
      throw err;
    }
  };

  return (
    <div className="flex items-center justify-center min-xl:pr-[170px]">
      {/* Left Side - Banner */}
      <div className="max-lg:hidden min-lg:w-[65%]">
        <Link href="#" className="h-full">
          <Image
            src={login_banner}
            alt="login banner"
            className="h-[990px] w-full object-cover"
          />
        </Link>
      </div>

      {/* Right Side - Form */}
      <div className="w-[100%] max-md:mt-30 max-xl:mx-[20px] min-lg:w-[35%]">
        <WelcomeTxt
          header="Sign up"
          cta="Login"
          ctaLink="/login"
          subTxt="Already have an account ?"
          color="--primary"
        />

        <form onSubmit={handleSignUp}>
          <div className="flex w-full gap-5 max-lg:flex-wrap mt-6">
            <div className="max-lg:w-full min-lg:w-[50%]">
              <InputField
                placeholder="John"
                name="firstName"
                inputType="text"
                label="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="max-lg:w-full min-lg:w-[50%]">
              <InputField
                placeholder="Doe"
                name="lastName"
                inputType="text"
                label="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <InputField
              placeholder="example@email.com"
              name="email"
              type="email"
              label="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <PhoneInput
              country={'au'}
              value={formData.phone.replace('+', '')}
              onChange={handlePhoneChange}
              inputClass="w-full h-10 px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              containerClass="w-full"
              inputStyle={{
                width: "100%",
                height: "40px",
                fontSize: "14px",
              }}
              required
            />
          </div>

          <div className="mt-6">
            <InputField
              placeholder="••••••••"
              name="password"
              inputType="password"
              label="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
              minLength={8}
            />
          </div>

          <div className="mt-6">
            <InputField
              placeholder="••••••••"
              name="confirmPassword"
              inputType="password"
              label="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
              minLength={8}
            />
          </div>

          {/* Password Validation Checklist */}
          {formData.password && (
            <div className="mt-3 text-xs space-y-1.5 bg-gray-50 p-3.5 rounded-lg border border-gray-200">
              <p className="text-gray-500 font-semibold mb-1">Password requirements:</p>
              <div className="flex items-center gap-1.5">
                <span className={hasMinLength ? "text-green-600 font-semibold" : "text-gray-400"}>
                  {hasMinLength ? "✓" : "○"} At least 8 characters
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className={hasCapital ? "text-green-600 font-semibold" : "text-gray-400"}>
                  {hasCapital ? "✓" : "○"} At least one capital letter (A-Z)
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className={hasNumber ? "text-green-600 font-semibold" : "text-gray-400"}>
                  {hasNumber ? "✓" : "○"} At least one number (0-9)
                </span>
              </div>
            </div>
          )}

          {/* Role Selection */}
          <div className="mt-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Select Your Role <span className="text-red-500">*</span>
            </label>
            <div className="flex w-full gap-4">
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, role: "PATIENT" }))}
                className={`flex-1 flex flex-col items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  formData.role === "PATIENT"
                    ? "border-primary bg-primary/5 text-primary shadow-sm font-semibold"
                    : "border-gray-200 hover:border-gray-300 text-gray-600 bg-white"
                }`}
              >
                <User className="h-6 w-6 mb-2" />
                <span className="text-sm">Patient</span>
              </button>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, role: "DOCTOR" }))}
                className={`flex-1 flex flex-col items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  formData.role === "DOCTOR"
                    ? "border-primary bg-primary/5 text-primary shadow-sm font-semibold"
                    : "border-gray-200 hover:border-gray-300 text-gray-600 bg-white"
                }`}
              >
                <Stethoscope className="h-6 w-6 mb-2" />
                <span className="text-sm">Doctor</span>
              </button>
            </div>
          </div>

          <div className="mt-8">
            <CustomBtn
              btnText={loading ? "Processing..." : "Sign Up"}
              border="md"
              width="100%"
              type="submit"
              disabled={loading}
            />
          </div>

          <div className="flex items-center space-x-2 mt-4">
            <Checkbox id="terms" required />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the Terms & Conditions and Privacy Policy
            </label>
          </div>
        </form>

        <div className="my-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>
          <SocialLogin headerTxt="" role={formData.role} />
        </div>
      </div>

      {/* OTP Verification Modal */}
      <OtpVerification
        isOpen={showOtpModal}
        onClose={() => setShowOtpModal(false)}
        email={formData.email}
        onVerify={handleVerifyOtp}
        onResend={handleResendOtp}
        loading={otpLoading}
      />
    </div>
  );
};

export default Page;