"use client";
import { useState } from "react";

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Bride",
      content:
        "Kata Visuals captured our wedding day perfectly. Every photo tells a story, and we couldn't be happier with the results. Their attention to detail and professionalism made our special day even more memorable.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Corporate Client",
      content:
        "Working with Kata Visuals for our company's branding photoshoot was an excellent experience. They understood our vision and delivered beyond expectations. Highly professional and creative!",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Event Organizer",
      content:
        "I've hired Kata Visuals for multiple events, and they never disappoint. Their ability to capture candid moments and the energy of our events is remarkable. Truly talented photographers!",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    },
  ];

  const [currentIndex, setcurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setcurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setcurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about their experience with Kata Visuals.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-blue-100">
              <svg
                className="w-16 h-16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].content}"
              </p>
              {/* Client Info */}
              <div className="flex items-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-gray-900 font-semibold text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 md:-mx-16">
              <button
                onClick={prevTestimonial}
                className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setcurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 cursor-pointer ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
