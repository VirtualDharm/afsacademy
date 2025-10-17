import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { Link } from 'react-router-dom'; // Import Link for proper navigation

/* ----------------------------------------------
   Main Component
---------------------------------------------- */
export default function Programs() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Page Header */}
        <div className="text-center mb-12 sm:mb-16 reveal animated">
          <span className="inline-block py-1 px-3 rounded-full text-xs uppercase tracking-wider mb-3 bg-afs-orange/20 text-afs-orange border border-afs-orange/10">
            Training Programs
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 afs-heading">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-afs-orange to-afs-red">
              One Academy,
            </span>{" "}
            Endless Opportunities
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
            Choose from our comprehensive selection of professional training programs, each designed to build discipline, fitness, and confidence.
          </p>
        </div>

        {/* Tabs Root */}
        <Tabs.Root defaultValue="all" orientation="horizontal" className="mb-12">
          {/* Tabs List */}
          <Tabs.List
            role="tablist"
            aria-orientation="horizontal"
            className="flex h-10 items-center justify-center rounded-md p-1 bg-white/5 border border-white/10 w-max mx-auto text-muted-foreground flex-wrap"
          >
            {["all", "Skating", "Taekwondo", "Gymnastics", "Football", "More"].map(
              (tab) => (
                <Tabs.Trigger
                  key={tab}
                  value={tab}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-xs sm:text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-afs-orange data-[state=active]:to-afs-red data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                >
                  {tab === "all" ? "All Programs" : tab}
                </Tabs.Trigger>
              )
            )}
          </Tabs.List>

          {/* --- Tabs Content Panels (UNCHANGED LOGIC) --- */}
          <Tabs.Content value="all"><ProgramGrid filter="all" /></Tabs.Content>
          <Tabs.Content value="Skating"><ProgramGrid filter="Skating" /></Tabs.Content>
          <Tabs.Content value="Taekwondo"><ProgramGrid filter="Taekwondo" /></Tabs.Content>
          <Tabs.Content value="Gymnastics"><ProgramGrid filter="Gymnastics" /></Tabs.Content>
          <Tabs.Content value="Football"><ProgramGrid filter="Football" /></Tabs.Content>
          <Tabs.Content value="More"><ProgramGrid filter="More" /></Tabs.Content>
        </Tabs.Root>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 text-center reveal animated">
          <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Not sure which program is right for you?
            </h3>
            <p className="text-white/70 mb-4 sm:mb-6 text-sm sm:text-base">
              Our expert coaches can help assess your current skill level and
              recommend the perfect training program to match your goals and
              abilities.
            </p>
            <Link className="btn-primary inline-flex" to="/contact">
              Schedule a Free Assessment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------
   Helper: Program Grid
---------------------------------------------- */
function ProgramGrid({ filter }) {
  const programs = [
    { img: "/media/junior.jpg", title: "Speed Skating", level: "Skating", desc: "Balance, posture, speed techniques, cornering, and race strategy.", note: "Beginner to Professional" },
    { img: "/media/sub-junior.jpg", title: "Taekwondo", level: "Taekwondo", desc: "Kicking, sparring, Self-Defence, flexibility, and discipline.", note: "Beginner to Black Belt" },
    { img: "/media/senior.jpg", title: "Gymnastics", level: "Gymnastics", desc: "Builds confidence, balance, and body control in young athletes.", note: "Basic to Advanced" },
    { img: "/media/expert.jpg", title: "Football", level: "Football", desc: "Dribbling, passing, teamwork, shooting, and game strategy.", note: "Grassroots to Competitive" },
    { img: "/media/camp.jpg", title: "Basketball", level: "More", desc: "Ball handling, shooting accuracy, teamwork, and tactical play.", note: "Beginner to Team Level" },
    { img: "/media/personal1.png", title: "Table Tennis", level: "More", desc: "Reaction time, precision, coordination, and match strategy.", note: "Basic to Competitive" },
    { img: "/media/cricket.jpg", title: "Cricket", level: "More", desc: "Batting, bowling, fielding, and match awareness.", note: "Foundation to Advanced" },
    { img: "/media/yoga.jpg", title: "Yoga", level: "More", desc: "Improves flexibility, balance, mindfulness, and stress relief.", note: "All Age Groups" },
    { img: "/media/dance.jpg", title: "Dance", level: "More", desc: "Rhythm, expression, and body coordination in various styles.", note: "Classical, Western, Hip-Hop" },
    { img: "/media/zumba.jpg", title: "Zumba & Aerobics", level: "More", desc: "Fun fitness routines combining music and movement to boost stamina.", note: "Fitness Program" },
    { img: "/media/abacus.jpg", title: "Abacus & Brain Development", level: "More", desc: "Improves memory, speed, and problem-solving through mental arithmetic.", note: "Brain Development" },
    { img: "/media/badminton.jpg", title: "Badminton", level: "More", desc: "Footwork, agility, stroke technique, and match play.", note: "Beginner to Competitive" },
    { img: "/media/camps.jpg", title: "Camps & Personal Training", level: "More", desc: "Summer & Winter Camps, Fitness Training, and One-on-One Coaching.", note: "All Age Groups" },
  ];

  const visiblePrograms =
    filter === "all"
      ? programs
      : programs.filter(
          (p) => p.level.toLowerCase() === filter.toLowerCase()
        );

  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {visiblePrograms.map((p) => (
        <ProgramCard key={p.title} {...p} />
      ))}
    </div>
  );
}

/* ----------------------------------------------
   Helper: Program Card
---------------------------------------------- */
function ProgramCard({ img, title, level, desc, note }) {
  return (
    <div className="overflow-hidden rounded-xl relative group glass-card animate-fade-in h-full flex flex-col transition-all duration-300 hover:-translate-y-2">
      <div className="aspect-[4/3] w-full overflow-hidden flex-shrink-0 relative">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-afs-dark/90 via-transparent to-transparent"></div>
      </div>
      <div className="p-6 relative z-10 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-3 gap-2">
          <h3 className="text-white text-lg font-medium">{title}</h3>
          <span className="text-xs py-1 px-3 rounded-full uppercase tracking-wider bg-afs-orange/30 text-white border border-afs-orange/20 flex-shrink-0">
            {level}
          </span>
        </div>
        <p className="text-white/80 mb-4 text-sm flex-grow">{desc}</p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-white/60 text-xs sm:text-sm">{note}</span>
          <Link to="/contact" className="flex items-center text-afs-orange hover:text-white transition-colors group/btn text-sm sm:text-base">
            <span>Enroll Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right ml-1 sm:ml-2 transition-transform duration-300 group-hover/btn:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
