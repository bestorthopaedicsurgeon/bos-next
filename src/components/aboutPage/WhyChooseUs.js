import Image from "next/image";
import React from "react";

export const WhyChooseUs = () => {
  return (
    <section className="py-40">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-8 px-4 text-center lg:items-start lg:text-left">
          <div>
            <h1 className="font-syne text-primary mb-4">Why Choose Us?</h1>
          </div>
          <div>
            <h3 className="text-primary mb-4 text-2xl">
              Reliable and reviewed
            </h3>
            <p className="text-sm text-neutral-700">
              Doctors listed are reviewed by patients, so you can book with
              confidence.
            </p>
          </div>
          <div>
            <h3 className="text-primary mb-4 text-2xl">
              Location-Based Search
            </h3>
            <p className="text-sm text-neutral-700">
              Find doctors near you or in your preferred city or neighborhood by
              booking an appointment to the preffered doctor.
            </p>
          </div>
          <div>
            <h3 className="text-primary mb-4 text-2xl">
              Seamless Appointment Booking
            </h3>
            <p className="text-sm text-neutral-700">
              Skip the long phone calls — book your doctor with just a few
              clicks by choosing your suitable day and time.
            </p>
          </div>
          <div>
            <h3 className="text-primary mb-4 text-2xl">
              Transparency in Healthcare
            </h3>
            <p className="text-sm text-neutral-700">
              Our focus is on helping patients make informed choices based on
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
