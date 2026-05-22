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
            Everything you need to know about visiting Urban Treats Collective
            across our three locations.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Do you offer parking
            </h2>
            <p>
              Sydney and Melbourne locations have street parking nearby. Perth
              has dedicated lot parking. Check your location page for details.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What about public transport
            </h2>
            <p>
              All three stores sit near major transit hubs. Sydney is steps from
              the station. Melbourne and Perth are equally accessible by bus and
              train.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Do you deliver outside the city
            </h2>
            <p>
              We deliver within 5 km of each location. Pickup is always
              available. Order ahead through the menu page for fastest service.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Are you wheelchair accessible
            </h2>
            <p>
              Yes. All three locations meet accessibility standards. Accessible
              restrooms and seating are available at every store.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What are your opening hours
            </h2>
            <p>
              We open at 8 AM daily and close at 10 PM. Hours may vary slightly
              by location. Check the store page for exact times.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Need more help
          </h4>
          <p className="md:text-md">Reach out to our team below.</p>
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
