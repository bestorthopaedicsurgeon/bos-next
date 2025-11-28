"use client";
import React, { useState } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import InputField from "@components/reusable/inputField";
import CustomBtn from "@components/reusable/customBtn";

const ForgotPasswordModal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1); // 1: Email, 2: OTP
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleOpenChange = (open) => {
    setIsOpen(open);
    if (!open) {
      // Reset state when closed
      setTimeout(() => {
        setStep(1);
        setEmail("");
        setOtp("");
        setError("");
        setSuccessMessage("");
      }, 300);
    }
  };

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!email) {
      setError("Please enter your email address.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("OTP sent to your email!");
        setStep(2);
      } else {
        setError(data.error || "Failed to send OTP.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!otp) {
      setError("Please enter the OTP.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccessMessage("Password reset successful! Please check your email for the new password.");
        toast.success("Password reset successful!");
        // Close modal after a delay
        setTimeout(() => {
          setIsOpen(false);
        }, 3000);
      } else {
        setError(data.error || "Failed to verify OTP.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-primary">
            {step === 1 ? "Forgot Password" : "Verify OTP"}
          </DialogTitle>
          <DialogDescription className="text-center text-gray-600">
            {step === 1 
              ? "Enter your email address to receive a verification code." 
              : `Enter the 6-digit code sent to ${email}`
            }
          </DialogDescription>
        </DialogHeader>

        {successMessage ? (
          <div className="p-4 bg-green-100 text-green-700 rounded-md text-center">
            {successMessage}
          </div>
        ) : (
          <>
            {step === 1 ? (
              <div className="space-y-4 mt-4">
                <InputField
                  placeholder="Enter your email"
                  name="email"
                  inputType="email"
                  label="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                
                <div className="pt-2">
                  <CustomBtn
                    btnText={loading ? "Sending..." : "Send OTP"}
                    border="md"
                    width="100%"
                    disabled={loading}
                    onClick={handleSendOTP}
                    type="button"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-4 mt-4">
                <InputField
                  placeholder="Enter 6-digit OTP"
                  name="otp"
                  inputType="text"
                  label="One-Time Password"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                
                <div className="pt-2">
                  <CustomBtn
                    btnText={loading ? "Verifying..." : "Verify & Reset Password"}
                    border="md"
                    width="100%"
                    disabled={loading}
                    onClick={handleVerifyOTP}
                    type="button"
                  />
                </div>
                
                <button 
                  type="button"
                  onClick={() => setStep(1)}
                  className="mt-2 text-sm text-gray-500 hover:text-gray-700 underline w-full text-center"
                >
                  Change Email
                </button>
              </div>
            )}

            {error && <div className="mt-4 text-red-500 text-center text-sm">{error}</div>}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ForgotPasswordModal;
