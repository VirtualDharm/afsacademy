// src/pages/home/HeroFeaturedHighlights.jsx

import React, { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";
import "../../App.css";

// ============================================================================
// COMPONENT: HeroFeaturedHighlights
// This component contains the Hero, Featured Training Sessions (carousel),
// and Key Highlights / Statistics sections for the homepage.
// ============================================================================
function HeroFeaturedHighlights() {
  // -------------------------------
  // Refs and State Management
  // -------------------------------
  const featuredSectionRef = useRef(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  // -------------------------------
  // Carousel Navigation Handlers
  // -------------------------------
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  // -------------------------------
  // Carousel State Sync (onSelect & reInit)
  // -------------------------------
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  // -------------------------------
  // Scroll Down Button Handler
  // -------------------------------
  const handleScrollDown = () => {
    featuredSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // -------------------------------
  // Carousel Slide Data
  // -------------------------------
  const slides = [
    { src: "/media/basketball.mp4", poster: "/media/coaches_cover.jpg" },
    { src: "/media/basketballssss_2.mp4", poster: "/media/coaches_cover.jpg" },
    { src: "/media/basketballssss_p3.mp4", poster: "/media/coaches_cover.jpg" },
    { src: "/media/basketballssss.mp4", poster: "/media/coaches_cover.jpg" },
  ];

  // ============================================================================
  // RENDER SECTION START
  // ============================================================================
  return (
    <>
      {/* ===================================================================== */}
      {/* HERO SECTION */}
      {/* Fullscreen intro with looping video background, title, CTAs, and stats */}
      {/* ===================================================================== */}
      <div className="video-container">
        <div className="absolute inset-0 z-[1] opacity-30"></div>
        <video autoPlay loop playsInline muted className="video-bg" poster="/images/basketball-poster.jpg">
          <source src="/videos/basketball-hero.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
          {/* Tagline */}
          <span className="inline-flex items-center text-sm uppercase tracking-widest mb-4 font-bold text-blippi-dark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-dot mr-2 text-blippi-primary animate-ball-bounce"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="1"></circle>
            </svg>
            Welcome to
          </span>

          {/* Main Heading */}
          <h1 className="afs-heading mb-6">
            <div className="flex items-center justify-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blippi-primary to-blippi-secondary p-3">
                Peace Sports
              </span>
              <span className="mx-2 text-blippi-dark">Academy</span>
            </div>
          </h1>

          {/* Subheading */}
          <p className="max-w-3xl mb-8 text-lg text-blippi-grey">
            Biggest Multi-Sports Club in Lucknow.
            <br />
            One Academy, Endless Opportunities.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/programs"
              className="blippi-btn inline-flex items-center gap-2 font-semibold text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-dot block"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="1" />
              </svg>
              Explore Programs
            </Link>

            <Link
              to="/coaches"
              className="inline-flex items-center gap-2 font-semibold text-blippi-dark hover:text-blippi-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-dot block"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="1" />
              </svg>
              Meet Our Coaches
            </Link>
          </div>

          {/* Quick Stats (Branches, Coaches, Students) */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 w-full max-w-4xl">
            {/* Branches */}
            <div className="bg-blippi-white-90 backdrop-blur-sm text-blippi-dark py-3 px-6 rounded-lg flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-trending-up text-blippi-primary mr-2"
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
              </svg>
              <span className="font-bold">4</span>
              <span className="ml-2 text-blippi-grey text-sm">Branches</span>
            </div>

            {/* Coaches */}
            <div className="bg-blippi-white-90 backdrop-blur-sm text-blippi-dark py-3 px-6 rounded-lg flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-award text-blippi-primary mr-2"
              >
                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                <circle cx="12" cy="8" r="6"></circle>
              </svg>
              <span className="font-bold">15</span>
              <span className="ml-2 text-blippi-grey text-sm">Certified Coaches</span>
            </div>

            {/* Students */}
            <div className="bg-blippi-white-90 backdrop-blur-sm text-blippi-dark py-3 px-6 rounded-lg flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-dot text-blippi-primary mr-2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="1"></circle>
              </svg>
              <span className="font-bold">500+</span>
              <span className="ml-2 text-blippi-grey text-sm">Students Trained</span>
            </div>
          </div>
        </div>

        {/* Scroll Down Button */}
        <button
          onClick={handleScrollDown}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-blippi-dark animate-bounce-slow z-10"
          aria-label="Scroll down"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-down"
          >
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </button>
      </div>

      {/* ===================================================================== */}
      {/* FEATURED TRAINING SESSIONS SECTION */}
      {/* Video carousel showcasing sports sessions with navigation and dots */}
      {/* ===================================================================== */}
      <section ref={featuredSectionRef} className="relative py-10 bg-blippi-bg-grey overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Heading */}
          <div className="text-center mb-10 reveal animated animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="text-blippi-dark">Featured</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blippi-primary to-blippi-secondary">
                {" "}
                Training Sessions
              </span>
            </h2>
            <p className="text-blippi-grey max-w-2xl mx-auto">
              Get a glimpse of our exciting training sessions across Taekwondo, Skating, Gymnastics, Badminton, and Zumba.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative group">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {slides.map((slide, index) => (
                  <div
                    className="min-w-0 shrink-0 grow-0 basis-full lg:basis-2/3 px-1 md:px-2"
                    key={index}
                  >
                    <div
                      className={`relative transition-all duration-500 ${
                        index === selectedIndex
                          ? "opacity-100 scale-100 z-20"
                          : "opacity-70 scale-95 blur-[1px] z-10"
                      }`}
                    >
                      <div
                        className={`p-[2px] rounded-xl animated ${
                          index === selectedIndex
                            ? "bg-blippi-primary"
                            : "bg-transparent"
                        }`}
                      >
                        <div className="rounded-lg overflow-hidden w-full h-full">
                          <video
                            src={slide.src}
                            poster={slide.poster}
                            className="w-full h-full object-cover aspect-video"
                            loop
                            playsInline
                            muted
                            autoPlay={index === selectedIndex}
                          ></video>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 h-14 w-14 rounded-full bg-gradient-to-br from-blippi-primary to-blippi-secondary text-white flex items-center justify-center transition-all duration-300 shadow-xl hover:scale-110 group-hover:opacity-100 opacity-0 md:opacity-100 border-2 border-white/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-left h-4 w-4"
              >
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
            </button>

            <button
              onClick={scrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 h-14 w-14 rounded-full bg-gradient-to-br from-blippi-primary to-blippi-secondary text-white flex items-center justify-center transition-all duration-300 shadow-xl hover:scale-110 group-hover:opacity-100 opacity-0 md:opacity-100 border-2 border-white/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right h-4 w-4"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>

            {/* Pagination Dots */}
            <div className="w-full flex justify-center mt-6 md:mt-8 md:absolute md:bottom-4 left-0 right-0 mx-auto">
              <div className="flex space-x-2 z-20 px-4 rounded-full py-2 md:py-0">
                {scrollSnaps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === selectedIndex
                        ? "w-8 bg-gradient-to-r from-blippi-primary to-blippi-secondary"
                        : "w-2.5 bg-blippi-grey"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* KEY STATISTICS SECTION */}
      {/* Performance metrics and trust indicators */}
      {/* ===================================================================== */}
      <section className="py-16 bg-blippi-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {/* Players Trained */}
            <div className="text-center reveal animated bg-blippi-bg-white shadow-sm py-6 rounded-xl">
              <div className="flex justify-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-users text-blippi-primary"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blippi-primary to-blippi-secondary">
                1,500+
              </div>
              <div className="text-blippi-grey">Players Trained</div>
            </div>

            {/* Professional Coaches */}
            <div className="text-center reveal animated bg-blippi-bg-white shadow-sm py-6 rounded-xl">
              <div className="flex justify-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-user text-blippi-primary"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blippi-primary to-blippi-secondary">
                14+
              </div>
              <div className="text-blippi-grey">Professional Coaches</div>
            </div>

            {/* Success Rate */}
            <div className="text-center reveal animated bg-blippi-bg-white shadow-sm py-6 rounded-xl">
              <div className="flex justify-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-trending-up text-blippi-primary"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blippi-primary to-blippi-secondary">
                100%
              </div>
              <div className="text-blippi-grey">Success Rate</div>
            </div>

            {/* Years of Experience */}
            <div className="text-center reveal animated bg-blippi-bg-white shadow-sm py-6 rounded-xl">
              <div className="flex justify-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-trophy text-blippi-primary"
                >
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                  <path d="M4 22h16"></path>
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                </svg>
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blippi-primary to-blippi-secondary">
                12+
              </div>
              <div className="text-blippi-grey">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ============================================================================
export default HeroFeaturedHighlights;
