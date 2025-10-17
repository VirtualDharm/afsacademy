import React from "react";
import * as Tabs from "@radix-ui/react-tabs";

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
              Elevate
            </span>{" "}
            Your Game
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
            Choose from our comprehensive selection of basketball training
            programs, each designed to target specific skills and tailored for
            different experience levels.
          </p>
        </div>

        {/* Tabs Root */}
        <Tabs.Root defaultValue="all" orientation="horizontal" className="mb-12">
          {/* Tabs List */}
          <Tabs.List
            role="tablist"
            aria-orientation="horizontal"
            className="flex h-10 items-center justify-center rounded-md p-1 bg-white/5 border border-white/10 w-max mx-auto text-muted-foreground"
          >
            {["all", "beginner", "intermediate", "advanced", "expert"].map(
              (tab) => (
                <Tabs.Trigger
                  key={tab}
                  value={tab}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-xs sm:text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-afs-orange data-[state=active]:to-afs-red data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                >
                  {tab === "all"
                    ? "All Programs"
                    : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </Tabs.Trigger>
              )
            )}
          </Tabs.List>

          {/* Tabs Content Panels */}
          <Tabs.Content value="all">
            <ProgramGrid filter="all" />
          </Tabs.Content>
          <Tabs.Content value="beginner">
            <ProgramGrid filter="beginner" />
          </Tabs.Content>
          <Tabs.Content value="intermediate">
            <ProgramGrid filter="intermediate" />
          </Tabs.Content>
          <Tabs.Content value="advanced">
            <ProgramGrid filter="advanced" />
          </Tabs.Content>
          <Tabs.Content value="expert">
            <ProgramGrid filter="expert" />
          </Tabs.Content>
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
            <a className="btn-primary inline-flex" href="/contact">
              Schedule a Free Assessment
            </a>
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
    {
      img: "/media/junior.jpg",
      title: "Beginner Training Program",
      level: "Beginner",
      desc: "Foundational basketball skills and fundamentals for young players just starting their basketball journey.",
      note: "Ongoing batches",
    },
    {
      img: "/media/sub-junior.jpg",
      title: "Intermediate Training Program",
      level: "Intermediate",
      desc: "Develops core basketball skills - shooting technique, defensive stance, and team play fundamentals.",
      note: "Regular sessions",
    },
    {
      img: "/media/senior.jpg",
      title: "Advanced Training Program",
      level: "Advanced",
      desc: "Comprehensive skill development program focusing on advanced techniques, strategies, and competitive preparation for serious players.",
      note: "Year-round program",
    },
    {
      img: "/media/expert.jpg",
      title: "Professional Training Program",
      level: "Expert",
      desc: "For competitive players seeking highest-level coaching with advanced drills, game simulations, and athletic conditioning.",
      note: "Regular sessions",
    },
    {
      img: "/media/camp.jpg",
      title: "Summer Basketball Camp",
      level: "All Levels",
      desc: "Daily skill-building activities, drills, and scrimmages for all age groups during summer vacations.",
      note: "June-July",
    },
    {
      img: "/media/personal1.png",
      title: "Personal Coaching",
      level: "All Levels",
      desc: "One-on-one customized training sessions focusing on individual skill improvement.",
      note: "Flexible scheduling",
    },
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
          <a
            className="flex items-center text-afs-orange hover:text-white transition-colors group/btn text-sm sm:text-base"
            href="/contact"
          >
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
          </a>
        </div>
      </div>
    </div>
  );
}
