"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Faq7() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container w-full max-w-lg">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Questions about our stories, updates, and how to get involved.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What's on the blog?
            </h2>
            <p>
              We write about seasonal specials, signature recipes,
              behind-the-scenes kitchen moments, and the craft that goes into
              every treat. Think stories worth reading, not just filler.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How often do you post?
            </h2>
            <p>
              New stories drop twice a month, timed with our seasonal menu
              changes and special releases. You'll always have something fresh
              to discover.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can I pitch a story?
            </h2>
            <p>
              We love collaborations and guest perspectives. Reach out through
              our contact form with your idea, and we'll take it from there.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Do you share recipes?
            </h2>
            <p>
              Sometimes. We share simplified versions of fan favorites and tips
              you can use at home. The real magic happens when you visit us in
              person.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How do I stay updated?
            </h2>
            <p>
              Subscribe to our newsletter at the top of this page. You'll get
              new posts, exclusive offers, and early access to limited specials
              before they sell out.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Need more help?
          </h4>
          <p className="md:text-md">
            Drop us a line below or visit our contact page.
          </p>
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
