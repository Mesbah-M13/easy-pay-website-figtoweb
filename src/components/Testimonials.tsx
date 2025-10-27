"use client";
import { useState } from "react";
import Image from "next/image";

// Custom Arrow Icons (Replacing text arrows)
const ChevronLeft = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
);
const ChevronRight = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
);

const placeholderImage = (text) => `https://placehold.co/40x40/4f46e5/ffffff?text=${text}`;

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ethan Williams",
      role: "Digital Marketing Specialist",
      review:
        "Experience a payment app built on simplicity and transparency. No hidden fees, just a seamless user experience that makes every transaction easy and stress-free. Say goodbye to confusion and hello to straightforward payments.",
      image: placeholderImage('E'),
    },
    {
      name: "Daniel Thompson",
      role: "Product Designer",
      review:
        "Discover a payment app focused on clarity and transparency. Enjoy a seamless process without hidden fees, providing confidence in every transaction.",
      image: placeholderImage('D'),
    },
    {
      name: "Sophia Carter",
      role: "Financial Consultant",
      review:
        "Monks Pay has simplified my daily financial tasks. The dashboard is clean, and the security features are reassuring for all my clients.",
      image: placeholderImage('S'),
    }
  ];

  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-white to-purple-100/90 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE: Content and Controls */}
        <div className="md:pr-10">
          <p className="uppercase text-sm font-semibold text-indigo-600 tracking-wider">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            We’ve built trust with <br /> reviews from real users
          </h2>
          <p className="text-gray-600 mt-4">
            Boost your credibility by featuring genuine testimonials from real
            users, showcasing their positive experiences and satisfaction with
            Monks Pay services.
          </p>

          {/* ARROWS */}
          <div className="flex gap-3 mt-8">
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition text-gray-700"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-700 transition"
            >
              <ChevronRight />
            </button>
          </div>
          {/* Dots/Indicators */}
          <div className="flex gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${current === index ? 'bg-indigo-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: Slider */}
        {/* Added fixed height (h-96) to stabilize the vertical position of the card */}
        <div className="relative overflow-hidden w-full h-96 md:h-auto flex items-center justify-center">

          {/* Slider content wrapper. The width calculation is correct for the track. */}
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            // The transform moves the entire flex row horizontally based on the current index
            style={{
              transform: `translateX(-${current * 100}%)`,
              width: `${testimonials.length * 100}%`
            }}
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                // Key Fix: w-full and flex-shrink-0 ensure it takes up exactly the visible space
                className="w-full flex-shrink-0 flex items-center justify-center"
              // Removed inline width style here as w-full handles it correctly
              >
                <div className="bg-white rounded-3xl shadow-xl p-8 max-w-sm w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between border border-gray-100">
                  <div className="flex mb-4 text-yellow-500 text-xl">
                    <span role="img" aria-label="rating">★★★★★</span>
                  </div>
                  <p className="text-gray-800 text-sm mb-6">
                    "{item.review}"
                  </p>

                  <div className="flex items-center gap-4 mt-auto">
                    {/* Using simple <img> instead of Next/Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover w-12 h-12"
                      onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/48x48/4f46e5/ffffff?text=${item.name.charAt(0)}`; }}
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 text-base">
                        {item.name}
                      </h4>
                      <p className="text-indigo-600 text-sm font-medium">{item.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}