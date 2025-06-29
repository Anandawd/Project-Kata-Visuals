import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: "Catherina Davis Wedding",
      category: "Wedding Photography",
      image: "/images/img_wedding_thumbnail.png",
      date: "25 June 2025",
      location: "Denpasar, Bali",
      photographer: "Kata Visual",
    },
    {
      id: 2,
      title: "Alan Walker Wedding",
      category: "Wedding Photography",
      image: "/images/img_wedding_thumbnail.png",
      date: "25 June 2025",
      location: "Denpasar, Bali",
      photographer: "Kata Visual",
    },
    {
      id: 3,
      title: "Mountain Adventure",
      category: "Lifestyle Photography",
      image: "/images/img_wedding_thumbnail.png",
      date: "15 May 2025",
      location: "Ubud, Bali",
      photographer: "Kata Visual",
    },
    {
      id: 4,
      title: "Happy Family Moment",
      category: "Family Photography",
      image: "/images/img_wedding_thumbnail.png",
      date: "10 April 2025",
      location: "Sanur, Bali",
      photographer: "Kata Visual",
    },
    {
      id: 5,
      title: "Romantic Couple Session",
      category: "Couple Photography",
      image: "/images/img_wedding_thumbnail.png",
      date: "5 March 2025",
      location: "Canggu, Bali",
      photographer: "Kata Visual",
    },
    {
      id: 6,
      title: "Adventure Photography",
      category: "Activity Photography",
      image: "/images/img_wedding_thumbnail.png",
      date: "20 February 2025",
      location: "Mount Batur, Bali",
      photographer: "Kata Visual",
    },
    {
      id: 7,
      title: "Birthday Celebration",
      category: "Party Photography",
      image: "/images/img_wedding_thumbnail.png",
      date: "12 January 2025",
      location: "Seminyak, Bali",
      photographer: "Kata Visual",
    },
    {
      id: 8,
      title: "Corporate Event",
      category: "Corporate Photography",
      image: "/images/img_wedding_thumbnail.png",
      date: "8 December 2024",
      location: "Denpasar, Bali",
      photographer: "Kata Visual",
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
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-full glass backdrop-blur-sm bg-white/40 border border-white/20 hover:bg-white/60 transition-all duration-300 text-gray-700 font-medium"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                // className={`${index % 2 === 0 ? "" : "md:mt-12"}`}
              >
                <Link
                  href={`/portfolio/${item.id}`}
                  className="group block glass rounded-3xl overflow-hidden card-hover backdrop-blur-sm bg-white/40 border border-white/20"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={450}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="glass-dark text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm bg-black/30 border border-white/20">
                        {item.category}
                      </span>
                      <svg
                        className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors"
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
                    </div>

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
                            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {item.photographer}
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
        </div>
      </section>

      <Footer />
    </main>
  );
}
