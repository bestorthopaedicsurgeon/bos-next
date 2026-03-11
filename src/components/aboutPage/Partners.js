import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Partners = () => {
  return (
    <section className="mb-40">
      <div className="bg-primary flex w-full  flex-col items-center justify-center py-16 px-8">
        <h1 className="font-syne text-primary-foreground">
          Feel Something Wrong With Your Bones?
        </h1>
        <p className="text-primary-foreground text-center">
        Bone pain, stiffness, or unusual swelling could be early warning signs of an underlying condition. Don’t delay—consult a specialist today and protect your mobility.
        </p>
        <Button className="mt-8" variant="primaryForeground" size="primaryForeground" asChild>
          <Link href="/surgeons?scroll=section">
            Get Consultation
          </Link>
        </Button>
      </div>
    </section>
  );
};
