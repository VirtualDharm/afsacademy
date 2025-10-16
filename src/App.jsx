import "./App.css";

// This is the main component for the application's homepage.
// It serves as the primary layout container for all other sections like
// navigation, hero, about, programs, contact, and footer.
function App() {
  return (
    <>
      {/* Root container for the entire page, setting global styles like background, text color, and font. */}
      <div className="min-h-screen bg-afs-dark text-white overflow-x-hidden font-montserrat">
        
        {/* ============================================= */}
        {/* START: Navigation Bar Section                 */}
        {/* A fixed navigation bar that stays at the top of the page. */}
        {/* ============================================= */}
        <nav className="fixed w-full z-50 transition-all duration-300 bg-transparent py-4">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              
              {/* Logo and Brand Name */}
              <a className="flex items-center space-x-2" href="/">
                <img
                  src="/media/AFS Logo.png"
                  alt="Peace Sports Academy Logo"
                  className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover border-2 border-afs-orange/50"
                />
                <span className="text-2xl font-russo tracking-tight text-white"></span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-afs-orange to-afs-red">
                  PSA
                </span>
              </a>

              {/* Desktop Navigation Links - Hidden on smaller screens */}
              <div className="hidden md:flex space-x-8">
                <a
                  className="text-white hover:text-afs-orange transition-colors nav-link-hover font-montserrat font-semibold"
                  href="/"
                >
                  Home
                </a>
                <a
                  className="text-white hover:text-afs-orange transition-colors nav-link-hover font-montserrat font-semibold"
                  href="/programs"
                >
                  Programs
                </a>
                <a
                  className="text-white hover:text-afs-orange transition-colors nav-link-hover font-montserrat font-semibold"
                  href="/coaches"
                >
                  Coaches
                </a>
                <a
                  className="text-white hover:text-afs-orange transition-colors nav-link-hover font-montserrat font-semibold"
                  href="/achievements"
                >
                  Achievements
                </a>
              </div>

              {/* Desktop Contact Button - Hidden on smaller screens */}
              <div className="hidden md:flex items-center gap-4">
                <a className="btn-primary" href="/contact">
                  Contact
                </a>
              </div>

              {/* Mobile Menu Toggle Button (Hamburger Icon) - Only visible on smaller screens */}
              <button className="md:hidden text-white" aria-label="Toggle menu">
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
                  className="lucide lucide-menu"
                >
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Mobile Menu - Hidden by default, shown on button click. Only for smaller screens. */}
            <div className="md:hidden fixed left-0 right-0 top-[56px] p-4 mt-2 bg-afs-dark/95 backdrop-blur-lg shadow-lg transition-transform duration-300 ease-in-out dark:bg-black/90 translate-y-[-100%] opacity-0 pointer-events-none">
              <div className="flex flex-col space-y-4">
                <a
                  className="text-white hover:text-afs-orange py-2 border-b border-white/10 font-montserrat font-semibold"
                  href="/"
                >
                  Home
                </a>
                <a
                  className="text-white hover:text-afs-orange py-2 border-b border-white/10 font-montserrat font-semibold"
                  href="/programs"
                >
                  Programs
                </a>
                <a
                  className="text-white hover:text-afs-orange py-2 border-b border-white/10 font-montserrat font-semibold"
                  href="/coaches"
                >
                  Coaches
                </a>
                <a
                  className="text-white hover:text-afs-orange py-2 border-b border-white/10 font-montserrat font-semibold"
                  href="/achievements"
                >
                  Achievements
                </a>
                <a className="btn-primary text-center" href="/contact">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
        {/* ============================================= */}
        {/* END: Navigation Bar Section                   */}
        {/* ============================================= */}


        {/* ============================================= */}
        {/* START: Hero Section                           */}
        {/* The main header with a background video, headline, and primary call-to-action buttons. */}
        {/* ============================================= */}
        <div className="video-container">
          {/* Decorative pattern overlay */}
          <div className="absolute inset-0 basketball-pattern z-[1] opacity-30"></div>
          
          {/* Background Video */}
          <video
            autoPlay={true}
            loop={true}
            playsInline={true}
            className="video-bg"
            poster="/images/basketball-poster.jpg"
          >
            <source src="/videos/basketball-hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Dark overlay to ensure text is readable over the video */}
          <div className="video-overlay"></div>
          
          {/* Hero Section Content */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-white text-center">
            
            {/* Sub-heading */}
            <span className="inline-flex items-center text-sm uppercase tracking-widest mb-4 font-montserrat font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-dot mr-2 text-afs-orange animate-ball-bounce"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="1"></circle>
              </svg>
              Welcome to
            </span>
            
            {/* Main Heading */}
            <h1 className="afs-heading mb-6">
              <div className="flex items-center justify-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-afs-orange to-afs-red p-3">
                  AFS
                </span>
                <span className="mx-2"> Multi-Sports Academy</span>
              </div>
            </h1>
            
            {/* Tagline/Description */}
            <p className="max-w-3xl mb-8 text-lg font-montserrat">
              Biggest Multi-Sports Club in Lucknow.
              <br />
              Elevate your game with professional Multi-Sports training designed
              to unlock your full potential on the court.
            </p>
            
            {/* Call-to-Action Buttons */}
            <div className="space-x-4 flex flex-wrap justify-center gap-4">
              <a className="btn-primary flex items-center" href="/programs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-dot mr-2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="1"></circle>
                </svg>
                Explore Programs
              </a>
              <a className="btn-secondary flex items-center" href="/coaches">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-dot mr-2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="1"></circle>
                </svg>
                Meet Our Coaches
              </a>
            </div>
            
            {/* Quick Statistics Cards */}
            <div className="flex flex-wrap justify-center gap-6 mt-12 w-full max-w-4xl">
              <div className="glass-card py-3 px-6 rounded-lg flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-trending-up text-afs-orange mr-2"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
                <span className="font-russo">4</span>
                <span className="ml-2 text-white/70 text-sm">Branches</span>
              </div>
              <div className="glass-card py-3 px-6 rounded-lg flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-award text-afs-orange mr-2"
                >
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                  <circle cx="12" cy="8" r="6"></circle>
                </svg>
                <span className="font-russo">15</span>
                <span className="ml-2 text-white/70 text-sm">
                  Certified Coaches
                </span>
              </div>
              <div className="glass-card py-3 px-6 rounded-lg flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-dot text-afs-orange mr-2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="1"></circle>
                </svg>
                <span className="font-russo">500+</span>
                <span className="ml-2 text-white/70 text-sm">
                  Students Trained
                </span>
              </div>
            </div>
          </div>

          {/* Animated Scroll Down Arrow */}
          <button
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce-slow z-10"
            aria-label="Scroll down"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-down"
            >
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        {/* ============================================= */}
        {/* END: Hero Section                             */}
        {/* ============================================= */}


        {/* ============================================= */}
        {/* START: Featured Training Sessions Section     */}
        {/* A video carousel showcasing different training activities. */}
        {/* ============================================= */}
        <section className="relative py-10 bg-afs-dark-accent overflow-hidden dark:bg-black/50">
          {/* Background overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-afs-dark/70 to-afs-dark/70 z-0 dark:from-black/70 dark:to-black/70"></div>
          <div className="basketball-pattern absolute inset-0 opacity-15 z-0"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-10 reveal animated animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-russo mb-3">
                <span className="text-white">Featured</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-afs-orange to-afs-red">
                  Training Sessions
                </span>
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Get a glimpse of our exciting training sessions across
                Taekwondo, Skating, Gymnastics, Badminton, and Zumba.
              </p>
            </div>
            
            {/* Video Carousel */}
            <div className="relative group">
              <div
                className="relative w-full"
                role="region"
                aria-roledescription="carousel"
              >
                <div className="overflow-hidden">
                  <div
                    className="flex ml-0"
                    style={{ transform: "translate3d(220px, 0px, 0px)" }}
                  >
                    {/* Carousel Slide 1 */}
                    <div
                      role="group"
                      aria-roledescription="slide"
                      className="min-w-0 shrink-0 grow-0 basis-full lg:basis-2/3 px-1 md:px-2"
                      style={{ transform: "translate3d(0px, 0px, 0px)" }}
                    >
                      <div className="relative transition-all duration-500 opacity-100 scale-100 z-20">
                        <div className="p-[2px] rounded-xl animated bg-afs-orange">
                          <div className="rounded-lg overflow-hidden w-full h-full">
                            <video
                              src="/media/basketball.mp4"
                              poster="/media/coaches_cover.jpg"
                              className="w-full h-full object-cover aspect-video"
                              loop={true}
                              playsInline={true}
                              preload="auto"
                              autoPlay={true}
                              data-video-index="0"
                            ></video>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 w-full p-4 text-left">
                              <h3 className="text-white font-russo text-lg"></h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Carousel Slide 2 */}
                    <div
                      role="group"
                      aria-roledescription="slide"
                      className="min-w-0 shrink-0 grow-0 basis-full lg:basis-2/3 px-1 md:px-2"
                      style={{ transform: "translate3d(0px, 0px, 0px)" }}
                    >
                      <div className="relative transition-all duration-500 opacity-70 scale-95 blur-[1px] z-10">
                        <div className="p-[2px] rounded-xl animated bg-transparent">
                          <div className="rounded-lg overflow-hidden w-full h-full">
                            <video
                              src="/media/basketballssss_2.mp4"
                              poster="/media/coaches_cover.jpg"
                              className="w-full h-full object-cover aspect-video"
                              loop={true}
                              playsInline={true}
                              preload="auto"
                              data-video-index="1"
                            ></video>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 w-full p-4 text-left">
                              <h3 className="text-white font-russo text-lg"></h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="group"
                      aria-roledescription="slide"
                      className="min-w-0 shrink-0 grow-0 basis-full lg:basis-2/3 px-1 md:px-2"
                    >
                      <div className="relative transition-all duration-500 opacity-70 scale-95 blur-[1px] z-10">
                        <div className="p-[2px] rounded-xl animated bg-transparent">
                          <div className="rounded-lg overflow-hidden w-full h-full">
                            <video
                              src="/media/basketballssss_p3.mp4"
                              poster="/media/coaches_cover.jpg"
                              className="w-full h-full object-cover aspect-video"
                              loop={true}
                              playsInline={true}
                              preload="auto"
                              data-video-index="2"
                            ></video>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 w-full p-4 text-left">
                              <h3 className="text-white font-russo text-lg"></h3>
                  </div>
                </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="group"
                      aria-roledescription="slide"
                      className="min-w-0 shrink-0 grow-0 basis-full lg:basis-2/3 px-1 md:px-2"
                      style={{ transform: "translate3d(-3517px, 0px, 0px)" }}
                    >
                      <div className="relative transition-all duration-500 opacity-70 scale-95 blur-[1px] z-10">
                        <div className="p-[2px] rounded-xl animated bg-transparent">
                          <div className="rounded-lg overflow-hidden w-full h-full">
                            <video
                              src="/media/basketballssss.mp4"
                              poster="/media/coaches_cover.jpg"
                              className="w-full h-full object-cover aspect-video"
                              loop={true}
                              playsInline={true}
                              preload="auto"
                              data-video-index="3"
                            ></video>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 w-full p-4 text-left">
                              <h3 className="text-white font-russo text-lg"></h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-background hover:bg-accent hover:text-accent-foreground absolute left-4 top-1/2 -translate-y-1/2 z-30 h-14 w-14 rounded-full bg-gradient-to-br from-afs-orange/90 to-afs-red/90 text-white hover:from-afs-orange hover:to-afs-red transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-afs-orange/40 flex items-center justify-center group-hover:opacity-100 opacity-0 md:opacity-100 hover:scale-110 transform-gpu focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white border-2 border-white/20">
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
                    className="lucide lucide-arrow-left h-4 w-4"
                  >
                    <path d="m12 19-7-7 7-7"></path>
                    <path d="M19 12H5"></path>
                  </svg>
                  <span className="sr-only">Previous slide</span>
                </button>
                <button className="gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-background hover:bg-accent hover:text-accent-foreground absolute right-4 top-1/2 -translate-y-1/2 z-30 h-14 w-14 rounded-full bg-gradient-to-br from-afs-orange/90 to-afs-red/90 text-white hover:from-afs-orange hover:to-afs-red transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-afs-orange/40 flex items-center justify-center group-hover:opacity-100 opacity-0 md:opacity-100 hover:scale-110 transform-gpu focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white border-2 border-white/20">
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
                    className="lucide lucide-arrow-right h-4 w-4"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                  <span className="sr-only">Next slide</span>
                </button>
              </div>

              {/* Carousel Pagination Dots */}
              <div className="w-full flex justify-center mt-6 md:mt-8 md:absolute md:bottom-4 left-0 right-0 mx-auto">
                <div className="flex space-x-2 z-20 px-4 bg-afs-dark-accent/50 md:bg-transparent rounded-full py-2 md:py-0">
                  <button
                    className="h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-afs-orange w-8 bg-gradient-to-r from-afs-orange to-afs-red"
                    aria-label="Go to slide 1"
                  ></button>
                  <button
                    className="h-2.5 w-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-afs-orange bg-white/40"
                    aria-label="Go to slide 2"
                  ></button>
                  <button
                    className="h-2.5 w-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-afs-orange bg-white/40"
                    aria-label="Go to slide 3"
                  ></button>
                  <button
                    className="h-2.5 w-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-afs-orange bg-white/40"
                    aria-label="Go to slide 4"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============================================= */}
        {/* END: Featured Training Sessions Section       */}
        {/* ============================================= */}


        {/* ============================================= */}
        {/* START: Key Statistics Section                 */}
        {/* Displays key metrics and achievements of the academy. */}
        {/* ============================================= */}
        <section className="py-16 bg-gradient-to-b from-afs-dark to-afs-darkgray basketball-pattern">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
              
              {/* Stat Card: Players Trained */}
              <div className="text-center reveal animated glass-card py-6 rounded-xl">
                <div className="flex justify-center mb-3">
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
                <div className="text-3xl md:text-4xl font-russo mb-2 text-transparent bg-clip-text bg-gradient-to-r from-afs-orange to-afs-red">
                  1,500+
                </div>
                <div className="text-white/70">Players Trained</div>
              </div>

              {/* Stat Card: Professional Coaches */}
              <div className="text-center reveal animated glass-card py-6 rounded-xl">
                <div className="flex justify-center mb-3">
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
                    className="lucide lucide-user text-afs-orange"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="text-3xl md:text-4xl font-russo mb-2 text-transparent bg-clip-text bg-gradient-to-r from-afs-orange to-afs-red">
                  14+
                </div>
                <div className="text-white/70">Professional Coaches</div>
              </div>

              {/* Stat Card: Success Rate */}
              <div className="text-center reveal animated glass-card py-6 rounded-xl">
                <div className="flex justify-center mb-3">
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
                    className="lucide lucide-trending-up text-afs-orange"
                  >
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                  </svg>
                </div>
                <div className="text-3xl md:text-4xl font-russo mb-2 text-transparent bg-clip-text bg-gradient-to-r from-afs-orange to-afs-red">
                  100%
                </div>
                <div className="text-white/70">Success Rate</div>
              </div>

              {/* Stat Card: Years Experience */}
              <div className="text-center reveal animated glass-card py-6 rounded-xl">
                <div className="flex justify-center mb-3">
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
                    className="lucide lucide-trophy text-afs-orange"
                  >
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                    <path d="M4 22h16"></path>
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                  </svg>
                </div>
                <div className="text-3xl md:text-4xl font-russo mb-2 text-transparent bg-clip-text bg-gradient-to-r from-afs-orange to-afs-red">
                  12+
                </div>
                <div className="text-white/70">Years Experience</div>
              </div>
            </div>
          </div>
        </section>
        {/* ============================================= */}
        {/* END: Key Statistics Section                   */}
        {/* ============================================= */}


        {/* ============================================= */}
        {/* START: About Us Section                       */}
        {/* Provides a summary of the academy's mission and history, with an image. */}
        {/* ============================================= */}
        <section className="py-20 bg-afs-dark-accent">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              
              {/* Left Column: Text Content */}
              <div className="reveal animated">
                <div className="flex items-center mb-3">
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
                    About Peace Sports Academy
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-russo mb-6">
                  <span className="text-white">Elevate Your Game</span> To New
                  Heights
                </h2>
                <p className="text-white/80 mb-6">
                  Founded in 2021, Peace Sports Academy is Lucknow’s largest
                  multi-sports academy offering professional training in
                  Taekwondo, Skating, Badminton, and Gymnastics. With certified
                  coaches, modern facilities, and personalized attention, we’ve
                  produced numerous state and national champions. Join us to
                  build confidence, boost fitness, and unlock your true
                  potential.
                </p>
                <p className="text-white/80 mb-8">
                  We focus on developing the complete player - from technical
                  skills and Multi-Sports IQ to mental strength and physical
                  conditioning.
                </p>
                <a
                  className="btn-primary flex items-center"
                  href="/achievements"
                >
                  Learn More About Us
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
                    className="lucide lucide-chevron-right ml-1"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </a>
              </div>
              
              {/* Right Column: Image */}
              <div className="relative reveal animated">
                <div className="rounded-xl animated overflow-hidden glass-card">
                  <img
                    src="media/elevate.jpg"
                    alt="Peace Sports Academy Training"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative element on the corner of the image */}
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center bg-afs-dark border-2 border-afs-orange">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-dot text-afs-orange animate-ball-bounce"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="1"></circle>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============================================= */}
        {/* END: About Us Section                         */}
        {/* ============================================= */}
        

        {/* ============================================= */}
        {/* START: Training Programs Section              */}
        {/* Highlights the main training programs offered with cards. */}
        {/* ============================================= */}
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
                <span className="text-white">Training Programs</span> Designed
                For Success
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
                      Foundational Multi-Sports skills and fundamentals for
                      young players just starting their Multi-Sports journey.
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
                      Comprehensive skill development program focusing on
                      advanced techniques, strategies, competitive preparation
                      for serious players
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
        {/* ============================================= */}
        {/* END: Training Programs Section                */}
        {/* ============================================= */}


        {/* ============================================= */}
        {/* START: Call to Action (CTA) Section           */}
        {/* A prominent section to encourage user enrollment. */}
        {/* ============================================= */}
        <section className="relative py-24 bg-afs-dark-accent overflow-hidden">
          {/* Background Image and Overlays */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/cta-bg.jpg"
              alt="Multi-Sports court"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-afs-dark to-transparent"></div>
            <div className="absolute inset-0 basketball-pattern opacity-30"></div>
          </div>
          
          {/* CTA Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="reveal animated">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-afs-orange to-afs-red flex items-center justify-center mr-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-dot"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="1"></circle>
                    </svg>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-russo">
                    Ready to
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-afs-orange to-afs-red">
                      dominate
                    </span>
                    the court?
                  </h2>
                </div>
                <p className="text-xl text-white/80 mb-8 ml-26">
                  Join Peace Sports Academy today and start your journey to
                  Multi-Sports excellence.
                </p>
                <div className="flex flex-wrap gap-4 ml-26">
                  <a className="btn-primary flex items-center" href="/contact">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-dot mr-2"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="1"></circle>
                    </svg>
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============================================= */}
        {/* END: Call to Action (CTA) Section             */}
        {/* ============================================= */}
        
        {/* ============================================= */}
        {/* START: Coaches Section                        */}
        {/* Introduces the key coaching staff.           */}
        {/* ============================================= */}
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
        {/* ============================================= */}
        {/* END: Coaches Section                          */}
        {/* ============================================= */}

        {/* ============================================= */}
        {/* START: Testimonials Section                   */}
        {/* Displays quotes from satisfied players or parents. */}
        {/* ============================================= */}
        <section className="py-20 bg-gradient-to-b from-afs-dark-accent to-afs-dark">
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
                  className="lucide lucide-star text-afs-orange mr-2"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
                <span className="inline-block py-1 px-3 rounded-full text-xs uppercase tracking-wider font-bold bg-afs-orange/20 text-afs-orange border border-afs-orange/10">
                  Testimonials
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-russo mb-6">
                <span className="text-white">Success Stories</span> From Our
                Players
              </h2>
              <p className="text-white/80">
                Hear what our players have to say about their experience
                training with Peace Sports Academy.
              </p>
            </div>
            {/* Testimonial Card */}
            <div className="reveal animated">
              <div className="glass-card rounded-xl animated p-8">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  
                  {/* Player's Photo */}
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-2 border-afs-orange">
                    <img
                      src="/media/navya.jpg"
                      alt="Navya Singh"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Testimonial Content */}
                  <div className="flex-grow">
                    <div className="mb-4 flex justify-center md:justify-start">
                      {/* Pagination dots if there were multiple testimonials in a slider */}
                      <button className="h-5 w-5 mr-2 text-afs-orange">
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
                          className="lucide lucide-circle-dot"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <circle cx="12" cy="12" r="1"></circle>
                        </svg>
                      </button>
                      <button className="h-5 w-5 mr-2 text-white/30">
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
                          className="lucide lucide-circle-dot"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <circle cx="12" cy="12" r="1"></circle>
                        </svg>
                      </button>
                    </div>
                    <p className="text-white/80 text-lg mb-4 font-montserrat">
                      Peace Sports Academy's elite training refined my skills
                      and discipline, helping me represent UP and earn a shot at
                      the Indian U-17 national team!
                    </p>
                    <div>
                      <h4 className="font-russo text-center md:text-left">
                        Navya Singh
                      </h4>
                      <p className="text-afs-orange text-sm font-montserrat text-center md:text-left">
                        National Player
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============================================= */}
        {/* END: Testimonials Section                     */}
        {/* ============================================= */}


        {/* ============================================= */}
        {/* START: Contact Section                        */}
        {/* Contains contact details and a contact form.   */}
        {/* ============================================= */}
        <section className="py-20 bg-afs-dark-accent">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              
              {/* Left Column: Contact Information */}
              <div className="reveal animated">
                <div className="flex items-center mb-3">
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
                    Get In Touch
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-russo mb-6">
                  <span className="text-white">Questions?</span> Contact Us
                </h2>
                <p className="text-white/80 mb-8">
                  Have questions about our programs or want to schedule a visit?
                  Fill out the form and we'll get back to you.
                </p>
                <div className="space-y-4 mb-6">
                  {/* Location Info */}
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-afs-orange/20 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-afs-orange"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-russo mb-1">Location</h5>
                      <p className="text-white/70 text-sm">
                        Peace Sports Academy, Sector-6, Gomtinagar, Badhamau,
                        Lucknow, UP
                      </p>
                    </div>
                  </div>
                  {/* Email Info */}
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-afs-orange/20 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-afs-orange"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-russo mb-1">Email</h5>
                      <p className="text-white/70 text-sm">
                        officialpeacesportsacademy@gmail.com
                      </p>
                    </div>
                  </div>
                  {/* Phone Info */}
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-afs-orange/20 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-afs-orange"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-russo mb-1">Phone</h5>
                      <p className="text-white/70 text-sm">
                        8687804879, 8957273494, 6387531144
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column: Contact Form */}
              <div className="reveal animated">
                <div className="glass-card rounded-xl animated p-6 md:p-8">
                  <form className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label
                          className="block text-white/80 text-sm mb-2 font-russo"
                          htmlFor="name"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-afs-orange/50 text-white font-montserrat"
                          placeholder="Your name"
                          defaultValue=""
                        />
                      </div>
                      <div>
                        <label
                          className="block text-white/80 text-sm mb-2 font-russo"
                          htmlFor="email"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-afs-orange/50 text-white font-montserrat"
                          placeholder="Your email"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        className="block text-white/80 text-sm mb-2 font-russo"
                        htmlFor="subject"
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-afs-orange/50 text-white font-montserrat"
                        placeholder="How can we help you?"
                        defaultValue=""
                      />
                    </div>
                    <div>
                      <label
                        className="block text-white/80 text-sm mb-2 font-russo"
                        htmlFor="message"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-afs-orange/50 text-white font-montserrat h-32"
                        placeholder="Tell us more about your inquiry"
                      ></textarea>
                    </div>
                    {/* reCAPTCHA integration - often handled by a library */}
                    <div>
                      <div>
                        <div>
                          <div style={{ width: "304px", height: "78px" }}>
                            <div>
                              <iframe
                                title="reCAPTCHA"
                                width="304"
                                height="78"
                                role="presentation"
                                name="a-lqdaxjltdofj"
                                frameBorder="0"
                                scrolling="no"
                                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                                src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LdzcAUrAAAAAKnuLVXgEjYD8liMEvck6l6ewkyn&amp;co=aHR0cHM6Ly93d3cuYWZzYWNhZGVteS5jby5pbjo0NDM.&amp;hl=en&amp;type=image&amp;v=KmpMK968ITiiEP0G5qc-Nzka&amp;theme=light&amp;size=normal&amp;badge=bottomright&amp;anchor-ms=20000&amp;execute-ms=15000&amp;cb=bh6o9u13bvcy"
                              ></iframe>
                            </div>
                            <textarea
                              id="g-recaptcha-response"
                              name="g-recaptcha-response"
                              className="g-recaptcha-response"
                              style={{
                                width: "250px",
                                height: "40px",
                                border: "1px solid rgb(193, 193, 193)",
                                margin: "10px 25px",
                                padding: "0px",
                                resize: "none",
                                display: "none",
                              }}
                            ></textarea>
                          </div>
                          <iframe style={{ display: "none" }}></iframe>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn-primary w-full flex items-center justify-center"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        ></path>
                      </svg>
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============================================= */}
        {/* END: Contact Section                          */}
        {/* ============================================= */}


        {/* ============================================= */}
        {/* START: Footer Section                         */}
        {/* Contains contact info, quick links, and copyright notice. */}
        {/* ============================================= */}
        <footer className="bg-afs-dark text-white pt-16 pb-8">
          <div className="container mx-auto px-4">
            
            {/* Footer main content grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              
              {/* Column 1: Academy Info and Social Media */}
              <div>
                <a className="block mb-4" href="/">
                  <span className="text-2xl font-bold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-afs-orange to-afs-red">
                      AFS
                    </span>
                    Academy
                  </span>
                </a>
                <p className="text-white/70 mb-4">
                  Developing elite Multi-Sports players through expert coaching,
                  personalized training, and a passion for the game.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/share/1C9t7zF1oR/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-afs-orange transition-colors"
                  >
                   <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/afs_training_academy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-afs-orange transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Column 2: Program Links */}
              <div>
                <h5 className="font-bold mb-4">Programs</h5>
                <ul className="space-y-2">
                  <li>
                    <a
                      className="text-white/70 hover:text-afs-orange transition-colors"
                      href="/programs"
                    >
                      Beginner Training
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white/70 hover:text-afs-orange transition-colors"
                      href="/programs"
                    >
                      Intermediate Training
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white/70 hover:text-afs-orange transition-colors"
                      href="/programs"
                    >
                      Advanced Training
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white/70 hover:text-afs-orange transition-colors"
                      href="/programs"
                    >
                      Professional Training
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white/70 hover:text-afs-orange transition-colors"
                      href="/programs"
                    >
                      Summer Camps
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3: About Us Links */}
              <div>
                <h5 className="font-bold mb-4">About Us</h5>
                <ul className="space-y-2">
                  <li>
                    <a
                      className="text-white/70 hover:text-afs-orange transition-colors"
                      href="/coaches"
                    >
                      Our Coaches
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white/70 hover:text-afs-orange transition-colors"
                      href="/achievements"
                    >
                      Success Stories
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white/70 hover:text-afs-orange transition-colors"
                      href="/contact"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 4: Contact Information */}
              <div>
                <h5 className="font-bold mb-4">Contact Information</h5>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start">
                    <span className="text-afs-orange mr-2">•</span>
                    <span>
                      Peace Sports Academy, Sector-6, Gomtinagar, Badhamau,
                      Lucknow, UP
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-afs-orange mr-2">•</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-afs-orange mr-2">•</span>
                    <span>8687804879, 8957273494, 6387531144</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-afs-orange mr-2">•</span>
                    <span>Mon-Sat: 6:00 AM - 9:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Footer Bottom: Copyright and Legal Links */}
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/60 text-sm mb-4 md:mb-0">
                © 2025 Peace Sports Academy. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a
                  className="text-white/60 text-sm hover:text-afs-orange transition-colors"
                  href="/privacy"
                >
                  Privacy Policy
                </a>
                <a
                  className="text-white/60 text-sm hover:text-afs-orange transition-colors"
                  href="/terms"
                >
                  Terms of Service
                </a>
                <a
                  className="text-white/60 text-sm hover:text-afs-orange transition-colors"
                  href="/sitemap"
                >
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </footer>
        {/* ============================================= */}
        {/* END: Footer Section                           */}
        {/* ============================================= */}
      </div>

      {/* This container is often used by libraries like 'react-toastify' to display notifications (toasts). */}
      <div
        role="region"
        aria-label="Notifications (F8)"
        tabIndex={-1}
        style={{ pointerEvents: "none" }}
      >
        <ol
          tabIndex={-1}
          className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]"
        ></ol>
      </div>
    </>
  );
}

export default App;
