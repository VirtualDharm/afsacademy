import React from 'react';

// This is a placeholder for the map. In a real application, you'd use a library
// like @vis.gl/react-google-maps to render an interactive map here.
const MapPlaceholder = () => (
  <div
    id="map"
    className="w-full h-full bg-gray-800/50 flex items-center justify-center"
  >
    <p className="text-white/50">Interactive Map Would Be Rendered Here</p>
  </div>
);

function Contact() {
  // Data for the locations to keep the JSX clean
  const locations = [
    { name: "AFS Basketball Training Academy", address: "Loyola International School, Mahanagar, Lucknow" },
    { name: "AFS Training Academy - Parsvnath Planet", address: "Parsvnath Planet, Lucknow" },
    { name: "AFS Training Academy - Eldeco Elegance", address: "Eldeco Elegance, Gomti Nagar, Lucknow" },
    { name: "AFS Basketball Academy - Behind Lulu Mall", address: "Behind Lulu Mall, Lucknow" },
    { name: "AFS Basketball Academy - Skyline Plaza", address: "1st Floor Terrace Area, Skyline Plaza 1, Sushant Golf City" },
    { name: "AFS Basketball Academy - Jeewan Sunshine School", address: "Jeewan Sunshine School, Gomti Nagar Extension" },
    { name: "Shalimar One World Vista", address: "Viraj Khand, Gomti Nagar, Lucknow" },
    { name: "MI Rustle Court", address: "Near Sahara Hospital, Gomti Nagar, Lucknow" },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full text-xs uppercase tracking-wider mb-3 bg-afs-orange/20 text-afs-orange border border-afs-orange/10">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 afs-heading">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-afs-orange to-afs-red">
              Contact
            </span> Us
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Have questions about our programs or ready to start your basketball
            journey? Our team is here to help you take the next step.
          </p>
        </div>

        {/* Contact Details Card */}
        <div className="glass-card rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-8">Our Contact Details</h2>
          <div className="lg:flex lg:gap-12">
            {/* Left Column: Locations */}
            <div className="flex-1 space-y-8">
              <div className="flex items-start">
                <div className="bg-afs-orange/20 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin text-afs-orange">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Our Locations</h3>
                  <div className="text-white/70 space-y-3 mt-2">
                    {locations.map((loc, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-afs-orange mt-2 mr-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium">{loc.name}</p>
                          <p className="text-sm">{loc.address}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Phone, Email, Hours */}
            <div className="flex-1 space-y-8 mt-10 lg:mt-0">
              <div className="flex items-start">
                <div className="bg-afs-orange/20 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone text-afs-orange">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone Number</h3>
                  <p className="text-white/70">+91 72755 46210</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-afs-orange/20 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail text-afs-orange">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email Address</h3>
                  <p className="text-white/70">afstrainingacademy@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-afs-orange/20 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock text-afs-orange">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Working Hours</h3>
                  <p className="text-white/70">Mon–Fri: 6:00 AM – 9:00 PM</p>
                  <p className="text-white/70">Sat–Sun: 8:00 AM – 6:00 PM</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <button className="flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-4 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square mr-2 text-afs-orange">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span>Live Chat</span>
                </button>
                <button className="flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-4 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar mr-2 text-afs-orange">
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  <span>Book Appointment</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="rounded-xl overflow-hidden h-[600px] w-full border border-white/10">
          <MapPlaceholder />
        </div>
      </div>
    </div>
  );
}

export default Contact;