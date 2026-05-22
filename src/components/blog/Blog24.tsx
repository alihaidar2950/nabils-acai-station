"use client";

import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import React, { useState } from "react";
import { RxChevronRight } from "react-icons/rx";

const useRelume = ({ defaultValue }: { defaultValue: string }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const isActive = (tabValue: string) => {
    return activeTab === tabValue ? 1 : 0;
  };

  return {
    activeTab,
    setActiveTab,
    isActive,
  };
};

export function Blog24() {
  const useActive = useRelume({ defaultValue: "view-all" });
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Stories</p>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              What makes it matter
            </h1>
            <p className="md:text-md">The craft behind every plate</p>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <div className="rb-12 mb-14 grid grid-cols-1 items-center border border-border-primary md:mb-16 md:grid-cols-2">
            <a href="#" className="size-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="aspect-[8/6] size-full object-cover"
              />
            </a>
            <div className="flex h-full flex-col items-start justify-between px-5 py-6 md:p-8 lg:p-12">
              <div className="flex h-full flex-col items-start justify-start">
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Seasonal
                  </p>
                  <p className="inline text-sm font-semibold">7 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h3 className="mb-2 text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
                    Stone fruit and cream, done right
                  </h3>
                </a>
                <p>Why summer specials taste like they should</p>
              </div>
              <Button
                title="Read more"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-6 flex items-center justify-center gap-x-2"
              >
                Read more
              </Button>
            </div>
          </div>
          <Tabs
            value={useActive.activeTab}
            onValueChange={useActive.setActiveTab}
            className="flex flex-col justify-start"
          >
            <TabsList className="no-scrollbar mb-12 ml-[-5vw] flex w-screen items-center overflow-auto pl-[5vw] md:mb-16 md:ml-0 md:w-full md:overflow-hidden md:pl-0">
              <TabsTrigger
                value="view-all"
                className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
              >
                View all
              </TabsTrigger>
              <TabsTrigger
                value="category-one"
                className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
              >
                Seasonal
              </TabsTrigger>
              <TabsTrigger
                value="category-two"
                className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
              >
                Kitchen
              </TabsTrigger>
              <TabsTrigger
                value="category-three"
                className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
              >
                Craft
              </TabsTrigger>
              <TabsTrigger
                value="category-four"
                className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
              >
                Stories
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="view-all"
              className="data-[state=active]:animate-tabs"
            >
              <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-2">
                <div className="flex size-full flex-col items-start justify-start border border-border-primary">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="rb-4 mb-4 flex w-full items-center justify-start">
                      <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                        Kitchen
                      </p>
                      <p className="inline text-sm font-semibold">6 min read</p>
                    </div>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        How we source our chocolate
                      </h2>
                    </a>
                    <p>The difference between good and honest</p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-6 flex items-center justify-center gap-x-2"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
                <div className="flex size-full flex-col items-start justify-start border border-border-primary">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="rb-4 mb-4 flex w-full items-center justify-start">
                      <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                        Craft
                      </p>
                      <p className="inline text-sm font-semibold">5 min read</p>
                    </div>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        The acai bowl that started it all
                      </h2>
                    </a>
                    <p>A story about obsession and berries</p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-6 flex items-center justify-center gap-x-2"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
                <div className="flex size-full flex-col items-start justify-start border border-border-primary">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="rb-4 mb-4 flex w-full items-center justify-start">
                      <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                        Stories
                      </p>
                      <p className="inline text-sm font-semibold">8 min read</p>
                    </div>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        Three cities, one vision
                      </h2>
                    </a>
                    <p>How Urban Treats Collective grew</p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-6 flex items-center justify-center gap-x-2"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
                <div className="flex size-full flex-col items-start justify-start border border-border-primary">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="rb-4 mb-4 flex w-full items-center justify-start">
                      <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                        Seasonal
                      </p>
                      <p className="inline text-sm font-semibold">4 min read</p>
                    </div>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        Winter warmth in a waffle
                      </h2>
                    </a>
                    <p>Comfort food done with intention</p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-6 flex items-center justify-center gap-x-2"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="category-one"
              className="data-[state=active]:animate-tabs"
            >
              <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-2">
                <div className="flex size-full flex-col items-start justify-start border border-border-primary">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="rb-4 mb-4 flex w-full items-center justify-start">
                      <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                        Kitchen
                      </p>
                      <p className="inline text-sm font-semibold">6 min read</p>
                    </div>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        How we source our chocolate
                      </h2>
                    </a>
                    <p>The difference between good and honest</p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-6 flex items-center justify-center gap-x-2"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
                <div className="flex size-full flex-col items-start justify-start border border-border-primary">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="rb-4 mb-4 flex w-full items-center justify-start">
                      <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                        Craft
                      </p>
                      <p className="inline text-sm font-semibold">5 min read</p>
                    </div>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        The acai bowl that started it all
                      </h2>
                    </a>
                    <p>A story about obsession and berries</p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-6 flex items-center justify-center gap-x-2"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
                <div className="flex size-full flex-col items-start justify-start border border-border-primary">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="rb-4 mb-4 flex w-full items-center justify-start">
                      <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                        Stories
                      </p>
                      <p className="inline text-sm font-semibold">8 min read</p>
                    </div>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        Three cities, one vision
                      </h2>
                    </a>
                    <p>How Urban Treats Collective grew</p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-6 flex items-center justify-center gap-x-2"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
                <div className="flex size-full flex-col items-start justify-start border border-border-primary">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="rb-4 mb-4 flex w-full items-center justify-start">
                      <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                        Seasonal
                      </p>
                      <p className="inline text-sm font-semibold">4 min read</p>
                    </div>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        Winter warmth in a waffle
                      </h2>
                    </a>
                    <p>Comfort food done with intention</p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-6 flex items-center justify-center gap-x-2"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="category-two"
              className="data-[state=active]:animate-tabs"
            >
              <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-2">
                <div className="flex size-full flex-col items-start justify-start border border-border-primary">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="rb-4 mb-4 flex w-full items-center justify-start">
                      <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                        Kitchen
                      </p>
                      <p className="inline text-sm font-semibold">6 min read</p>
                    </div>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        How we source our chocolate
                      </h2>
                    </a>
                    <p>The difference between good and honest</p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-6 flex items-center justify-center gap-x-2"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
                <div className="flex size-full flex-col items-start justify-start border border-border-primary">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="rb-4 mb-4 flex w-full items-center justify-start">
                      <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                        Craft
                      </p>
                      <p className="inline text-sm font-semibold">5 min read</p>
                    </div>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        The acai bowl that started it all
                      </h2>
                    </a>
                    <p>A story about obsession and berries</p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-6 flex items-center justify-center gap-x-2"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
                <div className="flex size-full flex-col items-start justify-start border border-border-primary">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="rb-4 mb-4 flex w-full items-center justify-start">
                      <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                        Stories
                      </p>
                      <p className="inline text-sm font-semibold">8 min read</p>
                    </div>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        Three cities, one vision
                      </h2>
                    </a>
                    <p>How Urban Treats Collective grew</p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-6 flex items-center justify-center gap-x-2"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
                <div className="flex size-full flex-col items-start justify-start border border-border-primary">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="rb-4 mb-4 flex w-full items-center justify-start">
                      <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                        Seasonal
                      </p>
                      <p className="inline text-sm font-semibold">4 min read</p>
                    </div>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        Winter warmth in a waffle
                      </h2>
                    </a>
                    <p>Comfort food done with intention</p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-6 flex items-center justify-center gap-x-2"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="category-three"
              className="data-[state=active]:animate-tabs"
            >
              <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-2">
                <div className="flex size-full flex-col items-start justify-start border border-border-primary">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="rb-4 mb-4 flex w-full items-center justify-start">
                      <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                        Kitchen
                      </p>
                      <p className="inline text-sm font-semibold">6 min read</p>
                    </div>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        How we source our chocolate
                      </h2>
                    </a>
                    <p>The difference between good and honest</p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-6 flex items-center justify-center gap-x-2"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
                <div className="flex size-full flex-col items-start justify-start border border-border-primary">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="rb-4 mb-4 flex w-full items-center justify-start">
                      <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                        Craft
                      </p>
                      <p className="inline text-sm font-semibold">5 min read</p>
                    </div>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        The acai bowl that started it all
                      </h2>
                    </a>
                    <p>A story about obsession and berries</p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-6 flex items-center justify-center gap-x-2"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
                <div className="flex size-full flex-col items-start justify-start border border-border-primary">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="rb-4 mb-4 flex w-full items-center justify-start">
                      <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                        Stories
                      </p>
                      <p className="inline text-sm font-semibold">8 min read</p>
                    </div>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        Three cities, one vision
                      </h2>
                    </a>
                    <p>How Urban Treats Collective grew</p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-6 flex items-center justify-center gap-x-2"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
                <div className="flex size-full flex-col items-start justify-start border border-border-primary">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="rb-4 mb-4 flex w-full items-center justify-start">
                      <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                        Seasonal
                      </p>
                      <p className="inline text-sm font-semibold">4 min read</p>
                    </div>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        Winter warmth in a waffle
                      </h2>
                    </a>
                    <p>Comfort food done with intention</p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-6 flex items-center justify-center gap-x-2"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="category-four"
              className="data-[state=active]:animate-tabs"
            >
              <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-2">
                <div className="flex size-full flex-col items-start justify-start border border-border-primary">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="rb-4 mb-4 flex w-full items-center justify-start">
                      <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                        Kitchen
                      </p>
                      <p className="inline text-sm font-semibold">6 min read</p>
                    </div>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        How we source our chocolate
                      </h2>
                    </a>
                    <p>The difference between good and honest</p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-6 flex items-center justify-center gap-x-2"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
                <div className="flex size-full flex-col items-start justify-start border border-border-primary">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="rb-4 mb-4 flex w-full items-center justify-start">
                      <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                        Craft
                      </p>
                      <p className="inline text-sm font-semibold">5 min read</p>
                    </div>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        The acai bowl that started it all
                      </h2>
                    </a>
                    <p>A story about obsession and berries</p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-6 flex items-center justify-center gap-x-2"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
                <div className="flex size-full flex-col items-start justify-start border border-border-primary">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="rb-4 mb-4 flex w-full items-center justify-start">
                      <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                        Stories
                      </p>
                      <p className="inline text-sm font-semibold">8 min read</p>
                    </div>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        Three cities, one vision
                      </h2>
                    </a>
                    <p>How Urban Treats Collective grew</p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-6 flex items-center justify-center gap-x-2"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
                <div className="flex size-full flex-col items-start justify-start border border-border-primary">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="rb-4 mb-4 flex w-full items-center justify-start">
                      <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                        Seasonal
                      </p>
                      <p className="inline text-sm font-semibold">4 min read</p>
                    </div>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        Winter warmth in a waffle
                      </h2>
                    </a>
                    <p>Comfort food done with intention</p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-6 flex items-center justify-center gap-x-2"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
