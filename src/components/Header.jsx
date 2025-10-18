import React, { useState } from 'react'; // Added useState for mobile menu
import { Link } from 'react-router-dom'; // Changed <a> to <Link>
import '../App.css';

function Header() {
  // Simple state to toggle mobile menu visibility
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* UPDATED: Changed background from dark to light grey. Removed backdrop-blur and shadows for now. */}
      <nav className="fixed w-full z-50 transition-all duration-300 bg-blippi-bg-grey backdrop-blur-md py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">

            {/* UPDATED: Changed logo text to be visible on a light background. */}
            <Link className="flex items-center space-x-2" to="/">
              <img
                src="/media/AFS Logo.png" // You can change this to the Blippi logo when ready
                alt="Peace Sports Academy Logo"
                className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover border-2 border-blippi-secondary" // UPDATED: Border color
              />
              <span className="text-2xl font-russo tracking-tight text-blippi-dark"> {/* UPDATED: Text color */}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blippi-primary to-blippi-secondary">
                  Peace Sports Academy
                </span>
              </span>
            </Link>

            {/* UPDATED: Changed link text colors to be visible on a light background. */}
            <div className="hidden md:flex space-x-8">
              <Link className="text-blippi-dark hover:text-blippi-primary transition-colors nav-link-hover font-montserrat font-semibold" to="/">
                Home
              </Link>
              <Link className="text-blippi-dark hover:text-blippi-primary transition-colors nav-link-hover font-montserrat font-semibold" to="/programs">
                Programs
              </Link>
              <Link className="text-blippi-dark hover:text-blippi-primary transition-colors nav-link-hover font-montserrat font-semibold" to="/coaches">
                Coaches
              </Link>
              <Link className="text-blippi-dark hover:text-blippi-primary transition-colors nav-link-hover font-montserrat font-semibold" to="/achievements">
                Achievements
              </Link>
            </div>

            {/* UPDATED: Replaced custom 'btn-primary' with the new '.blippi-btn' class. */}
            <div className="hidden md:flex items-center gap-4">
              <Link className="blippi-btn" to="/contact">
                Online Admission
                <span className="blob-inner">
                  <span className="blobs">
                    <span></span><span></span><span></span><span></span>
                  </span>
                </span>
              </Link>
            </div>

            {/* UPDATED: Hamburger icon color and added onClick functionality. */}
            <button 
              className="md:hidden text-blippi-dark" // UPDATED: Text color
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Mobile Menu - UPDATED: Made functional */}
          <div className={`md:hidden fixed left-0 right-0 top-[84px] p-4 mt-2 bg-blippi-bg-white shadow-lg transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
            <div className="flex flex-col space-y-4">
              <Link className="text-blippi-dark hover:text-blippi-primary py-2 border-b border-blippi-border font-montserrat font-semibold" to="/">Home</Link>
              <Link className="text-blippi-dark hover:text-blippi-primary py-2 border-b border-blippi-border font-montserrat font-semibold" to="/programs">Programs</Link>
              <Link className="text-blippi-dark hover:text-blippi-primary py-2 border-b border-blippi-border font-montserrat font-semibold" to="/coaches">Coaches</Link>
              <Link className="text-blippi-dark hover:text-blippi-primary py-2 border-b border-blippi-border font-montserrat font-semibold" to="/achievements">Achievements</Link>
              <Link className="blippi-btn text-center" to="/contact">Online Admission</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;