import React from 'react';
import '../App.css'; // Ensure your stylesheet includes the updated sticky footer CSS

function StickyFooter({ isVisible }) {
  return (
    <div className={`sticky-footer-bar ${isVisible ? 'visible' : ''}`}>
      <div className="sticky-footer-card">
        <div className="sticky-footer-content">
          <div>
            <h4 className="sticky-footer-heading">
              Learning made fun for Curious Minds! 🚀
            </h4>
            <span className="sticky-footer-subheading">
              Choose a learning program for your kid to get started.
            </span>
          </div>

          {/* Themed CTA button (consistent with your existing styles) */}
          <button className="blippi-btn">
            Book a Demo
            <span className="blob-inner">
              <span className="blobs">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default StickyFooter;
