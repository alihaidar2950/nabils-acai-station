"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Faq7() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container w-full max-w-lg">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Questions
          </h2>
          <p className="md:text-md">
            Find answers about our menu, locations, and how we work.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Do you offer vegan options?
            </h2>
            <p>
              Yes. Our acai bowls work with plant-based yogurt, and most crepes
              can be made dairy-free. Ask your server about what's available
              that day.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What's your best seller?
            </h2>
            <p>
              The classic acai bowl moves fast. Topped with granola, berries,
              and coconut, it's simple and honest. The Belgian waffles are close
              behind.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Are you open on weekends?
            </h2>
            <p>
              Every location runs seven days a week. Hours vary by suburb, so
              check your nearest store for exact times before you visit.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Do you deliver?
            </h2>
            <p>
              We partner with major delivery apps in Sydney, Melbourne, and
              Perth. Order online and we'll have it ready. Some items travel
              better than others, so check the app.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Is there parking nearby?
            </h2>
            <p>
              Most locations have street parking or nearby lots. A few are in
              shopping centers with dedicated parking. Check your store page for
              specifics.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">Reach out anytime. We're here to help.</p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
