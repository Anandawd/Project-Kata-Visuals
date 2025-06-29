import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Checklist from "@/components/icons/Checklist";
import Image from "next/image";

export default function AboutPage() {
  const services = [
    {
      title: "Wedding Photography",
      description:
        "Capture your special day with artistic and emotional storytelling",
    },
    {
      title: "Portrait Photography",
      description:
        "Professional headshots and personal portraits that showcase your personality",
    },
    {
      title: "Event Photography",
      description: "Document your corporate events, parties, and celebrations",
    },
    {
      title: "Lifestyle Photography",
      description: "Authentic moments in natural settings that tell your story",
    },
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
              About Us
              <br />
              Kata Visual
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              Professional photography services that tell your unique story
              through stunning visuals
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-gradient-to-b from-[#f3f3f3] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* About Section */}
          <div className="grid md:grid-cols-2 lg:h-[480px] items-center">
            {/* Text Content */}
            <div className="flex flex-col justify-between  h-[100%] xl:h-[75%] space-y-14 pr-12 md:space-y-8 ">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                  About Kata Visual
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed w-[80%]">
                  Welcome to Kata Visuals, where every frame tells a story. We
                  are passionate photographers dedicated to capturing life's
                  most precious moments with artistry and authenticity.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed w-[80%]">
                  Founded in Bali, our team combines years of experience with a
                  fresh perspective on visual storytelling. We believe that
                  every moment deserves to be preserved beautifully, whether
                  it's a wedding, corporate event, or family gathering.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="hidden lg:flex gap-4 mt-12 md:mt-0">
              <div className="">
                <div className="glass rounded-2xl overflow-hidden card-hover">
                  <Image
                    src={"/images/img_about_1.png"}
                    alt="About Image"
                    width={300}
                    height={400}
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="absolute right-0">
                <div className="glass rounded-tl-2xl rounded-bl-2xl  overflow-hidden card-hover">
                  <Image
                    src={"/images/img_about_4.png"}
                    alt="About Image"
                    width={420}
                    height={400}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="lg:hidden grid grid-cols-2 gap-4 mt-12 md:mt-0">
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

          {/* Services Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center my-20">
            <div className="order-2 lg:order-1">
              <div className="glass rounded-3xl overflow-hidden card-hover">
                <Image
                  src={"/images/img_about_3.png"}
                  alt="Photography equipment"
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-800">
                What Our Services
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We offer a comprehensive range of photography services tailored
                to meet your specific needs.
              </p>

              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mt-1">
                      <Checklist strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        {service.title}
                      </h4>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
