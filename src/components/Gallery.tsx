import Image from "next/image";
import Link from "next/link";
import ArrowRight from "./icons/ArrowRight";
import PublicIcons from "./icons/PublicIcons";

export default function Gallery() {
  const portfolioItems = [
    {
      id: 1,
      title: "Wedding Photography",
      image: "/images/img_wedding_thumbnail.png",
      category: "Wedding",
      slug: "wedding-photography",
    },
    {
      id: 2,
      title: "Lifestyle Photography",
      image: "/images/img_lifestyle_thumbnail.png",
      category: "Lifestyle",
      slug: "lifestyle-photography",
    },
    {
      id: 3,
      title: "Family Photography",
      image: "/images/img_family_thumbnail.png",
      category: "Family",
      slug: "family-photography",
    },
    {
      id: 4,
      title: "Couple Photography",
      image: "/images/img_couple_thumbnail.png",
      category: "Couple",
      slug: "couple-photography",
    },
    {
      id: 5,
      title: "Activity Photography",
      image: "/images/img_activity_thumbnail.png",
      category: "Activity",
      slug: "activity-photography",
    },
    {
      id: 6,
      title: "Party Photography",
      image: "/images/img_party_thumbnail.png",
      category: "Party",
      slug: "party-photography",
    },
  ];
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our Portfolio
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our diverse portfolio showcasing moments that matter, from
            intimate portraits to breathtaking landscapes.
          </p>
        </div>

        {/* Portfolio  Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((image) => (
            <Link
              key={image.id}
              href={`/portfolio/${image.slug}`}
              className="group relative overflow-hidden rounded-2xl card-hover glass bg-white/40 backdrop-blur-sm border border-white/20"
            >
              <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                <Image
                  src={image.image}
                  alt={image.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-4 right-4">
                  <PublicIcons name="arrow-corner" size={40} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-gray-50 text-xl font-semibold mb-2">
                    {image.title}
                  </h3>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="glass-dark text-gray-50 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm bg-black/30 border border-white/20">
                  {image.category}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-gray-950 to-gray-800 text-gray-50 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            View All Portfolio
            <ArrowRight
              width={24}
              height={20}
              strokeWidth={3}
              className="ml-2"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
