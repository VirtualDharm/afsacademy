// src/pages/Home.jsx

// 1. IMPORT the new hooks and the StickyFooter component
import React, { useState, useEffect, useRef } from "react";
import HeroFeaturedHighlights from "./home/HeroFeaturedHighlights";
import AboutPrograms from "./home/AboutPrograms";
import ClosingContact from "./home/ClosingContact";
import FounderMessage from "./home/FounderMessage"; 
import StickyFooter from "../components/StickyFooter"; // <-- IMPORT THIS

function Home() {
  // 2. SETUP state and ref for the sticky footer logic
  const [isFooterVisible, setFooterVisible] = useState(false);
  const founderMessageRef = useRef(null);

  // 3. ADD the useEffect hook to listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Check if the ref is attached to an element
      if (founderMessageRef.current) {
        const { bottom } = founderMessageRef.current.getBoundingClientRect();
        // If the bottom of the FounderMessage section is above the bottom of the viewport, show the footer
        if (bottom < window.innerHeight) {
          setFooterVisible(true);
        } else {
          setFooterVisible(false);
        }
      }
    };

    // Add the scroll listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // The empty array ensures this effect runs only once

  return (
    <>
      <HeroFeaturedHighlights />
      <AboutPrograms />
      
      {/* 4. WRAP the FounderMessage component in a div and attach the ref */}
      <div ref={founderMessageRef}>
        <FounderMessage />
      </div>

      <ClosingContact />
      
      {/* 5. RENDER the StickyFooter and pass the visibility state to it */}
      <StickyFooter isVisible={isFooterVisible} />
    </>
  );
}

export default Home;