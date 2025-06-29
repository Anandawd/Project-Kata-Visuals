"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";

export default function FaqPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const faqItems = [
    {
      question: "Where are you located?",
      answer:
        "We are based in Denpasar, Bali, Indonesia. We serve clients throughout Bali and can travel to other locations for destination photography.",
    },
    {
      question: "Can I schedule a visit to your office?",
      answer:
        "Yes, of course! But you must contact us before visiting our office to ensure we are available. You can reach us via phone, email, or WhatsApp to schedule an appointment.",
    },
    {
      question: "How to book your services?",
      answer:
        "Booking our services is easy! Simply contact us through our website contact form, WhatsApp, or phone. We will discuss your requirements, provide a quote, and schedule your session once you confirm.",
    },
    {
      question: "What types of photography do you offer?",
      answer:
        "We specialize in wedding photography, portrait sessions, family photography, corporate events, lifestyle shoots, and destination photography. Each service is tailored to meet your specific needs.",
    },
    {
      question: "How far in advance should I book?",
      answer:
        "We recommend booking at least 2-3 months in advance, especially for weddings and special events. However, we can accommodate last-minute bookings depending on our availability.",
    },
    {
      question: "Do you provide edited photos?",
      answer:
        "Yes, all our photos are professionally edited and color-corrected. We include basic editing in all packages, and premium retouching is available as an add-on service.",
    },
    {
      question: "How long does it take to receive the photos?",
      answer:
        "Delivery time varies by service type. Portrait sessions are typically delivered within 1-2 weeks, while wedding photography can take 4-6 weeks due to the extensive editing process.",
    },
    {
      question: "Do you offer video services?",
      answer:
        "Yes, we offer professional videography services including wedding films, corporate videos, and promotional content. Our videographer Jerome specializes in cinematic storytelling.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "We understand that plans can change. Cancellations made 30+ days before the event receive a full refund minus a processing fee. Please refer to our contract for detailed terms.",
    },
    {
      question: "Do you travel for destination weddings?",
      answer:
        "Absolutely! We love destination weddings and have experience shooting throughout Indonesia and internationally. Travel costs will be added to the package quote.",
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
              Frequently Asked
              <br />
              Questions
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              Professional photography services that tell your unique story
              through stunning visuals
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-gradient-to-b from-[#f3f3f3] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Questions That Might
              <br />
              Help You
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to the most commonly asked questions about our
              photography services and booking process.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="max-w-5xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="glass rounded-2xl backdrop-blur-sm bg-white/40 border border-white/20 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/20 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-lg font-semibold text-gray-800">
                      /{String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-medium text-gray-800">
                      {item.question}
                    </h3>
                  </div>
                  <div
                    className={`transform transition-transform duration-200 ${
                      openItems.includes(index) ? "rotate-180" : ""
                    }`}
                  >
                    {openItems.includes(index) ? (
                      <svg
                        className="w-6 h-6 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </div>
                </button>

                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <div className="pl-12">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16">
            <div className="glass rounded-3xl p-8 lg:p-12 backdrop-blur-lg bg-white/40 border border-white/20">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                Still Have Questions?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Don't hesitate to
                reach out to our team for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Contact Us
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
                <a
                  href="https://wa.me/6288292389999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
