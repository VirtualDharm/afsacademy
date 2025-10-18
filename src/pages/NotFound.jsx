import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function NotFound() {
  return (
    <div className="flex-grow flex items-center justify-center py-20">
      <div className="container mx-auto px-4 text-center">
        <span className="inline-block py-1 px-3 rounded-full text-xs uppercase tracking-wider mb-6 bg-blippi-primary/20 text-blippi-primary border border-blippi-primary/10"> {/* UPDATED */}
          Error 404
        </span>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 afs-heading">
          <span>Page Not Found</span>
        </h1>
        <p className="text-blippi-grey/80 text-xl max-w-2xl mx-auto mb-8"> {/* UPDATED */}
          The page you're looking for doesn't exist or has been moved. Let's get
          you back to safety!
        </p>
        
        <Link className="blippi-btn inline-block" to="/"> {/* UPDATED */}
          Return to Homepage
          {/* Added blob structure for consistency */}
          <span className="blob-inner">
            <span className="blobs">
              <span></span><span></span><span></span><span></span>
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;