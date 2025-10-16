import React from 'react'
import "../App.css"

function Header() {
  return (
    <>
      <nav className="fixed w-full z-50 transition-all duration-300 bg-afs-dark/90 backdrop-blur-md py-4 shadow-lg dark:bg-black/80">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">

            {/* Logo and Brand Name */}
            <a className="flex items-center space-x-2" href="/">
              <img
                src="/media/AFS Logo.png"
                alt="Peace Sports Academy Logo"
                className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover border-2 border-afs-orange/50"
              />
              <span className="text-2xl font-russo tracking-tight text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-afs-orange to-afs-red">
                  Peace Sports Academy
                </span>
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
    </>
  );
}

export default Header