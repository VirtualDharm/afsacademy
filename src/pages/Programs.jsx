import React from "react";
import "../App.css";

function Programs() {
  return (
    <>
      <section className="py-20 bg-afs-dark">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 reveal animated">
            <div className="flex items-center justify-center mb-3">
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
                className="lucide lucide-circle-dot text-afs-orange mr-2 animate-ball-bounce"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="1"></circle>
              </svg>
              <span className="inline-block py-1 px-3 rounded-full text-xs uppercase tracking-wider font-bold bg-afs-orange/20 text-afs-orange border border-afs-orange/10">
                Our Programs
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-russo mb-6">
              <span className="text-white">Training Programs</span> Designed For
              Success
            </h2>
            <p className="text-white/80">
              Choose from our specialized Multi-Sports training programs, each
              tailored to specific skill levels and goals.
            </p>
          </div>

          {/* Grid of Program Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {/* Program Card 1: Taekwondo */}
            <div className="reveal animated">
              <div className="glass-card rounded-xl animated overflow-hidden card-hover h-full">
                <div className="aspect-[16/9] w-full">
                  <img
                    src="/media/junior.jpg"
                    alt="Beginner Training Program"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-russo mb-2">Taekwondo</h3>
                  <p className="text-white/70 mb-4 font-montserrat">
                    Foundational Multi-Sports skills and fundamentals for young
                    players just starting their Multi-Sports journey.
                  </p>
                  <div className="flex justify-between mb-4 font-montserrat">
                    <div className="text-sm flex items-center">
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
                        className="lucide lucide-star text-afs-orange mr-1"
                      >
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                      <span className="text-white">Taekwondo</span>
                    </div>
                    <div className="text-sm flex items-center">
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
                        className="lucide lucide-clock text-afs-orange mr-1"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span className="text-white">Ongoing batches</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Program Card 2: Skating */}
            <div className="reveal animated">
              <div className="glass-card rounded-xl animated overflow-hidden card-hover h-full">
                <div className="aspect-[16/9] w-full">
                  <img
                    src="/media/sub-junior.jpg"
                    alt="Intermediate Training Program"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-russo mb-2">Skating</h3>
                  <p className="text-white/70 mb-4 font-montserrat">
                    Develops core Multi-Sports skills - shooting technique,
                    defensive stance, and team play fundamentals
                  </p>
                  <div className="flex justify-between mb-4 font-montserrat">
                    <div className="text-sm flex items-center">
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
                        className="lucide lucide-star text-afs-orange mr-1"
                      >
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                      <span className="text-white">Skating</span>
                    </div>
                    <div className="text-sm flex items-center">
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
                        className="lucide lucide-clock text-afs-orange mr-1"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span className="text-white">Regular sessions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Program Card 3: Gymnastics */}
            <div className="reveal animated">
              <div className="glass-card rounded-xl animated overflow-hidden card-hover h-full">
                <div className="aspect-[16/9] w-full">
                  <img
                    src="/media/senior.jpg"
                    alt="Advanced Training Program"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-russo mb-2">Gymnastics</h3>
                  <p className="text-white/70 mb-4 font-montserrat">
                    Comprehensive skill development program focusing on advanced
                    techniques, strategies, competitive preparation for serious
                    players
                  </p>
                  <div className="flex justify-between mb-4 font-montserrat">
                    <div className="text-sm flex items-center">
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
                        className="lucide lucide-star text-afs-orange mr-1"
                      >
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                      <span className="text-white">Gymnastics</span>
                    </div>
                    <div className="text-sm flex items-center">
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
                        className="lucide lucide-clock text-afs-orange mr-1"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span className="text-white">Year-round program</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* "View All" Button */}
          <div className="text-center reveal animated">
            <a
              className="btn-secondary inline-flex items-center"
              href="/programs"
            >
              <span>View All Programs</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right ml-2"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Programs;
