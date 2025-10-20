// src/pages/home/Contact.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";
import { locations } from "../data";

// ============================================================================
// COMPONENT: MapPlaceholder
// Description:
// Temporary visual placeholder for an interactive map. In a live production
// build, this would be replaced by a library like @vis.gl/react-google-maps
// or Leaflet to render a real map.
// ============================================================================
const MapPlaceholder = () => (
  <div
    id="map"
    className="w-full h-full bg-blippi-grey flex items-center justify-center"
  >
    <p className="text-blippi-grey-light">
      Interactive Map Would Be Rendered Here
    </p>
  </div>
);

// ============================================================================
// COMPONENT: Contact
// Description:
// Renders the Contact page with Peace Sports Academy’s contact details,
// including locations, phone numbers, email, working hours, and an embedded map.
// ============================================================================
function Contact() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">

        {/* =================================================================== */}
        {/* SECTION 1: PAGE HEADER */}
        {/* Introduces the page with a title, tagline, and short message. */}
        {/* =================================================================== */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full text-xs uppercase tracking-wider mb-3 bg-blippi-primary/20 text-blippi-primary border border-blippi-primary/10">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 afs-heading">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blippi-primary to-blippi-secondary">
              Contact
            </span>{" "}
            Us
          </h1>
          <p className="text-blippi-grey max-w-2xl mx-auto">
            Have questions about our programs or ready to start your journey?
            Our team is here to help you take the next step.
          </p>
        </div>

        {/* =================================================================== */}
        {/* SECTION 2: CONTACT DETAILS CARD */}
        {/* Displays location addresses, phone, email, and working hours. */}
        {/* =================================================================== */}
        <div className="bg-blippi-bg-white shadow-lg rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-8 text-blippi-dark">
            Our Contact Details
          </h2>
          <div className="lg:flex lg:gap-12">
            
            {/* --------------------------------------------------------------- */}
            {/* LEFT COLUMN: LOCATIONS */}
            {/* Displays multiple branch addresses dynamically from `locations`. */}
            {/* --------------------------------------------------------------- */}
            <div className="flex-1 space-y-8">
              <div className="flex items-start">
                <div className="bg-blippi-primary/20 p-3 rounded-lg mr-4">
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
                    className="lucide lucide-map-pin text-blippi-primary"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-blippi-dark">
                    Our Locations
                  </h3>
                  <div className="text-blippi-grey space-y-3 mt-2">
                    {locations.map((loc, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-blippi-primary mt-2 mr-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium text-blippi-dark">{loc.name}</p>
                          <p className="text-sm">{loc.address}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* --------------------------------------------------------------- */}
            {/* RIGHT COLUMN: CONTACT INFORMATION */}
            {/* Displays phone numbers, email, working hours, and quick actions. */}
            {/* --------------------------------------------------------------- */}
            <div className="flex-1 space-y-8 mt-10 lg:mt-0">
              
              {/* Phone & WhatsApp */}
              <div className="flex items-start">
                <div className="bg-blippi-primary/20 p-3 rounded-lg mr-4">
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
                    className="lucide lucide-phone text-blippi-primary"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-blippi-dark">
                    Phone & WhatsApp
                  </h3>
                  <p className="text-blippi-grey">Phone: 8687804879</p>
                  <p className="text-blippi-grey">WhatsApp: 9369051219</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="bg-blippi-primary/20 p-3 rounded-lg mr-4">
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
                    className="lucide lucide-mail text-blippi-primary"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-blippi-dark">
                    Email Address
                  </h3>
                  <p className="text-blippi-grey">
                    officialpeacesportsacademy@gmail.com
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start">
                <div className="bg-blippi-primary/20 p-3 rounded-lg mr-4">
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
                    className="lucide lucide-clock text-blippi-primary"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-blippi-dark">
                    Working Hours
                  </h3>
                  <p className="text-blippi-grey">Mon–Fri: 6:00 AM – 9:00 PM</p>
                  <p className="text-blippi-grey">Sat–Sun: 8:00 AM – 6:00 PM</p>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <button className="flex items-center justify-center bg-blippi-grey/50 hover:bg-blippi-grey border border-blippi-border rounded-lg p-4 transition-colors">
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
                    className="lucide lucide-message-square mr-2 text-blippi-primary"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span className="text-blippi-dark">Live Chat</span>
                </button>
                <button className="flex items-center justify-center bg-blippi-grey/50 hover:bg-blippi-grey border border-blippi-border rounded-lg p-4 transition-colors">
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
                    className="lucide lucide-calendar mr-2 text-blippi-primary"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  <span className="text-blippi-dark">Book Appointment</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================================== */}
        {/* SECTION 3: MAP SECTION */}
        {/* Displays a placeholder or real interactive map inside a container. */}
        {/* =================================================================== */}
        <div className="rounded-xl overflow-hidden h-[600px] w-full border border-blippi-border">
          <MapPlaceholder />
        </div>
      </div>
    </div>
  );
}

// ============================================================================
export default Contact;
