import React, { useEffect, useRef } from 'react';
import '../../App.css';

function FounderMessage() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    const leftEl = leftRef.current;
    const rightEl = rightRef.current;

    if (leftEl) observer.observe(leftEl);
    if (rightEl) observer.observe(rightEl);

    return () => {
      if (leftEl) observer.unobserve(leftEl);
      if (rightEl) observer.unobserve(rightEl);
    };
  }, []);

  return (
    <div className="founder-container">
      <div className="founder-content-wrapper">
        <div className="founder-inner-wrapper">
          
          {/* Left side with the text content */}
          <div
            ref={leftRef}
            className="founder-left-section hidden-left"
          >
            <h2 className="founder-heading">From Alakh Sir’s Desk</h2>
            <div className="founder-quote-container">
              <div className="founder-quote-icon">
                <img
                  alt="left-quote-image"
                  loading="lazy"
                  decoding="async"
                  src="https://static.pw.live/production-curiousjr-fundoo/static/images/left-quotes.svg"
                />
              </div>
              <h4 className="founder-quote-text">
                At Physicswallah, we believe education transforms lives. We're proud of the difference we've made, and now we're focusing on the foundational years – the time when a child's love of learning begins. We envision a future where every young learner discovers the joy of learning and where dreams take flight. We're committed to building that future, together.
              </h4>
              <div className="founder-quote-icon founder-right-quote-icon">
                <img
                  alt="right-quote-image"
                  loading="lazy"
                  decoding="async"
                  src="https://static.pw.live/production-curiousjr-fundoo/static/images/right-quotes.svg"
                />
              </div>
            </div>
            <div className="founder-info">
              <h3 className="founder-name">Alakh Pandey</h3>
              <span className="founder-title">Founder, Physicswallah</span>
            </div>
          </div>

          {/* Right side with the founder's image */}
          <div
            ref={rightRef}
            className="founder-right-section hidden-right"
          >
            <img
              alt="Founder Image"
              loading="lazy"
              width="400"
              height="538"
              decoding="async"
              src="https://static.pw.live/production-curiousjr-fundoo/static/images/Landing-Alakh.png"
              style={{ color: 'transparent', maxWidth: '100%', height: 'auto' }}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default FounderMessage;
