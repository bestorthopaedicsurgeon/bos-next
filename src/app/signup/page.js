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
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import OtpVerification from "@/components/auth/OtpVerification";

const Page = () => {
  const [formData, setFormData] = useState({
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhoneChange = (phone) => {
    setFormData(prev => ({
      ...prev,
      phone: `+${phone}`
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

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
        router.push(formData.role === "DOCTOR" ? "/doctor/registration" : "/");
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
          <RadioGroup
            value={formData.role}
            onValueChange={(value) =>
              setFormData(prev => ({ ...prev, role: value }))
            }
            className="m-auto mt-[40px] flex items-center justify-center gap-[40px]"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="PATIENT" id="r1" />
              <label htmlFor="r1" className="cursor-pointer">Patient</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="DOCTOR" id="r2" />
              <label htmlFor="r2" className="cursor-pointer">Doctor</label>
            </div>
          </RadioGroup>

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
          <SocialLogin headerTxt="" />
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