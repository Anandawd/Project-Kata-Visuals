import Link from "next/link";
import ChevronDownIcon from "./icons/ChevronDownIcon";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('images/Hero.png')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-50 mb-6 animate-fade-in">
            {" "}
            Capturing Moments,
            <br />
            Creating Memories
          </h1>
          <p className="text-lg md:text-xl text-gray-50/90 mb-8 max-w-2xl mx-auto animate-fade-in-delay">
            Professional photography services that tell your unique story
            through stunning visuals
          </p>
          <Link
            href="/portfolio"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 animate-fade-in-delay-2"
          >
            Explore Our Work
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-50 animate-bounce">
        <ChevronDownIcon className="w-6 h-6" />
      </div>
    </section>
  );
}
