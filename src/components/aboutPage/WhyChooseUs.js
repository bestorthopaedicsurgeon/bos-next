import Image from "next/image";
import React from "react";

export const WhyChooseUs = () => {
  return (
    <section className="py-40">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-8 px-4 text-center lg:items-start lg:text-left">
          <div>
            <h2 className="as-h1 font-syne text-primary mb-4">Why Choose Us?</h2>
          </div>
          <div>
            <h3 className="text-primary mb-4 text-2xl">
              Reliable and reviewed
            </h3>
            <p className="text-sm text-neutral-700">
              Every surgeon listed is reviewed by patients, so you can choose the best
              orthopaedic surgeon with confidence.
            </p>
          </div>
          <div>
            <h3 className="text-primary mb-4 text-2xl">
              Search by Location
            </h3>
            <p className="text-sm text-neutral-700">
              Find orthopaedic surgeons near you, in your suburb or anywhere in Western
              Australia, and book with the surgeon you prefer.
            </p>
          </div>
          <div>
            <h3 className="text-primary mb-4 text-2xl">
              Seamless Appointment Booking
            </h3>
            <p className="text-sm text-neutral-700">
              Skip the long phone calls and book your surgeon in a few clicks by
              choosing a day and time that suits you.
            </p>
          </div>
          <div>
            <h3 className="text-primary mb-4 text-2xl">
              Transparency in Healthcare
            </h3>
            <p className="text-sm text-neutral-700">
              Our focus is on helping you choose the best orthopaedic surgeon based on
              real feedback and ratings.
            </p>
          </div>
        </div>
        <Image
          src="/about/why-choose-us.jpg"
          alt="About Us"
          width={680}
          height={720}
          className="rounded-lg"
        />
      </div>
    </section>
  );
};
