// This component renders the Achievements page, showcasing the academy's milestones.
import "../App.css";

function Achievements() {
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

        {/* Grid of Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Achievement Card 1: AFS Basketball League */}
          <div className="card-hover glass-card rounded-xl overflow-hidden">
            <div className="aspect-video relative overflow-hidden">
              <img
                src="/media/afs_league.jpg"
                alt="AFS Basketball League"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-3 right-3 p-2 rounded-full bg-afs-dark/80 backdrop-blur-sm">
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
                  className="lucide lucide-star text-afs-orange"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold">AFS Basketball League</h3>
              </div>
              <p className="text-white/70 mb-3">
                We proudly organized the biggest basketball league in Lucknow,
                bringing together 110 teams from all over Uttar Pradesh. The
                league featured many national and international players, making
                it a grand success. This is just the beginning—many more
                milestones&nbsp;to&nbsp;come!&nbsp;
              </p>
              <span className="text-xs py-1 px-2 rounded-full bg-white/10 text-white/80">
                Championship
              </span>
            </div>
          </div>

          {/* Achievement Card 2: Competitive Exposure */}
          <div className="card-hover glass-card rounded-xl overflow-hidden">
            <div className="aspect-video relative overflow-hidden">
              <img
                src="/media/district_level.jpg"
                alt="Competitive Exposure for Our Players!"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-3 right-3 p-2 rounded-full bg-afs-dark/80 backdrop-blur-sm">
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
                  className="lucide lucide-users text-afs-orange"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold">
                  Competitive Exposure for Our Players!
                </h3>
              </div>
              <p className="text-white/70 mb-3">
                We regularly organize district-level and inter-academy
                tournaments, providing our players with valuable game experience
                and competition exposure. These events help in skill
                development and prepare them for higher-level championships.
              </p>
              <span className="text-xs py-1 px-2 rounded-full bg-white/10 text-white/80">
                Player Development
              </span>
            </div>
          </div>

          {/* Achievement Card 3: Sponsors of State Championship */}
          <div className="card-hover glass-card rounded-xl overflow-hidden">
            <div className="aspect-video relative overflow-hidden">
              <img
                src="/media/sponsers1.jpg"
                alt="Proud Sponsors of Senior State Championship 2024"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-3 right-3 p-2 rounded-full bg-afs-dark/80 backdrop-blur-sm">
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
                  className="lucide lucide-star text-afs-orange"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold">
                  Proud Sponsors of Senior State Championship 2024
                </h3>
              </div>
              <p className="text-white/70 mb-3">
                We are honored to have sponsored official T-shirts for the
                Senior State Basketball Championship 2024 held in Kanpur.
                Contributing to the growth of basketball in Uttar Pradesh is a
                proud achievement&nbsp;for&nbsp;us.
              </p>
              <span className="text-xs py-1 px-2 rounded-full bg-white/10 text-white/80">
                Sponsorships
              </span>
            </div>
          </div>

          {/* Achievement Card 4: Decathlon Partnership */}
          <div className="card-hover glass-card rounded-xl overflow-hidden">
            <div className="aspect-video relative overflow-hidden">
              <img
                src="/media/decathalon.jpg"
                alt="Decathlon as Our Sports Partner"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-3 right-3 p-2 rounded-full bg-afs-dark/80 backdrop-blur-sm">
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
                  className="lucide lucide-star text-afs-orange"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold">
                  Decathlon as Our Sports Partner
                </h3>
              </div>
              <p className="text-white/70 mb-3">
                We are proud to have *Decathlon* as our official *sports
                partner*, providing high-quality equipment and support to enhance
                the training experience for our players. Together, we are taking
                the game to the next&nbsp;level!
              </p>
              <span className="text-xs py-1 px-2 rounded-full bg-white/10 text-white/80">
                Sponsorships
              </span>
            </div>
          </div>

          {/* Achievement Card 5: Rising Stars */}
          <div className="card-hover glass-card rounded-xl overflow-hidden">
            <div className="aspect-video relative overflow-hidden">
              <img
                src="/media/alumni.jpg"
                alt="Rising Stars of AFS Academy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-3 right-3 p-2 rounded-full bg-afs-dark/80 backdrop-blur-sm">
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
                  className="lucide lucide-medal text-afs-orange"
                >
                  <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"></path>
                  <path d="M11 12 5.12 2.2"></path>
                  <path d="m13 12 5.88-9.8"></path>
                  <path d="M8 7h8"></path>
                  <circle cx="12" cy="17" r="5"></circle>
                  <path d="M12 18v-2h-.5"></path>
                </svg>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold">
                  Rising Stars of AFS Academy
                </h3>
              </div>
              <p className="text-white/70 mb-3">
                We are proud to announce that 15-20 players from our academy are
                representing state and national championships. Their hard work
                and dedication are taking them to new heights in the
                basketball&nbsp;world!
              </p>
              <span className="text-xs py-1 px-2 rounded-full bg-white/10 text-white/80">
                Alumni Success
              </span>
            </div>
          </div>

          {/* Achievement Card 6: Navya Singh */}
          <div className="card-hover glass-card rounded-xl overflow-hidden">
            <div className="aspect-video relative overflow-hidden">
              <img
                src="/media/navya_02.jpg"
                alt="Navya Singh's Journey!"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-3 right-3 p-2 rounded-full bg-afs-dark/80 backdrop-blur-sm">
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
                  className="lucide lucide-star text-afs-orange"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold">Navya Singh's Journey!</h3>
              </div>
              <p className="text-white/70 mb-3">
                Navya Singh has been consistently representing the *U.P. team*
                and even secured a spot in the *Under-17 Indian team tryouts*. A
                true inspiration for all young&nbsp;athletes!
              </p>
              <span className="text-xs py-1 px-2 rounded-full bg-white/10 text-white/80">
                Success Stories
              </span>
            </div>
          </div>
        </div>

        {/* Pagination Controls */}
        <nav
          role="navigation"
          aria-label="pagination"
          className="mx-auto flex w-full justify-center mt-12"
        >
          <ul className="flex flex-row items-center gap-1">
            <li>
              <a
                aria-current="page"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 cursor-pointer"
              >
                1
              </a>
            </li>
            <li>
              <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10 cursor-pointer">
                2
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-1 pr-2.5 cursor-pointer"
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
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Achievements;