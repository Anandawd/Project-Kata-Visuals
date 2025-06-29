import Image from "next/image";
import Link from "next/link";
import ArrowRight from "./icons/ArrowRight";

export default function About() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#f3f3f3] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid md:grid-cols-2  items-center ">
          {/* Text Content */}
          <div className="flex flex-col justify-between  h-[100%] xl:h-[75%] space-y-14 pr-12 md:space-y-8 ">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                About Kata Visuals
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed w-[80%]">
                Welcome to Kata Visuals, where every frame tells a story. We are
                passionate photographers dedicated to capturing life's most
                precious moments with artistry and authenticity.
              </p>
            </div>

            <div>
              <Link
                href={"/about"}
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-gray-950 to-gray-800 text-gray-50 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Know More
                <ArrowRight
                  width={24}
                  height={20}
                  strokeWidth={3}
                  className="ml-2 "
                />
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="grid grid-cols-2 gap-4 mt-12 md:mt-0">
            <div className="space-y-4 ">
              <div className="glass rounded-2xl overflow-hidden card-hover">
                <Image
                  src={"/images/img_about_1.png"}
                  alt="About Image"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-4 mt-8 ">
              <div className="glass rounded-2xl overflow-hidden card-hover">
                <Image
                  src={"/images/img_about_2.png"}
                  alt="About Image"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
