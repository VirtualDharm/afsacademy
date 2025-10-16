import React, { useState } from "react";

// Data for all coaches is stored in this array.
// This makes it easy to add, remove, or update coach information without touching the JSX.
const coachesData = [
  {
    name: "Ashwani Kumar Gupta",
    title: "Head Coach",
    imageUrl: "/media/coach_photo.jpg",
  },
  {
    name: "Abhishek Singh Bohra",
    title: "Skills Development Coach",
    imageUrl: "/media/abhishek_bohra.jpg",
  },
  {
    name: "Abhishek Gupta",
    title: "Youth Development Coach",
    imageUrl: "/media/abhishek_gupta.jpg",
  },
  {
    name: "Adnan Khan",
    title: "Strength & Conditioning",
    imageUrl: "/media/adnan.jpg",
  },
  {
    name: "Amit Chaudhary",
    title: "Defense Specialist",
    imageUrl: "/media/amit_chaud.jpg",
  },
  {
    name: "Devesh",
    title: "Coach",
    imageUrl: "/media/devesh.jpg",
  },
  {
    name: "Shashwat",
    title: "Coach",
    imageUrl: "/media/shashwat.jpg",
  },
  {
    name: "Aditya Raj",
    title: "Coach",
    imageUrl: "/media/aditya.jpg",
  },
  {
    name: "Uttam Tewari",
    title: "Coach",
    imageUrl: "/media/uttam.jpg",
  },
  {
    name: "Shubham Singh",
    title: "Coach",
    imageUrl: "/media/no-image.jpg",
  },
  {
    name: "Praveen",
    title: "Coach",
    imageUrl: "/media/no-image.jpg",
  },
  {
    name: "Vikas Pal",
    title: "Coach",
    imageUrl: "/media/no-image.jpg",
  },
  {
    name: "Yash Thapa",
    title: "Coach",
    imageUrl: "/media/no-image.jpg",
  },
  {
    name: "Vivek Yadav",
    title: "Coach",
    imageUrl: "/media/no-image.jpg",
  },
];

function Coaches() {
  // State to manage whether all coaches are shown or just a limited number.
  const [showAll, setShowAll] = useState(false);
  
  // Determine which coaches to display based on the 'showAll' state.
  const displayedCoaches = showAll ? coachesData : coachesData.slice(0, 6); // Show first 6 by default

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16 reveal animated">
          <span className="inline-block py-1 px-3 rounded-full text-xs uppercase tracking-wider mb-3 bg-afs-orange/20 text-afs-orange border border-afs-orange/10">
            Our Team
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 afs-heading">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-afs-orange to-afs-red">
              Expert
            </span>{" "}
            Coaches
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Our coaching staff brings professional experience, passion, and
            proven methods to help every player reach their full potential.
          </p>
        </div>

        {/* Grid of Coach Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 mb-10">
          {/* We map over the `displayedCoaches` array to render each coach card dynamically. */}
          {displayedCoaches.map((coach, index) => (
            <div
              key={index} // A unique key is required for each item in a list.
              className="card-hover glass-card overflow-hidden rounded-xl animate-fade-in relative cursor-pointer reveal animated"
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  src={coach.imageUrl}
                  alt={coach.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-afs-dark/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold">{coach.name}</h3>
                  <p className="text-afs-orange">{coach.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* "View More / View Less" Button */}
        {coachesData.length > 6 && ( // Only show the button if there are more coaches than the initial display count.
          <div className="flex justify-center mb-16 reveal animated">
            <button 
              onClick={() => setShowAll(!showAll)} // Toggle the 'showAll' state on click.
              className="btn-secondary flex items-center gap-2 transition-all duration-300"
            >
              {showAll ? "View Less" : "View More"}
              {showAll ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-up">
                  <path d="m18 15-6-6-6 6"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              )}
            </button>
          </div>
        )}

        {/* Call to Action: Join Our Team */}
        <div className="max-w-3xl mx-auto text-center reveal animated">
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Join Our Coaching Team
            </h3>
            <p className="text-white/70 mb-6">
              AFS Academy is always looking for experienced coaches with a
              passion for developing young basketball talent. If you have a
              background in basketball and a desire to help players improve, we'd
              love to hear from you.
            </p>
            <a className="btn-primary" href="/contact">
              Apply to Coach
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coaches;