import Link from "next/link";

export default function About() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Kata Visuals
            </h2>
            <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Welcome to Kata Visuals, where every frame tells a story. We are
              passionate photographers dedicated to capturing life's most
              precious moments with artistry and authenticity.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With years of experience in portrait, landscape, and event
              photography, we bring a unique perspective to every project. Our
              goal is to create timeless images that you'll treasure forever.
            </p>
            <Link
              href={"/about"}
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Learn More About Us
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

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80"
                alt="Photographer at work"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-yellow-100 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
