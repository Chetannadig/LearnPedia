import React, { useState } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  // Function to handle smooth scrolling
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking a link
  };

  // Function to close menu when clicking outside
  const handleClickOutside = (e) => {
    if (e.target.closest(".mobile-menu") === null) {
      setIsMenuOpen(false);
    }
  };

  return (
    <section className="hero">
      <div className="bg-white">
        {/* Header */}
        <header className="absolute inset-x-0 top-0 z-50">
          {/* Navigation Bar */}
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            {/* Logo */}
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">LearnPedia</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>

            {/* Desktop Menu Links */}
            <div className="hidden lg:flex lg:gap-x-12">
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("services");
                }}
                className="text-sm/6 font-semibold text-gray-900"
              >
                Our Services
              </a>
              <a
                href="#plans"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("plans");
                }}
                className="text-sm/6 font-semibold text-gray-900"
              >
                Plans
              </a>
              <a
                href="#placements"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("placements");
                }}
                className="text-sm/6 font-semibold text-gray-900"
              >
                Placements
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("contact");
                }}
                className="text-sm/6 font-semibold text-gray-900"
              >
                Contact Us
              </a>
            </div>

            {/* Login Button */}
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" className="text-sm/6 font-semibold text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div
              className="lg:hidden mobile-menu"
              role="dialog"
              aria-modal="true"
              onClick={handleClickOutside}
            >
              {/* Backdrop */}
              <div className="fixed inset-0 z-50 bg-black bg-opacity-50"></div>

              {/* Mobile Menu Content */}
              <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">LearnPedia</span>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                      alt=""
                    />
                  </a>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="size-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Mobile Menu Links */}
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      <a
                        href="#services"
                        onClick={(e) => {
                          e.preventDefault();
                          handleScroll("services");
                        }}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        Our Services
                      </a>
                      <a
                        href="#plans"
                        onClick={(e) => {
                          e.preventDefault();
                          handleScroll("plans");
                        }}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        Plans
                      </a>
                      <a
                        href="#placements"
                        onClick={(e) => {
                          e.preventDefault();
                          handleScroll("placements");
                        }}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        Placements
                      </a>
                      <a
                        href="#contact"
                        onClick={(e) => {
                          e.preventDefault();
                          handleScroll("contact");
                        }}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        Contact Us
                      </a>
                    </div>
                    <div className="py-6">
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        Log in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <div className="relative isolate px-6 pt-14 lg:px-8">
          {/* Background Blur Effect */}
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>

          {/* Main Content */}
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            {/* Announcement */}
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                100% Job Guaranteed Program{" "}
                <a href="#" className="font-semibold text-indigo-600">
                  <span className="absolute inset-0" aria-hidden="true"></span>
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>

            {/* Hero Text */}
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                Learn Anytime, Anywhere – Your Future Starts Here.
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                LearnPedia: Your Gateway to 100% Placement-Focused Learning! Master in-demand skills with industry-aligned courses and unlock your dream career today.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a href="#" className="text-sm/6 font-semibold text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Background Blur Effect */}
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;