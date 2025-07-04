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
        instagram: "https://instagram.com/antonio_blanco_photo",
        facebook: "https://facebook.com/antonio.blanco.photographer",
        whatsapp: "+6288292389999",
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
        instagram: "https://instagram.com/turah_partayana",
        facebook: "https://facebook.com/turah.partayana.photographer",
        whatsapp: "+6288292389999",
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
        instagram: "https://instagram.com/jerome_polin_video",
        facebook: "https://facebook.com/jerome.polin.videographer",
        whatsapp: "+6288292389999",
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12">
            {teamMembers.map((member) => (
              <div key={member.id} className="group">
                {/* Mobile Card Layout */}
                <div className="md:hidden glass rounded-2xl overflow-hidden card-hover backdrop-blur-sm bg-white/40 border border-white/20 h-[150px] flex gap-1">
                  {/* Mobile Image - Square */}
                  <div className="relative w-[150px] h-[150px] flex-shrink-0 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={150}
                      height={150}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Mobile Content */}
                  <div className="flex-1 p-3 flex flex-col justify-center overflow-hidden gap-1">
                    <span className="text-xs text-gray-500 font-medium uppercase tracking-wide truncate">
                      {member.role}
                    </span>
                    <h3 className="text-sm font-bold text-gray-800 truncate">
                      {member.name}
                    </h3>
                    <p className="text-xs text-blue-600 font-medium truncate">
                      {member.position}
                    </p>

                    {/* Mobile Social Icons */}
                    <div className="flex space-x-2 mt-4">
                      <Link
                        href={member.social.instagram}
                        className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                      >
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </Link>
                      <Link
                        href={member.social.facebook}
                        className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                      >
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </Link>
                      <Link
                        href={`https://wa.me/${member.social.whatsapp.replace(
                          /[^0-9]/g,
                          ""
                        )}`}
                        className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                      >
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Desktop Card Layout */}
                <div className="hidden md:block glass rounded-3xl overflow-hidden card-hover backdrop-blur-sm bg-white/40 border border-white/20">
                  {/* Desktop Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={500}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Desktop Social Links Overlay */}
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
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
                          href={`https://wa.me/${member.social.whatsapp.replace(
                            /[^0-9]/g,
                            ""
                          )}`}
                          className="glass-dark p-3 rounded-full backdrop-blur-sm bg-white/20 border border-white/30 hover:bg-white/30 transition-colors"
                        >
                          <svg
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Content */}
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
