import Link from "next/link";

export default function Gallery() {
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      alt: "Wedding Photography",
      category: "Wedding",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      alt: "Landscape Photography",
      category: "Landscape",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=800&q=80",
      alt: "Portrait Photography",
      category: "Portrait",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
      alt: "Event Photography",
      category: "Event",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80",
      alt: "Product Photography",
      category: "Product",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
      alt: "Nature Photography",
      category: "Nature",
    },
  ];
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Gallery
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our diverse portfolio showcasing moments that matter, from
            intimate portraits to breathtaking landscapes.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-semibold text-lg">
                    {image.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 transition-transform"
          >
            View Full Portfolio
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
