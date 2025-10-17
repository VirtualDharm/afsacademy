// src/pages/Home.jsx

import React from "react";

// Import the new sequential section components
import HeroFeaturedHighlights from "./home/HeroFeaturedHighlights";
import AboutPrograms from "./home/AboutPrograms";
import ClosingContact from "./home/ClosingContact";

// This is now the main "assembler" for the homepage.
function Home() {
  return (
    <>
      <HeroFeaturedHighlights />
      <AboutPrograms />
      <ClosingContact />
    </>
  );
}

export default Home;