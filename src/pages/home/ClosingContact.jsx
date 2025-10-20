// src/pages/home/ClosingContact.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { testimonials } from "../../data";

// ============================================================================
// COMPONENT: ClosingContact
// This component contains the final sections of the homepage:
// 1. Call-to-Action (CTA) Section
// 2. Coaches Section
// 3. Testimonials Section
// 4. Contact Form Section (integrated with HubSpot API)
// ============================================================================
function ClosingContact() {
  // -------------------------------
  // State for Testimonials
  // -------------------------------
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active] || testimonials[0]; // Fallback for safety

  // -------------------------------
  // Contact Form State Management
  // -------------------------------
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  // HubSpot Integration IDs
  const HUBSPOT_PORTAL_ID = "243234182";
  const HUBSPOT_FORM_ID = "8ab4b95c-2daa-4581-8faf-27ad6dfac0ea";

  // -------------------------------
  // HANDLER: Update form state when user types
  // -------------------------------
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // -------------------------------
  // HANDLER: Form Submission Logic (HubSpot API)
  // -------------------------------
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

      // POST request to HubSpot API
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

  // ============================================================================
  // RENDER START
  // ============================================================================
  return (
    <>
      {/* ===================================================================== */}
      {/* SECTION 1: CALL TO ACTION (CTA) */}
      {/* Purpose: Encourage users to join or explore the academy */}
      {/* ===================================================================== */}
      <section className="relative py-24 bg-blippi-bg-grey overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/cta-bg.jpg"
            alt="Multi-Sports court"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blippi-light to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="reveal animated">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blippi-primary to-blippi-secondary flex items-center justify-center mr-6">
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
                    className="lucide lucide-circle-dot text-blippi-white"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="1"></circle>
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-blippi-dark">
                  Ready to
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blippi-primary to-blippi-secondary">
                    {" "}
                    dominate{" "}
                  </span>
                  the court?
                </h2>
              </div>
              <p className="text-xl text-blippi-grey mb-8 ml-26">
                Join Peace Sports Academy today and start your journey to
                Multi-Sports excellence.
              </p>
              <div className="flex flex-wrap gap-4 ml-26">
                <Link className="blippi-btn inline-flex items-center" to="/contact">
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 2: COACHES SECTION */}
      {/* Purpose: Introduce the core coaching team of the academy */}
      {/* ===================================================================== */}
      <section className="py-20 bg-blippi-light">
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
                className="lucide lucide-user text-blippi-primary mr-2"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span className="inline-block py-1 px-3 rounded-full text-xs uppercase tracking-wider font-bold bg-blippi-primary/20 text-blippi-primary border border-blippi-primary/10">
                Our Team
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blippi-dark">
              <span className="text-blippi-dark">Expert Coaches</span> Leading The Way
            </h2>
            <p className="text-blippi-grey">
              Our coaching staff consists of former professional players and certified trainers.
            </p>
          </div>

          {/* Coaches Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Coach 1 */}
            <div className="reveal animated">
              <div className="bg-blippi-bg-white shadow-lg rounded-xl animated overflow-hidden h-full flex flex-col card-hover">
                <div className="aspect-[1/1] w-full">
                  <img
                    src="/media/coach_photo.jpg"
                    alt="Dharmendra Kumar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-1 text-blippi-dark">
                    Dharmendra Kumar
                  </h3>
                  <p className="text-blippi-secondary mb-3">
                    Director & Taekwondo Coach
                  </p>
                </div>
              </div>
            </div>

            {/* Coach 2 */}
            <div className="reveal animated">
              <div className="bg-blippi-bg-white shadow-lg rounded-xl animated overflow-hidden h-full flex flex-col card-hover">
                <div className="aspect-[1/1] w-full">
                  <img
                    src="/media/abhishek_bohra.jpg"
                    alt="Pratibha Gautam"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-1 text-blippi-dark">
                    Pratibha Gautam
                  </h3>
                  <p className="text-blippi-secondary mb-3">Skating Coach</p>
                </div>
              </div>
            </div>

            {/* Coach 3 */}
            <div className="reveal animated">
              <div className="bg-blippi-bg-white shadow-lg rounded-xl animated overflow-hidden h-full flex flex-col card-hover">
                <div className="aspect-[1/1] w-full">
                  <img
                    src="/media/abhishek_gupta.jpg"
                    alt="Pradumn Singh Yadav"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-1 text-blippi-dark">
                    Pradumn Singh Yadav
                  </h3>
                  <p className="text-blippi-secondary mb-3">Gymnastics Coach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 3: TESTIMONIALS */}
      {/* Purpose: Display player/parent feedback dynamically using state */}
      {/* ===================================================================== */}
      <section className="py-20 bg-blippi-bg-grey">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 reveal animated">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blippi-dark">
              <span className="text-blippi-dark">Success Stories</span> From Our Players
            </h2>
            <p className="text-blippi-grey">
              Hear what our players have to say about their experience training with Peace Sports Academy.
            </p>
          </div>

          {/* Testimonial Card */}
          <div className="reveal animated">
            <div className="bg-blippi-bg-white shadow-lg rounded-xl p-8 transition-all duration-500 ease-in-out">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                {/* Testimonial Image */}
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-2 border-blippi-primary">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Testimonial Content */}
                <div className="flex-grow">
                  {/* Navigation Dots */}
                  <div className="mb-4 flex justify-center md:justify-start">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`h-5 w-5 mr-2 transition-colors ${
                          active === i
                            ? "text-blippi-primary"
                            : "text-blippi-dark/30"
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

                  {/* Text and Author */}
                  <p className="text-blippi-grey text-lg mb-4">
                    {testimonial.text}
                  </p>
                  <div>
                    <h4 className="font-bold text-center md:text-left text-blippi-dark">
                      {testimonial.name}
                    </h4>
                    <p className="text-blippi-primary text-sm text-center md:text-left">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 4: CONTACT SECTION */}
      {/* Purpose: Provides contact information and inquiry form integrated
          with HubSpot. Includes address, email, phone, and message form. */}
      {/* ===================================================================== */}
      <section className="py-20 bg-blippi-bg-grey">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info Column */}
            <div className="reveal animated">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blippi-dark">
                <span className="text-blippi-dark">Questions?</span> Contact Us
              </h2>
              <p className="text-blippi-grey mb-8">
                Have questions about our programs or want to schedule a visit? Fill out the form and we'll get back to you.
              </p>

              {/* Contact Details */}
              <div className="space-y-4 mb-6">
                {/* Address */}
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
                    <p className="text-white/70 text-sm">
                      Peace Sports Academy, Gomti Nagar Extension Sec-6 Lucknow, Uttar Pradesh
                    </p>
                  </div>
                </div>

                {/* Email */}
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

                {/* Phone */}
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

            {/* Contact Form Column */}
            <div className="reveal animated">
              <div className="bg-blippi-bg-white shadow-lg rounded-xl animated p-6 md:p-8">
                <form className="space-y-5" onSubmit={handleSubmit}>
                  {/* Input Fields */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="block text-blippi-dark text-sm mb-2 font-bold"
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
                        className="w-full bg-blippi-grey border border-blippi-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blippi-primary/50 text-blippi-dark"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div>
                      <label
                        className="block text-blippi-dark text-sm mb-2 font-bold"
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
                        className="w-full bg-blippi-grey border border-blippi-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blippi-primary/50 text-blippi-dark"
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-blippi-dark text-sm mb-2 font-bold"
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
                      className="w-full bg-blippi-grey border border-blippi-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blippi-primary/50 text-blippi-dark"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>

                  <div>
                    <label
                      className="block text-blippi-dark text-sm mb-2 font-bold"
                      htmlFor="message"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-blippi-grey border border-blippi-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blippi-primary/50 text-blippi-dark h-32"
                      placeholder="Tell us more about your inquiry"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="blippi-btn w-full flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      "Sending..."
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
                        </svg>{" "}
                        Send Message
                      </>
                    )}
                  </button>

                  {/* Submission Status */}
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

// ============================================================================
export default ClosingContact;
