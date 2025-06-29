"use client";
import Image from "next/image";
import { useState } from "react";
import ArrowLeft from "./icons/ArrowLeft";
import ArrowRight from "./icons/ArrowRight";
import Star from "./icons/Star";

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: "Catherina Davis",
      role: "Wedding Client",
      image: "/images/img_testimonial_1.png",
      content:
        "Kata Visual captured our special day perfectly. The attention to detail and artistic vision exceeded all our expectations. Every photo tells our love story beautifully.",
      rating: 5,
    },
    {
      id: 2,
      name: "Jonathan Denver",
      role: "Corporate Client",
      image: "/images/img_testimonial_2.png",
      content:
        "Professional, creative, and reliable. Kata Visual delivered outstanding corporate headshots and event photography. Their team made the entire process seamless.",
      rating: 5,
    },
    {
      id: 3,
      name: "Jessica Jane",
      role: "Family Client",
      image: "/images/img_testimonial_3.png",
      content:
        "Amazing family portraits! They made our kids feel comfortable and captured genuine smiles. The photos are now treasured memories on our walls.",
      rating: 5,
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#f3f3f3] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            What Our Happy Clients Say
            <br />
            About Kata Visual
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about their experience with us.
          </p>
        </div>

        {/* Testimonial Carousel Mobile*/}
        <div className="max-w-4xl mx-auto md:hidden">
          <div className="glass rounded-3xl p-8 lg:p-12 backdrop-blur-lg bg-white/40 border border-white/20 text-center">
            <div className="mb-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <Image
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  width={60}
                  height={60}
                  className="w-15 h-15 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>
              <blockquote className="text-lg lg:text-xl text-gray-700 mb-4 leading-relaxed">
                {testimonials[currentTestimonial].content}
              </blockquote>

              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={prevTestimonial}
                className="cursor-pointer p-2 rounded-full bg-black/20 shadow-2xl hover:shadow-lg hover:scale-110 transition-all duration-300"
              >
                <ArrowLeft
                  width={24}
                  height={24}
                  strokeWidth={3}
                  className="text-gray-600"
                />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`cursor-pointer w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial
                        ? "bg-blue-600"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  ></button>
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="cursor-pointer p-2 rounded-full bg-black/20 shadow-2xl hover:shadow-lg hover:scale-110 transition-all duration-300"
              >
                <ArrowRight
                  width={24}
                  height={24}
                  strokeWidth={3}
                  className="text-gray-600"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial Carousel Desktop*/}
        <div className="hidden md:flex ">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`glass rounded-3xl p-5 md:p-8 mx-1 lg:mx-3 card-hover cursor-pointer ${
                item.id !== 2 ? "mt-4" : "mt-0"
              }`}
            >
              <div className="flex flex-col lg:flex-row items-center justify-start lg:justify-start space-x-4 mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="w-15 h-15 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">{item.name}</div>
                  <div className="text-gray-600">{item.role}</div>
                </div>
              </div>
              <blockquote className="text-center lg:text-start text-base text-gray-700 leading-relaxed mb-4">
                {item.content}
              </blockquote>
              <div className="flex justify-center lg:justify-start mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
