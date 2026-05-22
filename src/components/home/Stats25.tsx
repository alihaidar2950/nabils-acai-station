"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Stats25() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">By the numbers</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              We've earned trust the honest way
            </h2>
          </div>
          <div>
            <p className="md:text-md">
              Three cities. Thousands of customers. One commitment to quality
              that doesn't bend.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn more" variant="secondary">
                Learn more
              </Button>
              <Button
                title="Explore"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Explore
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          <div className="border border-border-primary p-8">
            <p className="mb-8 text-10xl font-bold leading-[1.3] md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem]">
              12
            </p>
            <h3 className="text-md font-bold leading-[1.4] md:text-xl">
              Locations across Australia
            </h3>
            <p className="mt-2">Sydney, Melbourne, and Perth combined.</p>
          </div>
          <div className="border border-border-primary p-8">
            <p className="mb-8 text-10xl font-bold leading-[1.3] md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem]">
              4.8
            </p>
            <h3 className="text-md font-bold leading-[1.4] md:text-xl">
              Average customer rating
            </h3>
            <p className="mt-2">Rated by thousands of real visitors.</p>
          </div>
          <div className="border border-border-primary p-8">
            <p className="mb-8 text-10xl font-bold leading-[1.3] md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem]">
              50K
            </p>
            <h3 className="text-md font-bold leading-[1.4] md:text-xl">
              Treats served monthly
            </h3>
            <p className="mt-2">And counting, one bowl at a time.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
