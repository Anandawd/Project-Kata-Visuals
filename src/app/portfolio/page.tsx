"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const portfolioItems = [
    {
      id: 1,
      title: "Catherina Davis Wedding",
      category: "Wedding Photography",
      image: "/images/img_wedding_thumbnail.png",
      date: "25 June 2025",
      location: "Denpasar, Bali",
      photographer: "Kata Visual",
      slug: "wedding-photography",
    },
    {
      id: 2,
      title: "Alan Walker Wedding",
      category: "Wedding Photography",
      image: "/images/img_wedding_thumbnail.png",
      date: "25 June 2025",
      location: "Denpasar, Bali",
      photographer: "Kata Visual",
      slug: "wedding-photography",
    },
    {
      id: 3,
      title: "Mountain Adventure",
      category: "Lifestyle Photography",
      image: "/images/img_lifestyle_thumbnail.png",
      date: "15 May 2025",
      location: "Ubud, Bali",
      photographer: "Kata Visual",
      slug: "lifestyle-photography",
    },
    {
      id: 4,
      title: "Happy Family Moment",
      category: "Family Photography",
      image: "/images/img_family_thumbnail.png",
      date: "10 April 2025",
      location: "Sanur, Bali",
      photographer: "Kata Visual",
      slug: "family-photography",
    },
    {
      id: 5,
      title: "Romantic Couple Session",
      category: "Couple Photography",
      image: "/images/img_couple_thumbnail.png",
      date: "5 March 2025",
      location: "Canggu, Bali",
      photographer: "Kata Visual",
      slug: "couple-photography",
    },
    {
      id: 6,
      title: "Adventure Photography",
      category: "Activity Photography",
      image: "/images/img_activity_thumbnail.png",
      date: "20 February 2025",
      location: "Mount Batur, Bali",
      photographer: "Kata Visual",
      slug: "activity-photography",
    },
    {
      id: 7,
      title: "Birthday Celebration",
      category: "Party Photography",
      image: "/images/img_party_thumbnail.png",
      date: "12 January 2025",
      location: "Seminyak, Bali",
      photographer: "Kata Visual",
      slug: "party-photography",
    },
    {
      id: 8,
      title: "Corporate Event",
      category: "Corporate Photography",
      image: "/images/img_wedding_thumbnail.png",
      date: "8 December 2024",
      location: "Denpasar, Bali",
      photographer: "Kata Visual",
      slug: "wedding-photography",
    },
  ];

  const categories = [
    "All",
    "Wedding Photography",
    "Lifestyle Photography",
    "Family Photography",
    "Couple Photography",
    "Activity Photography",
    "Party Photography",
    "Corporate Photography",
  ];

  // Filter portfolio items berdasarkan kategori aktif
  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return portfolioItems;
    }
    return portfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  // Hitung jumlah item per kategori
  const getCategoryCount = (category: string) => {
    if (category === "All") {
      return portfolioItems.length;
    }
    return portfolioItems.filter((item) => item.category === category).length;
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <main className="min-h-screen relative">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/img_banner_pages.png')`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 lg:p-12 ">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-50 mb-6 leading-tight">
              Our Portfolio
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              Explore our diverse portfolio showcasing moments that matter, from
              intimate portraits to breathtaking landscapes.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="py-20 bg-gradient-to-b from-[#f3f3f3] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                We Have Served So Many Clients
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our portfolio represents years of dedication to capturing life's
                most precious moments
              </p>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {categories.map((category) => {
                const isActive = activeCategory === category;
                const count = getCategoryCount(category);

                return (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`group relative overflow-hidden text-sm md:text-base px-4 py-3 md:px-6 md:py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                      isActive
                        ? "bg-gradient-to-r from-gray-950 to-gray-800 text-gray-50 shadow-lg"
                        : "glass backdrop-blur-sm bg-white/40 border border-white/20 hover:bg-white/60 text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    <span className="relative z-10 flex items-center space-x-2">
                      <span>{category}</span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          isActive
                            ? "bg-white/20 text-gray-50"
                            : "bg-gray-200 text-gray-600 group-hover:bg-gray-300"
                        }`}
                      >
                        {count}
                      </span>
                    </span>

                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Results counter */}
            <div className="text-center mt-6">
              <p className="text-gray-600">
                Showing{" "}
                <span className="font-semibold text-gray-800">
                  {filteredItems.length}
                </span>
                {activeCategory === "All"
                  ? " total projects"
                  : ` projects in ${activeCategory}`}
              </p>
            </div>
          </div>

          {/* Portfolio Grid with Animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {filteredItems.map((item, index) => (
              <div
                key={`${item.id}-${activeCategory}`}
                className="opacity-0 animate-fade-in"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <Link
                  href={`/portfolio/${item.slug}`}
                  className="group block glass rounded-3xl overflow-hidden card-hover backdrop-blur-sm bg-white/40 border border-white/20"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={450}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Category badge overlay */}
                    <div className="absolute top-4 left-4">
                      <span className="glass-dark text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm bg-black/30 border border-white/20">
                        {item.category.replace(" Photography", "")}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>

                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {item.date}
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {item.location}
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2-2V9z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {item.category}
                      </div>
                    </div>

                    {/* Thumbnail Gallery */}
                    <div className="grid grid-cols-4 gap-2 mt-4">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="aspect-square rounded-lg overflow-hidden"
                        >
                          <Image
                            src={item.image}
                            alt={`${item.title} thumbnail ${i + 1}`}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <div className="glass rounded-3xl p-12 backdrop-blur-lg bg-white/40 border border-white/20 max-w-md mx-auto">
                <svg
                  className="w-16 h-16 text-gray-400 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  No Projects Found
                </h3>
                <p className="text-gray-600 mb-4">
                  We don't have any projects in this category yet.
                </p>
                <button
                  onClick={() => handleCategoryChange("All")}
                  className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-gray-950 to-gray-800 text-gray-50 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  View All Projects
                </button>
              </div>
            </div>
          )}

          {/* Contact CTA */}
          <div className="text-center mt-16">
            <div className="glass rounded-3xl p-8 lg:p-12 backdrop-blur-lg bg-white/40 border border-white/20">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                Ready to Create Your Story?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Let us capture your precious moments with the same passion and
                attention to detail showcased in our portfolio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-gray-950 to-gray-800 text-gray-50 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Get Started
                  <svg
                    className="ml-2 w-5 h-5"
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
                </a>
                <a
                  href="https://wa.me/6288292389999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
