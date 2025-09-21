import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TrendingUp, Users, Shield, CheckCircle } from "lucide-react";

export const CallToAction = () => {
  const benefits = [
    "Increase your online presence",
    "Support better patient access", 
    "Strengthen trust in Orthopaedic care"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary to-primary-hover text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-syne text-3xl md:text-4xl mb-6">
            Join WA &apos;s Leading Orthopaedic Directory Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Be part of a network that truly understands your specialty.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center gap-3 bg-white/10 rounded-lg p-4">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mb-8 flex gap-4 justify-center">
            <Link href="/doctor/registration">
              <Button 
                variant="primaryForeground" 
                size="lg" 
                // className="mr-4 mb-4 text-lg px-8 py-3"
              >
                Claim or Create Your Profile Now
              </Button>
            </Link>
            <Link href="/contactUs">
              <Button 
                variant="primaryForeground" 
                size="lg" 
                // className="mb-4 text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary"
              >
                Contact Support
              </Button>
            </Link>
          </div>

          <div className="border-t border-white/20 pt-8">
            <h3 className="font-bold text-lg mb-4">Welcome Message for New Surgeons</h3>
            <div className="bg-white/10 rounded-lg p-6 text-left max-w-2xl mx-auto">
              <h4 className="font-bold mb-3">Welcome to BOS – Your Profile Is Live!</h4>
              <p className="mb-4 text-sm opacity-90">
                Thank you for joining BOS, Western Australia &apos;s only directory dedicated exclusively to Orthopaedic surgeons.
              </p>
              <p className="mb-4 text-sm opacity-90">
                Your profile is now live and accessible to patients searching for trusted orthopaedic care. 
                You &apos;re now part of a growing network of specialists committed to improving mobility and musculoskeletal health across WA.
              </p>
              <div className="text-sm opacity-80">
                <p><strong>📧 Email:</strong> support@bestorthopaedicsurgeon.com</p>
                <p><strong>📞 Phone:</strong> 1300-ORTHO-WA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
