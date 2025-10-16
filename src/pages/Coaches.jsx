import React from 'react'

function Coaches() {
  return (
    <>
        <section className="py-20 bg-afs-dark basketball-pattern">
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
                  className="lucide lucide-user text-afs-orange mr-2"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span className="inline-block py-1 px-3 rounded-full text-xs uppercase tracking-wider font-bold bg-afs-orange/20 text-afs-orange border border-afs-orange/10">
                  Our Team
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-russo mb-6">
                <span className="text-white">Expert Coaches</span> Leading The
                Way
              </h2>
              <p className="text-white/80">
                Our coaching staff consists of former professional players and
                certified trainers.
              </p>
            </div>
            
            {/* Grid of Coach Profiles */}
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Coach 1: Ashwani Kumar Gupta */}
              <div className="reveal animated">
                <div className="glass-card rounded-xl animated overflow-hidden h-full flex flex-col card-hover">
                  <div className="aspect-[1/1] w-full">
                    <img
                      src="/media/coach_photo.jpg"
                      alt="Ashwani Kumar Gupta"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-russo mb-1">
                      Ashwani Kumar Gupta
                    </h3>
                    <p className="text-afs-orange mb-3 font-montserrat">
                      Head Coach
                    </p>
                    <p className="text-white/70 text-sm mb-4 flex-grow font-montserrat">
                      A Senior National Player and certified fitness expert with
                      extensive experience in sports and coaching. Passionate
                      about training and mentoring athletes across multiple
                      disciplines.
                    </p>
                    <div>
                      <h4 className="text-sm font-medium mb-2 flex items-center">
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
                          className="lucide lucide-trophy text-afs-orange mr-2"
                        >
                          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                          <path d="M4 22h16"></path>
                          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                        </svg>
                        <span className="font-russo">Key Achievements</span>
                      </h4>
                      <ul className="space-y-1 mb-4">
                        <li className="flex items-start text-xs font-montserrat">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-award text-afs-orange mr-1 flex-shrink-0"
                          >
                            <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                            <circle cx="12" cy="8" r="6"></circle>
                          </svg>
                          <span className="text-white/80">
                            Senior National Player
                          </span>
                        </li>
                        <li className="flex items-start text-xs font-montserrat">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-award text-afs-orange mr-1 flex-shrink-0"
                          >
                            <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                            <circle cx="12" cy="8" r="6"></circle>
                          </svg>
                          <span className="text-white/80">
                            All India University, Khelo India Games Participant
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coach 2: Abhishek Singh Bohra */}
              <div className="reveal animated">
                <div className="glass-card rounded-xl animated overflow-hidden h-full flex flex-col card-hover">
                  <div className="aspect-[1/1] w-full">
                    <img
                      src="/media/abhishek_bohra.jpg"
                      alt="Abhishek Singh Bohra"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-russo mb-1">
                      Abhishek Singh Bohra
                    </h3>
                    <p className="text-afs-orange mb-3 font-montserrat">
                      Senior Coach
                    </p>
                    <p className="text-white/70 text-sm mb-4 flex-grow font-montserrat">
                      National Medalist Multi-Sports Player &amp; Skilled Coach
                      at Peace Sports Academy, dedicated to nurturing the next
                      generation of champions.
                    </p>
                    <div>
                      <h4 className="text-sm font-medium mb-2 flex items-center">
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
                          className="lucide lucide-trophy text-afs-orange mr-2"
                        >
                          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                          <path d="M4 22h16"></path>
                          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                        </svg>
                        <span className="font-russo">Key Achievements</span>
                      </h4>
                      <ul className="space-y-1 mb-4">
                        <li className="flex items-start text-xs font-montserrat">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-award text-afs-orange mr-1 flex-shrink-0"
                          >
                            <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                            <circle cx="12" cy="8" r="6"></circle>
                          </svg>
                          <span className="text-white/80">
                            National Medalist Player
                          </span>
                        </li>
                        <li className="flex items-start text-xs font-montserrat">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-award text-afs-orange mr-1 flex-shrink-0"
                          >
                            <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                            <circle cx="12" cy="8" r="6"></circle>
                          </svg>
                          <span className="text-white/80">B.P.Ed, M.P.Ed</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coach 3: Abhishek Gupta */}
              <div className="reveal animated">
                <div className="glass-card rounded-xl animated overflow-hidden h-full flex flex-col card-hover">
                  <div className="aspect-[1/1] w-full">
                    <img
                      src="/media/abhishek_gupta.jpg"
                      alt="Abhishek Gupta"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-russo mb-1">Abhishek Gupta</h3>
                    <p className="text-afs-orange mb-3 font-montserrat">
                      Head Coach
                    </p>
                    <p className="text-white/70 text-sm mb-4 flex-grow font-montserrat">
                      Certified strength and conditioning specialist who focuses
                      on Multi-Sports-specific athletic development.
                    </p>
                    <div>
                      <h4 className="text-sm font-medium mb-2 flex items-center">
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
                          className="lucide lucide-trophy text-afs-orange mr-2"
                        >
                          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                          <path d="M4 22h16"></path>
                          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                        </svg>
                        <span className="font-russo">Key Achievements</span>
                      </h4>
                      <ul className="space-y-1 mb-4">
                        <li className="flex items-start text-xs font-montserrat">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-award text-afs-orange mr-1 flex-shrink-0"
                          >
                            <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                            <circle cx="12" cy="8" r="6"></circle>
                          </svg>
                          <span className="text-white/80">National Player</span>
                        </li>
                        <li className="flex items-start text-xs font-montserrat">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-award text-afs-orange mr-1 flex-shrink-0"
                          >
                            <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                            <circle cx="12" cy="8" r="6"></circle>
                          </svg>
                          <span className="text-white/80">B.P.Ed, M.P.Ed</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Coaches