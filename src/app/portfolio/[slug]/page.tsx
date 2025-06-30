import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { notFound } from "next/navigation";

const portfolioData = {
  "wedding-photography": {
    category: "Wedding Photography",
    description:
      "Explore our diverse portfolio showcasing moments that matter, from intimate portraits to breathtaking landscapes.",
    projects: [
      {
        id: 1,
        title: "Catherina Davis Wedding",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "25 June 2025",
        location: "Denpasar, Bali",
        photographer: "Kata Visual",
        mainImage: "/images/img_wedding_thumbnail.png",
        thumbnails: [
          "/images/img_wedding_thumbnail.png",
          "/images/img_wedding_thumbnail.png",
          "/images/img_wedding_thumbnail.png",
          "/images/img_wedding_thumbnail.png",
        ],
      },
      {
        id: 2,
        title: "Alan Walker Wedding",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "25 June 2025",
        location: "Denpasar, Bali",
        photographer: "Kata Visual",
        mainImage: "/images/img_wedding_thumbnail.png",
        thumbnails: [
          "/images/img_wedding_thumbnail.png",
          "/images/img_wedding_thumbnail.png",
          "/images/img_wedding_thumbnail.png",
          "/images/img_wedding_thumbnail.png",
        ],
      },
    ],
  },
  "lifestyle-photography": {
    category: "Lifestyle Photography",
    description:
      "Authentic moments in natural settings that tell your story with genuine emotion and artistry.",
    projects: [
      {
        id: 1,
        title: "Mountain Adventure",
        description:
          "Capturing the spirit of adventure and connection with nature in stunning mountain landscapes.",
        date: "15 May 2025",
        location: "Ubud, Bali",
        photographer: "Kata Visual",
        mainImage: "/images/img_lifestyle_thumbnail.png",
        thumbnails: [
          "/images/img_lifestyle_thumbnail.png",
          "/images/img_lifestyle_thumbnail.png",
          "/images/img_lifestyle_thumbnail.png",
          "/images/img_lifestyle_thumbnail.png",
        ],
      },
    ],
  },
  "family-photography": {
    category: "Family Photography",
    description:
      "Heartwarming family moments captured with love, showcasing the unique bonds that make each family special.",
    projects: [
      {
        id: 1,
        title: "Happy Family Moment",
        description:
          "A beautiful family session capturing the joy and love shared between family members.",
        date: "10 April 2025",
        location: "Sanur, Bali",
        photographer: "Kata Visual",
        mainImage: "/images/img_family_thumbnail.png",
        thumbnails: [
          "/images/img_family_thumbnail.png",
          "/images/img_family_thumbnail.png",
          "/images/img_family_thumbnail.png",
          "/images/img_family_thumbnail.png",
        ],
      },
    ],
  },
  "couple-photography": {
    category: "Couple Photography",
    description:
      "Romantic sessions that capture the intimate connection and love between couples.",
    projects: [
      {
        id: 1,
        title: "Romantic Couple Session",
        description:
          "An intimate couple session showcasing the deep connection and love between partners.",
        date: "5 March 2025",
        location: "Canggu, Bali",
        photographer: "Kata Visual",
        mainImage: "/images/img_couple_thumbnail.png",
        thumbnails: [
          "/images/img_couple_thumbnail.png",
          "/images/img_couple_thumbnail.png",
          "/images/img_couple_thumbnail.png",
          "/images/img_couple_thumbnail.png",
        ],
      },
    ],
  },
  "activity-photography": {
    category: "Activity Photography",
    description:
      "Dynamic photography capturing people in action, showcasing energy and movement.",
    projects: [
      {
        id: 1,
        title: "Adventure Photography",
        description:
          "High-energy adventure photography capturing the thrill and excitement of outdoor activities.",
        date: "20 February 2025",
        location: "Mount Batur, Bali",
        photographer: "Kata Visual",
        mainImage: "/images/img_activity_thumbnail.png",
        thumbnails: [
          "/images/img_activity_thumbnail.png",
          "/images/img_activity_thumbnail.png",
          "/images/img_activity_thumbnail.png",
          "/images/img_activity_thumbnail.png",
        ],
      },
    ],
  },
  "party-photography": {
    category: "Party Photography",
    description:
      "Vibrant celebration photography that captures the joy and energy of special occasions.",
    projects: [
      {
        id: 1,
        title: "Birthday Celebration",
        description:
          "A lively birthday celebration captured with energy and joy, preserving precious memories.",
        date: "12 January 2025",
        location: "Seminyak, Bali",
        photographer: "Kata Visual",
        mainImage: "/images/img_party_thumbnail.png",
        thumbnails: [
          "/images/img_party_thumbnail.png",
          "/images/img_party_thumbnail.png",
          "/images/img_party_thumbnail.png",
          "/images/img_party_thumbnail.png",
        ],
      },
    ],
  },
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const portfolioItem = portfolioData[slug as keyof typeof portfolioData];

  if (!portfolioItem) {
    notFound();
  }

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
          <div className="rounded-3xl p-8 lg:p-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-50 mb-6 leading-tight">
              {portfolioItem.category}
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              {portfolioItem.description}
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="py-20 bg-gradient-to-b from-[#f3f3f3] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {portfolioItem.projects.map((project, index) => (
              <div
                key={project.id}
                className="grid lg:grid-cols-2 gap-12 items-start"
              >
                {/* Project Image - Left side for odd index, right for even */}
                <div
                  className={`${
                    index % 2 === 0 ? "order-1" : "order-1 lg:order-2"
                  }`}
                >
                  <div className="glass rounded-3xl overflow-hidden card-hover backdrop-blur-sm bg-white/40 border border-white/20 p-2">
                    <Image
                      src={project.mainImage}
                      alt={project.title}
                      width={600}
                      height={450}
                      className="w-full h-96 object-cover rounded-2xl"
                    />
                  </div>

                  {/* Thumbnail Gallery */}
                  <div className="grid grid-cols-4 gap-2 mt-4">
                    {project.thumbnails.map((thumb, thumbIndex) => (
                      <div
                        key={thumbIndex}
                        className="aspect-square rounded-lg overflow-hidden glass backdrop-blur-sm bg-white/40 border border-white/20 p-1"
                      >
                        <Image
                          src={thumb}
                          alt={`${project.title} thumbnail ${thumbIndex + 1}`}
                          width={120}
                          height={120}
                          className="w-full h-full object-cover rounded-md opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Details - Right side for odd index, left for even */}
                <div
                  className={`${
                    index % 2 === 0 ? "order-2" : "order-2 lg:order-1"
                  } space-y-6`}
                >
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                      {project.title}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
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
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Date</h3>
                        <p className="text-gray-600">{project.date}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
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
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          Location
                        </h3>
                        <p className="text-gray-600">{project.location}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
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
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          Photographer
                        </h3>
                        <p className="text-gray-600">{project.photographer}</p>
                      </div>
                    </div>
                  </div>

                  {/* Contact CTA */}
                  <div className="pt-6">
                    <a
                      href="/contact"
                      className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-gray-950 to-gray-800 text-gray-50 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      Book Similar Session
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
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Related Portfolio CTA */}
          {/* <div className="text-center mt-20">
            <div className="glass rounded-3xl p-8 lg:p-12 backdrop-blur-lg bg-white/40 border border-white/20">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                Explore More Portfolio
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Discover more of our work across different photography
                categories and find inspiration for your next session.
              </p>
              <a
                href="/portfolio"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                View All Portfolio
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
            </div>
          </div> */}
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const portfolioItem = portfolioData[slug as keyof typeof portfolioData];

  if (!portfolioItem) {
    return {
      title: "Portfolio Not Found - Kata Visual",
      description: "The requested portfolio page was not found.",
    };
  }

  return {
    title: `${portfolioItem.category} - Kata Visual Portfolio`,
    description: portfolioItem.description,
    keywords: `${portfolioItem.category}, photography bali, kata visual, ${slug}`,
    openGraph: {
      title: `${portfolioItem.category} - Kata Visual`,
      description: portfolioItem.description,
      type: "website",
    },
  };
}

// Generate static params for static generation
export async function generateStaticParams() {
  return Object.keys(portfolioData).map((slug) => ({
    slug,
  }));
}
