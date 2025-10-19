// src/pages/home/ClosingContact.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { testimonials } from "../../data";


// This component contains the CTA, Coaches, Testimonials, and Contact sections.
function ClosingContact() {
  // Logic for testimonials is kept here as it's only used in this component.
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  // 🔥 Replace these with your actual HubSpot values
  const HUBSPOT_PORTAL_ID = "243234182";
  const HUBSPOT_FORM_ID = "8ab4b95c-2daa-4581-8faf-27ad6dfac0ea";

  // Update state when typing
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const payload = {
        fields: [
          { name: "firstname", value: formData.name },
          { name: "email", value: formData.email },
          { name: "lastname", value: formData.subject },
          { name: "message", value: formData.message },
        ],
        context: {
          pageUri: window.location.href,
          pageName: document.title,
        },
      };

      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const err = await response.json();
        console.error("HubSpot Error:", err);
        setStatus("error");
      }
    } catch (error) {
      console.error("Network Error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ============================================= */}
      {/* START: Call to Action (CTA) Section (UNCHANGED from original Home.jsx) */}
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
      {/* START: Coaches Section (UNCHANGED from original Home.jsx) */}
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
              <span className="text-white">Expert Coaches</span> Leading The Way
            </h2>
            <p className="text-white/80">
              Our coaching staff consists of former professional players and
              certified trainers.
            </p>
          </div>

          {/* Grid of Coach Profiles */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="reveal animated">
              <div className="glass-card rounded-xl animated overflow-hidden h-full flex flex-col card-hover">
                <div className="aspect-[1/1] w-full"><img src="/media/coach_photo.jpg" alt="Dharmendra Kumar" className="w-full h-full object-cover" /></div>
                <div className="p-6 flex-grow flex flex-col"><h3 className="text-xl font-russo mb-1">Dharmendra Kumar</h3><p className="text-afs-orange mb-3 font-montserrat">Director & Taekwondo Coach</p></div>
              </div>
            </div>
            <div className="reveal animated">
              <div className="glass-card rounded-xl animated overflow-hidden h-full flex flex-col card-hover">
                <div className="aspect-[1/1] w-full"><img src="/media/abhishek_bohra.jpg" alt="Pratibha Gautam" className="w-full h-full object-cover" /></div>
                <div className="p-6 flex-grow flex flex-col"><h3 className="text-xl font-russo mb-1">Pratibha Gautam</h3><p className="text-afs-orange mb-3 font-montserrat">Skating Coach</p></div>
              </div>
            </div>
            <div className="reveal animated">
              <div className="glass-card rounded-xl animated overflow-hidden h-full flex flex-col card-hover">
                <div className="aspect-[1/1] w-full"><img src="/media/abhishek_gupta.jpg" alt="Pradumn Singh Yadav" className="w-full h-full object-cover" /></div>
                <div className="p-6 flex-grow flex flex-col"><h3 className="text-xl font-russo mb-1">Pradumn Singh Yadav</h3><p className="text-afs-orange mb-3 font-montserrat">Gymnastics Coach</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* START: Testimonials Section (UNCHANGED from original Home.jsx) */}
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
              Hear what our players have to say about their experience training
              with Peace Sports Academy.
            </p>
          </div>
          {/* Testimonial Card */}
          <div className="reveal animated">
            <div className="glass-card rounded-xl p-8 transition-all duration-500 ease-in-out">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                {/* Player Photo */}
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-2 border-afs-orange">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Testimonial Content */}
                <div className="flex-grow">
                  <div className="mb-4 flex justify-center md:justify-start">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`h-5 w-5 mr-2 transition-colors ${
                          active === i ? "text-afs-orange" : "text-white/30"
                        }`}
                      >
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
                    ))}
                  </div>

                  <p className="text-white/80 text-lg mb-4 font-montserrat">
                    {testimonial.text}
                  </p>
                  <div>
                    <h4 className="font-russo text-center md:text-left">
                      {testimonial.name}
                    </h4>
                    <p className="text-afs-orange text-sm font-montserrat text-center md:text-left">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* START: Contact Section (UNCHANGED from original Home.jsx) */}
      {/* ============================================= */}
      <section className="py-20 bg-afs-dark-accent">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column: Contact Information */}
            <div className="reveal animated">
              <h2 className="text-3xl md:text-4xl font-russo mb-6">
                <span className="text-white">Questions?</span> Contact Us
              </h2>
              <p className="text-white/80 mb-8">
                Have questions about our programs or want to schedule a visit? Fill out the form and we'll get back to you.
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
                    <h5 className="font-russo mb-1">Main Office</h5>
                    <p className="text-white/70 text-sm">Peace Sports Academy, Gomti Nagar Extension Sec-6 Lucknow, Uttar Pradesh</p>
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
                <form className="space-y-5" onSubmit={handleSubmit}>
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
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-afs-orange/50 text-white font-montserrat"
                        placeholder="Your name"
                        required
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
                        value={formData.email}
                        onChange={handleChange}
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
                      value={formData.subject}
                      onChange={handleChange}
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
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
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
                      </>
                    )}
                  </button>

                  {status === "success" && (
                    <p className="text-green-400 text-sm mt-2">
                      ✅ Message sent successfully!
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-red-400 text-sm mt-2">
                      ❌ Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ClosingContact;