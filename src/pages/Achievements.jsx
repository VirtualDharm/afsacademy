import React, { useState } from 'react';
import '../App.css';

// 1. All achievement data is consolidated into a single array of objects.
const achievementsData = [
  // Page 1
  {
    imgSrc: "/media/afs_league.jpg",
    alt: "AFS Basketball League",
    title: "AFS Basketball League",
    description: "We proudly organized the biggest basketball league in Lucknow, bringing together 110 teams from all over Uttar Pradesh. The league featured many national and international players, making it a grand success.",
    tag: "Championship",
    icon: "star",
  },
  {
    imgSrc: "/media/district_level.jpg",
    alt: "Competitive Exposure for Our Players!",
    title: "Competitive Exposure for Our Players!",
    description: "We regularly organize district-level and inter-academy tournaments, providing our players with valuable game experience and competition exposure.",
    tag: "Player Development",
    icon: "users",
  },
  {
    imgSrc: "/media/sponsers1.jpg",
    alt: "Proud Sponsors of Senior State Championship 2024",
    title: "Proud Sponsors of Senior State Championship 2024",
    description: "We are honored to have sponsored official T-shirts for the Senior State Basketball Championship 2024 held in Kanpur.",
    tag: "Sponsorships",
    icon: "star",
  },
  {
    imgSrc: "/media/decathalon.jpg",
    alt: "Decathlon as Our Sports Partner",
    title: "Decathlon as Our Sports Partner",
    description: "We are proud to have Decathlon as our official sports partner, providing high-quality equipment and support to enhance the training experience.",
    tag: "Sponsorships",
    icon: "star",
  },
  {
    imgSrc: "/media/alumni.jpg",
    alt: "Rising Stars of AFS Academy",
    title: "Rising Stars of AFS Academy",
    description: "We are proud to announce that 15-20 players from our academy are representing state and national championships.",
    tag: "Alumni Success",
    icon: "medal",
  },
  {
    imgSrc: "/media/navya_02.jpg",
    alt: "Navya Singh's Journey!",
    title: "Navya Singh's Journey!",
    description: "Navya Singh has been consistently representing the U.P. team and even secured a spot in the Under-17 Indian team tryouts.",
    tag: "Success Stories",
    icon: "star",
  },
  // Page 2
  {
    imgSrc: "/media/inbl.jpg",
    alt: "Winners's Indian National Basketball League",
    title: "Winners's Indian National Basketball League",
    description: "AFS Academy team took 1st place in the Indian National Basketball League.",
    tag: "Competition",
    icon: "star",
  },
  {
    imgSrc: "/media/lucknow_team.jpg",
    alt: "Head Coach Lucknow Team",
    title: "Head Coach Lucknow Team",
    description: "The head coach of the Lucknow team from 2021 up to the present day.",
    tag: "Mentorship",
    icon: "star",
  },
];

const ITEMS_PER_PAGE = 6;

// A reusable Icon component to avoid repeating SVG code
const Icon = ({ name, ...props }) => {
  const icons = {
    star: <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></>,
    medal: <><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"></path><path d="M11 12 5.12 2.2"></path><path d="m13 12 5.88-9.8"></path><path d="M8 7h8"></path><circle cx="12" cy="17" r="5"></circle><path d="M12 18v-2h-.5"></path></>,
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {icons[name]}
    </svg>
  );
};

// A reusable Card component
const AchievementCard = ({ imgSrc, alt, title, description, tag, icon }) => (
  <div className="card-hover glass-card rounded-xl overflow-hidden flex flex-col">
    <div className="aspect-video relative overflow-hidden">
      <img src={imgSrc} alt={alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute top-3 right-3 p-2 rounded-full bg-afs-dark/80 backdrop-blur-sm">
        <Icon name={icon} className="lucide text-afs-orange" />
      </div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-white/70 mb-3 flex-grow">{description}</p>
      <span className="text-xs py-1 px-2 rounded-full bg-white/10 text-white/80 mt-auto self-start">{tag}</span>
    </div>
  </div>
);

function Achievements() {
  // 2. State to manage the current page number
  const [currentPage, setCurrentPage] = useState(1);

  // 3. Calculate pagination logic
  const totalPages = Math.ceil(achievementsData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentAchievements = achievementsData.slice(startIndex, endIndex);

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Page Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full text-xs uppercase tracking-wider mb-3 bg-afs-orange/20 text-afs-orange border border-afs-orange/10">
            Our Success
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 afs-heading">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-afs-orange to-afs-red">
              Academy
            </span>{" "}
            Achievements
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            A timeline of AFS Academy's milestones, championships, and player
            development successes that demonstrate our commitment to basketball
            excellence.
          </p>
        </div>

        {/* 4. Grid of Achievement Cards - dynamically rendered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentAchievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} />
          ))}
        </div>

        {/* 5. Pagination Controls - now fully functional */}
        <nav role="navigation" aria-label="pagination" className="mx-auto flex w-full justify-center mt-12">
          <ul className="flex flex-row items-center gap-1">
            {currentPage > 1 && (
              <li>
                <button onClick={() => setCurrentPage(currentPage - 1)} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 gap-1 pl-2.5 cursor-pointer hover:bg-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left h-4 w-4"><path d="m15 18-6-6 6-6"></path></svg>
                  <span>Previous</span>
                </button>
              </li>
            )}
            {[...Array(totalPages)].map((_, pageIndex) => {
              const pageNumber = pageIndex + 1;
              return (
                <li key={pageNumber}>
                  <button
                    onClick={() => setCurrentPage(pageNumber)}
                    aria-current={currentPage === pageNumber ? "page" : undefined}
                    className={`inline-flex items-center justify-center h-10 w-10 rounded-md text-sm font-medium cursor-pointer transition-colors ${
                      currentPage === pageNumber
                        ? "border border-input bg-background text-afs-orange"
                        : "hover:bg-white/10"
                    }`}
                  >
                    {pageNumber}
                  </button>
                </li>
              );
            })}
            {currentPage < totalPages && (
              <li>
                <button onClick={() => setCurrentPage(currentPage + 1)} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 gap-1 pr-2.5 cursor-pointer hover:bg-white/10" aria-label="Go to next page">
                  <span>Next</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4"><path d="m9 18 6-6-6-6"></path></svg>
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Achievements;