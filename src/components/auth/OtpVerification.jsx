"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function OtpVerification({ 
  isOpen, 
  onClose, 
  email, 
  onVerify,
  onResend,
  loading = false 
}) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [countdown, setCountdown] = useState(60);
  const [isResending, setIsResending] = useState(false);

  useEffect(() => {
    let timer;
    if (countdown > 0 && isOpen) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown, isOpen]);

  const handleOtpChange = (element, index) => {
    if (isNaN(element.value)) return false;
    
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);
    
    // Auto-focus next input
    if (element.nextSibling && element.value !== "") {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      // Move to previous input on backspace
      const prevInput = e.target.previousSibling;
      if (prevInput) prevInput.focus();
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    const otpCode = otp.join("");
    if (otpCode.length !== 6) {
      toast.error("Please enter a 6-digit OTP");
      return;
    }
    await onVerify(otpCode);
  };

  const handleResendOtp = async () => {
    try {
      setIsResending(true);
      await onResend();
      setCountdown(60);
      setOtp(["", "", "", "", "", ""]);
      toast.success("New OTP sent to your email");
    } catch (error) {
      toast.error(error.message || "Failed to resend OTP");
    } finally {
      setIsResending(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">Verify Your Email</DialogTitle>
          <DialogDescription className="text-center">
            We've sent a 6-digit verification code to <span className="font-semibold">{email}</span>
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleVerify} className="space-y-6">
          <div className="flex justify-center space-x-2">
            {otp.map((data, index) => (
              <Input
                key={index}
                type="text"
                maxLength={1}
                value={data}
                onChange={(e) => handleOtpChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-12 text-center text-xl font-semibold"
                autoFocus={index === 0}
                disabled={loading}
              />
            ))}
          </div>
          
          <Button 
            type="submit" 
            className="w-full" 
            disabled={loading || otp.some(digit => !digit)}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </Button>
          
          <div className="text-center text-sm text-muted-foreground">
            Didn't receive the code?{" "}
            <button
              type="button"
              onClick={handleResendOtp}
              disabled={countdown > 0 || isResending}
              className={`font-medium text-primary ${(countdown > 0 || isResending) ? 'opacity-50 cursor-not-allowed' : 'hover:underline'}`}
            >
              {isResending ? "Sending..." : `Resend ${countdown > 0 ? `(${countdown}s)` : ''}`}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
