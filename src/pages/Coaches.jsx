import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Make sure to import App.css if not already

const coachesData = [
  // Skating
  { name: "Miss. Pratibha Gautam", title: "Skating Coach", imageUrl: "/media/no-image.jpg" },
  { name: "Miss Swati Gupta", title: "Skating Coach", imageUrl: "/media/no-image.jpg" },
  { name: "Miss Pratibha", title: "Skating Coach", imageUrl: "/media/no-image.jpg" },
  { name: "Mr. Anshil Singh", title: "Skating Coach", imageUrl: "/media/no-image.jpg" },
  // Taekwondo
  { name: "Mr. Dharmendra Kumar", title: "Taekwondo Coach", imageUrl: "/media/coach_photo.jpg" }, // Assuming this is the director
  { name: "Mr. Jeetendra Shah", title: "Taekwondo Coach", imageUrl: "/media/no-image.jpg" },
  { name: "Mr. Sanidhya Gupta", title: "Taekwondo Coach", imageUrl: "/media/no-image.jpg" },
  { name: "Mr. Shashank Verma", title: "Taekwondo Coach", imageUrl: "/media/no-image.jpg" },
  { name: "Miss. Pratibha Yadav", title: "Taekwondo Coach", imageUrl: "/media/no-image.jpg" },
  { name: "Miss. Sakshi Rawat", title: "Taekwondo Coach", imageUrl: "/media/no-image.jpg" },
  { name: "Mr. Subham Rawat", title: "Taekwondo Coach", imageUrl: "/media/no-image.jpg" },
  { name: "Mr. Yusuf khan", title: "Taekwondo Coach", imageUrl: "/media/no-image.jpg" },
  // Gymnastics
  { name: "Mr. Pradumn Singh Yadav", title: "Gymnastics Coach", imageUrl: "/media/no-image.jpg" },
  { name: "Mr. Dheeraj", title: "Gymnastics Coach", imageUrl: "/media/no-image.jpg" },
  { name: "Mr. Utkarsh Tiwari", title: "Gymnastics Coach", imageUrl: "/media/no-image.jpg" },
  { name: "Miss. Harshita kumari", title: "Gymnastics Coach", imageUrl: "/media/no-image.jpg" },
  // Badminton
  { name: "Mr. Virendra Kumar", title: "Badminton Coach", imageUrl: "/media/no-image.jpg" },
  { name: "Mr. Aman Bajpai", title: "Badminton Coach", imageUrl: "/media/no-image.jpg" },
  { name: "Mr. Adarsh Singh", title: "Badminton Coach", imageUrl: "/media/no-image.jpg" },
  // Dance/Zumba/Aerobics
  { name: "Miss. Khusboo Rani", title: "Dance/Zumba Teacher", imageUrl: "/media/no-image.jpg" },
  { name: "Mr. Vivek Sharma", title: "Dance/Zumba Teacher", imageUrl: "/media/no-image.jpg" },
  { name: "Miss. Sidhi", title: "Dance/Zumba Teacher", imageUrl: "/media/no-image.jpg" },
  // Football
  { name: "Mr. Virendra Kumar", title: "Football Coach", imageUrl: "/media/no-image.jpg" },
  { name: "Mr. Deepak", title: "Football Coach", imageUrl: "/media/no-image.jpg" },
  // Basketball
  { name: "Mr. Shivam Sharma", title: "Basketball Coach", imageUrl: "/media/no-image.jpg" },
  { name: "Mr. Devendra", title: "Basketball Coach", imageUrl: "/media/no-image.jpg" },
  // Cricket
  { name: "Mr. Ajay Gautam", title: "Cricket Coach", imageUrl: "/media/no-image.jpg" },
  { name: "Mr. Vivek Singh", title: "Cricket Coach", imageUrl: "/media/no-image.jpg" },
  // Abacus
  { name: "Mr. Jeetendra shah", title: "Abacus Teacher", imageUrl: "/media/no-image.jpg" },
  { name: "Mrs. Deepa Arya", title: "Abacus Teacher", imageUrl: "/media/no-image.jpg" },
  // Table Tennis
  { name: "Mr. Aryan Yadav", title: "Table Tennis Coach", imageUrl: "/media/no-image.jpg" },
  { name: "Mr. Karsh Mishra", title: "Table Tennis Coach", imageUrl: "/media/no-image.jpg" },
  // Yoga
  { name: "Miss Aakancha Shukla", title: "Yoga Teacher", imageUrl: "/media/no-image.jpg" },
  { name: "Miss. Shilpa Singh", title: "Yoga Teacher", imageUrl: "/media/no-image.jpg" },
  // Lawn Tennis
  { name: "Mr. Vishal", title: "Lawn Tennis Coach", imageUrl: "/media/no-image.jpg" },
];

function Coaches() {
  const [showAll, setShowAll] = useState(false);
  const displayedCoaches = showAll ? coachesData : coachesData.slice(0, 6);

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16 reveal animated">
          <span className="inline-block py-1 px-3 rounded-full text-xs uppercase tracking-wider mb-3 bg-blippi-primary/20 text-blippi-primary border border-blippi-primary/10"> {/* UPDATED */}
            Our Team
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 afs-heading">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blippi-primary to-blippi-secondary"> {/* UPDATED */}
              Expert
            </span>{" "}
            Coaches
          </h1>
          <p className="text-blippi-grey max-w-2xl mx-auto"> {/* UPDATED */}
            Our coaching staff brings professional experience, passion, and
            proven methods to help every player reach their full potential.
          </p>
        </div>

        {/* Grid of Coach Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 mb-10">
          {/* We map over the `displayedCoaches` array to render each coach card dynamically. */}
          {displayedCoaches.map((coach, index) => (
            <div
              key={index}
              className="card-hover bg-blippi-bg-white shadow-lg overflow-hidden rounded-xl animate-fade-in relative cursor-pointer reveal animated" // UPDATED
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  src={coach.imageUrl}
                  alt={coach.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blippi-dark/90 via-transparent to-transparent"></div> {/* UPDATED */}
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-blippi-white">{coach.name}</h3> {/* UPDATED */}
                  <p className="text-blippi-secondary">{coach.title}</p> {/* UPDATED */}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* "View More / View Less" Button */}
        {coachesData.length > 6 && (
          <div className="flex justify-center mb-16 reveal animated">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="text-blippi-dark font-semibold py-2 px-4 border border-blippi-border rounded-lg hover:bg-blippi-grey flex items-center gap-2 transition-all duration-300" // UPDATED
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
          <div className="bg-blippi-grey border border-blippi-border rounded-xl p-8"> {/* UPDATED */}
            <h3 className="text-2xl font-bold mb-4 text-blippi-dark"> {/* UPDATED */}
              Join Our Coaching Team
            </h3>
            <p className="text-blippi-grey mb-6"> {/* UPDATED */}
              Peace Sports Academy is always looking for experienced coaches with a passion for developing young talent.
            </p>
            <Link className="blippi-btn" to="/contact"> {/* UPDATED */}
              Apply to Coach
              <span className="blob-inner"><span className="blobs"><span></span><span></span><span></span><span></span></span></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coaches;