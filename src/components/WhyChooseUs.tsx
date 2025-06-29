import Image from "next/image";
import Checklist from "./icons/Checklist";

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-gray-950 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('images/Hero.png')`,
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="glass-dark rounded-3xl overflow-hidden backdrop-blur-lg bg-black/30 border border-white/20 p-2">
              <Image
                src={"/images/img_wcu_thumbnail.png"}
                alt="Why Choose Us"
                width={600}
                height={400}
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="glass-dark rounded-3xl p-8 lg:p-12 backdrop-blur-lg bg-black/50 border border-white/20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-50 mb-6 leading-tight">
                Why Choose Us
              </h2>

              <p className="text-lg text-gray-50/90 mb-8 leading-relaxed">
                We bring years of experience and a passion for storytelling to
                every project.
              </p>

              {/* Options */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <Checklist strokeWidth={3} />
                  </div>
                  <div>
                    <p className="text-gray-50/90 leading-relaxed">
                      Professional equipment and state-of-the-art technology for
                      stunning results
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <Checklist strokeWidth={3} />
                  </div>
                  <div>
                    <p className="text-gray-50/90 leading-relaxed">
                      Personalized approach to capture your unique story and
                      vision
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <Checklist strokeWidth={3} />
                  </div>
                  <div>
                    <p className="text-gray-50/90 leading-relaxed">
                      Fast delivery and professional editing for picture-perfect
                      memories
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
