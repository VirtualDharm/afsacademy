// src/pages/home/Achievements.jsx

import React, { useState } from 'react';
import '../App.css';
import { achievements as achievementsData } from "../data";

// ============================================================================
// CONSTANTS & REUSABLE COMPONENTS
// ============================================================================

/**
 * ITEMS_PER_PAGE
 * Controls how many achievement cards are displayed per page.
 */
const ITEMS_PER_PAGE = 6;

/**
 * Icon Component
 * Reusable SVG icon renderer for consistent icon usage throughout cards.
 * Accepts a `name` prop that maps to one of the predefined icon shapes.
 */
const Icon = ({ name, ...props }) => {
  const icons = {
    star: (
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </>
    ),
    medal: (
      <>
        <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"></path>
        <path d="M11 12 5.12 2.2"></path>
        <path d="m13 12 5.88-9.8"></path>
        <path d="M8 7h8"></path>
        <circle cx="12" cy="17" r="5"></circle>
        <path d="M12 18v-2h-.5"></path>
      </>
    ),
  };

  return (
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
      {...props}
    >
      {icons[name]}
    </svg>
  );
};

/**
 * AchievementCard Component
 * Displays an individual achievement entry with an image, title,
 * description, tag, and decorative icon.
 */
const AchievementCard = ({ imgSrc, alt, title, description, tag, icon }) => (
  <div className="card-hover bg-blippi-bg-grey rounded-xl overflow-hidden flex flex-col">
    {/* Image + Icon */}
    <div className="aspect-video relative overflow-hidden">
      <img
        src={imgSrc}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute top-3 right-3 p-2 rounded-full bg-blippi-dark/80 backdrop-blur-sm">
        <Icon name={icon} className="lucide text-blippi-primary" />
      </div>
    </div>

    {/* Card Content */}
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold mb-3 text-blippi-dark">{title}</h3>
      <p className="text-blippi-grey mb-3 flex-grow">{description}</p>
      <span className="text-xs py-1 px-2 rounded-full bg-white/10 text-blippi-grey mt-auto self-start">
        {tag}
      </span>
    </div>
  </div>
);

// ============================================================================
// MAIN COMPONENT: Achievements
// Description: Paginated achievements gallery that displays the academy’s
// key milestones, awards, and recognitions.
// ============================================================================
function Achievements() {
  // --------------------------------------------------------------------------
  // STATE & PAGINATION LOGIC
  // --------------------------------------------------------------------------
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(achievementsData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentAchievements = achievementsData.slice(startIndex, endIndex);

  // --------------------------------------------------------------------------
  // RENDER
  // --------------------------------------------------------------------------
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* =================================================================== */}
        {/* SECTION 1: HEADER */}
        {/* Introduces the achievements section with title and summary. */}
        {/* =================================================================== */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full text-xs uppercase tracking-wider mb-3 bg-blippi-primary/20 text-blippi-primary border border-blippi-primary/10">
            Our Success
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 afs-heading">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blippi-primary to-blippi-secondary">
              Academy
            </span>{" "}
            Achievements
          </h1>
          <p className="text-blippi-grey max-w-2xl mx-auto">
            A timeline of our milestones, championships, and player development
            successes that demonstrate our commitment to excellence in sports.
          </p>
        </div>

        {/* =================================================================== */}
        {/* SECTION 2: GRID OF ACHIEVEMENT CARDS */}
        {/* Displays paginated set of AchievementCard components. */}
        {/* =================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentAchievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} />
          ))}
        </div>

        {/* =================================================================== */}
        {/* SECTION 3: PAGINATION CONTROLS */}
        {/* Provides page navigation to view more achievements. */}
        {/* =================================================================== */}
        <nav
          role="navigation"
          aria-label="pagination"
          className="mx-auto flex w-full justify-center mt-12"
        >
          <ul className="flex flex-row items-center gap-1">
            {/* Previous Button */}
            {currentPage > 1 && (
              <li>
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 gap-1 pl-2.5 cursor-pointer hover:bg-blippi-grey"
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
                    className="lucide lucide-chevron-left h-4 w-4"
                  >
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                  <span>Previous</span>
                </button>
              </li>
            )}

            {/* Page Number Buttons */}
            {[...Array(totalPages)].map((_, pageIndex) => {
              const pageNumber = pageIndex + 1;
              return (
                <li key={pageNumber}>
                  <button
                    onClick={() => setCurrentPage(pageNumber)}
                    aria-current={currentPage === pageNumber ? "page" : undefined}
                    className={`inline-flex items-center justify-center h-10 w-10 rounded-md text-sm font-medium cursor-pointer transition-colors ${
                      currentPage === pageNumber
                        ? "border border-blippi-border bg-blippi-primary text-blippi-white"
                        : "hover:bg-blippi-grey"
                    }`}
                  >
                    {pageNumber}
                  </button>
                </li>
              );
            })}

            {/* Next Button */}
            {currentPage < totalPages && (
              <li>
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 gap-1 pr-2.5 cursor-pointer hover:bg-blippi-grey"
                  aria-label="Go to next page"
                >
                  <span>Next</span>
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
                    className="lucide lucide-chevron-right h-4 w-4"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}

// ============================================================================
export default Achievements;
