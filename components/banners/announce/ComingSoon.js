"use client";

import { Atropos } from "atropos/react";
// import "@styles/components/banners/comingSoon/banner.css";

const BannerSection = () => {
  return (
    <Atropos highlight={true} rotateTouch="scroll-y">
      <section className="py-8 bg-blueGray-50">
        <div className="container px-4 mx-auto">
          <div
            data-atropos-offset="-5"
            className="relative p-10 xl:py-12 xl:px-20 bg-indigo-600 overflow-hidden rounded-md"
          >
            <div data-atropos-offset="10">
              <img
                className="absolute right-0 top-0 sm:top-1/2 transform -translate-y-1/2 w-1/2 sm:w-2/3 lg:w-auto mt-12 sm:mt-0"
                src="https://shuffle.dev/uinel-assets/images/dashboard-banners/header.png"
                alt=""
              />
            </div>
            <div className="relative  sm:max-w-sm">
              <h2
                data-atropos-offset="25"
                className="mb-8 text-4xl md:text-5xl text-white font-heading font-semibold"
              >
                UP Board, We&apos;re Coming Soon.
              </h2>
              <div className="sm:max-w-max">
                <a
                  data-atropos-offset="12"
                  className="block py-5 px-7 w-full text-lg leading-3 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                  href="https://shuffle.dev/#"
                >
                  Discover
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Atropos>
  );
};

export default BannerSection;
