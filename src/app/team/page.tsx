import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ArrowRight from "@/components/icons/ArrowRight";
import Image from "next/image";
import Link from "next/link";

export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Antonio Blanco",
      role: "Manager",
      position: "Creative Director & Lead Photographer",
      image: "/images/img_team_1.png",
      bio: "With over 10 years of experience in photography, Antonio leads our creative vision and ensures every project meets our high standards.",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#",
      },
    },
    {
      id: 2,
      name: "Turah Partayana",
      role: "Professional Photographer",
      position: "Senior Wedding Photographer",
      image: "/images/img_team_2.png",
      bio: "Specializing in wedding photography, Turah captures the most intimate and emotional moments of your special day with artistic flair.",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#",
      },
    },
    {
      id: 3,
      name: "Jerome Polin",
      role: "Professional Videographer",
      position: "Video Production Lead",
      image: "/images/img_team_3.png",
      bio: "Jerome brings stories to life through motion. His cinematic approach to videography creates compelling visual narratives.",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#",
      },
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
              Team
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

      {/* Team Content */}
      <section className="py-20 bg-gradient-to-b from-[#f3f3f3] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Introduce Our
              <br />
              Professional Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the talented individuals behind Kata Visual who bring
              passion, creativity, and expertise to every project.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {teamMembers.map((member) => (
              <div key={member.id} className="group">
                <div className="glass rounded-3xl overflow-hidden card-hover backdrop-blur-sm bg-white/40 border border-white/20">
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={500}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Social Links Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <Link
                          href={member.social.instagram}
                          className="glass-dark p-3 rounded-full backdrop-blur-sm bg-white/20 border border-white/30 hover:bg-white/30 transition-colors"
                        >
                          <svg
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.73-3.016-1.789C4.915 14.313 4.736 13.26 4.736 12c0-1.26.179-2.313.697-3.199.568-1.059 1.719-1.789 3.016-1.789s2.448.73 3.016 1.789c.518.886.697 1.939.697 3.199 0 1.26-.179 2.313-.697 3.199-.568 1.059-1.719 1.789-3.016 1.789zm7.718-3.512c0 2.485-2.019 4.5-4.5 4.5s-4.5-2.015-4.5-4.5 2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5z" />
                          </svg>
                        </Link>
                        <Link
                          href={member.social.facebook}
                          className="glass-dark p-3 rounded-full backdrop-blur-sm bg-white/20 border border-white/30 hover:bg-white/30 transition-colors"
                        >
                          <svg
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                        </Link>
                        <Link
                          href={member.social.twitter}
                          className="glass-dark p-3 rounded-full backdrop-blur-sm bg-white/20 border border-white/30 hover:bg-white/30 transition-colors"
                        >
                          <svg
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="text-center">
                      <span className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                        {member.role}
                      </span>
                      <h3 className="text-xl font-bold text-gray-800 mt-1 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-sm text-blue-600 font-medium mb-4">
                        {member.position}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="glass rounded-3xl p-8 lg:p-12 backdrop-blur-lg bg-white/40 border border-white/20">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                Ready to Work With Us?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Our team is ready to bring your vision to life. Contact us today
                to discuss your photography needs.
              </p>
              <Link
                href={"/contact"}
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-gray-950 to-gray-800 text-gray-50 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Get in touch
                <ArrowRight
                  width={24}
                  height={20}
                  strokeWidth={3}
                  className="ml-2 "
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
