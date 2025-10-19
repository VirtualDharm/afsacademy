import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
import { programs } from "../data";

export default function Programs() {
  const location = useLocation();
  const [tab, setTab] = React.useState("all");

  // 🧩 Update tab every time location or state changes
  React.useEffect(() => {
    const targetTab = location.state?.tab || "all";
    setTab(targetTab);
    window.history.replaceState({}, document.title);
  }, [location]);

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 reveal animated">
          <span className="inline-block py-1 px-3 rounded-full text-xs uppercase tracking-wider mb-3 bg-blippi-primary/20 text-blippi-primary border border-blippi-primary/10">
            Training Programs
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 afs-heading">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blippi-primary to-blippi-secondary">
              One Academy,
            </span>{" "}
            Endless Opportunities
          </h1>
          <p className="text-blippi-grey max-w-2xl mx-auto text-sm sm:text-base">
            Choose from our comprehensive selection of professional training programs, each designed to build discipline, fitness, and confidence.
          </p>
        </div>

        {/* Tabs */}
        <Tabs.Root
          value={tab}
          onValueChange={setTab}
          orientation="horizontal"
          className="mb-12"
        >
          <Tabs.List
            role="tablist"
            aria-orientation="horizontal"
            className="flex h-10 items-center justify-center rounded-md p-1 bg-blippi-bg-white border border-blippi-border w-max mx-auto text-muted-foreground flex-wrap"
          >
            {["all", "Skating", "Taekwondo", "Gymnastics", "Football", "More"].map(
              (t) => (
                <Tabs.Trigger
                  key={t}
                  value={t}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 font-medium ring-offset-background transition-all focus-visible:outline-none text-xs sm:text-sm text-blippi-dark data-[state=active]:bg-gradient-to-r from-blippi-primary to-blippi-secondary data-[state=active]:text-blippi-white data-[state=active]:shadow-sm"
                >
                  {t === "all" ? "All Programs" : t}
                </Tabs.Trigger>
              )
            )}
          </Tabs.List>

          {/* Tab Panels */}
          <Tabs.Content value="all"><ProgramGrid filter="all" /></Tabs.Content>
          <Tabs.Content value="Skating"><ProgramGrid filter="Skating" /></Tabs.Content>
          <Tabs.Content value="Taekwondo"><ProgramGrid filter="Taekwondo" /></Tabs.Content>
          <Tabs.Content value="Gymnastics"><ProgramGrid filter="Gymnastics" /></Tabs.Content>
          <Tabs.Content value="Football"><ProgramGrid filter="Football" /></Tabs.Content>
          <Tabs.Content value="More"><ProgramGrid filter="More" /></Tabs.Content>
        </Tabs.Root>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 text-center reveal animated">
          <div className="max-w-3xl mx-auto bg-blippi-grey border border-blippi-border rounded-xl p-6 sm:p-8"> {/* UPDATED */}
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blippi-dark">Not sure which program is right for you?</h3> {/* UPDATED */}
            <p className="text-blippi-grey mb-4 sm:mb-6 text-sm sm:text-base">
              Our expert coaches can help assess your current skill level and recommend the perfect training program to match your goals and abilities.
            </p>
            <Link className="blippi-btn inline-flex" to="/contact"> {/* UPDATED */}
              Schedule a Free Assessment
              <span className="blob-inner"><span className="blobs"><span></span><span></span><span></span><span></span></span></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgramGrid({ filter }) {
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

function ProgramCard({ img, title, level, desc, note }) {
  return (
    <div className="overflow-hidden rounded-xl relative group bg-blippi-bg-white shadow-lg animate-fade-in h-full flex flex-col transition-all duration-300 hover:-translate-y-2">
      <div className="aspect-[4/3] w-full overflow-hidden flex-shrink-0 relative">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blippi-dark/80 via-transparent to-transparent"></div>
      </div>
      <div className="p-6 relative z-10 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-3 gap-2">
          <h3 className="text-blippi-dark text-lg font-medium">{title}</h3>
          <span className="text-xs py-1 px-3 rounded-full uppercase tracking-wider bg-blippi-primary/30 text-blippi-dark border border-blippi-primary/20 flex-shrink-0">
            {level}
          </span>
        </div>
        <p className="text-blippi-grey mb-4 text-sm flex-grow">{desc}</p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-blippi-grey/70 text-xs sm:text-sm">{note}</span>
          <Link
            to="/contact"
            className="flex items-center text-blippi-primary hover:text-blippi-dark transition-colors group/btn text-sm sm:text-base"
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
          </Link>
        </div>
      </div>
    </div>
  );
}
