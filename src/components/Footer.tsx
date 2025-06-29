import Link from "next/link";
import ArrowRight from "./icons/ArrowRight";
import Facebook from "./icons/Facebook";
import Instagram from "./icons/Instagram";
import Mail from "./icons/Mail";
import Phone from "./icons/Phone";
import Pin from "./icons/Pin";
import TikTok from "./icons/Tiktok";
import YouTube from "./icons/Youtube";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Team", href: "/team" },
  ];

  const supportLinks = [
    { name: "FAQs", href: "/faq" },
    { name: "Privacy Policies", href: "/" },
    { name: "Terms of Services", href: "/" },
    { name: "Terms of Uses", href: "/" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      icon: <Facebook width={24} height={24} strokeWidth={0} />,
    },
    {
      name: "Instagram",
      href: "#",
      icon: <Instagram width={24} height={24} strokeWidth={0} />,
    },
    {
      name: "YouTube",
      href: "#",
      icon: <YouTube width={24} height={24} strokeWidth={0} />,
    },
    {
      name: "TikTok",
      href: "#",
      icon: <TikTok width={24} height={24} strokeWidth={0} />,
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 md:py-28 bg-gray-950 text-gray-50/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 text-center md:text-start">
          {/* Company Info */}
          <div className="lg:col-span-1 col">
            <h3 className="text-2xl font-bold mb-6">KATA VISUAL</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Professional photography services that capture life's precious
              moments with artistry and authenticity. Let us tell your story
              through our lens.
            </p>

            {/* Social Media Link */}
            <div className="flex space-x-4 justify-center md:justify-start">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="glass-dark p-2 rounded-full backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
          {/* Quick Links */}
          <div></div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gray-50 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links*/}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gray-50 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-2 flex flex-col items-center lg:items-start ">
              <li>
                <Link
                  href="tel:+6282892399999"
                  className="flex min-w-60 justify-between p-3 glass-dark rounded-lg card-hover items-center  text-gray-400 hover:text-gray-50/80 transition-colors duration-300"
                >
                  <div className="flex space-x-1 items-center">
                    <Phone className="mr-3" width={24} height={24} />
                    <p className="text-sm">+62 882 9238 9999</p>
                  </div>
                  <ArrowRight
                    width={24}
                    height={20}
                    strokeWidth={3}
                    className="ml-2"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:info@katavisual.com"
                  className="flex min-w-60 justify-between p-3 glass-dark rounded-lg card-hover items-center  text-gray-400 hover:text-gray-50/80 transition-colors duration-300"
                >
                  <div className="flex space-x-1 items-center">
                    <Mail className="mr-3" width={24} height={24} />
                    <p className="text-sm">info@katavisual.com</p>
                  </div>
                  <ArrowRight
                    width={24}
                    height={20}
                    strokeWidth={3}
                    className="ml-2"
                  />
                </Link>
              </li>
              <li>
                <div className="flex min-w-60 justify-between p-3 glass-dark rounded-lg card-hover items-center  text-gray-400 hover:text-gray-50/80 transition-colors duration-300">
                  <div className="flex space-x1 items-center">
                    <Pin className="mr-3 mt-0.5" width={24} height={24} />
                    <p className="text-sm">Denpasar, Bali</p>
                  </div>
                  <ArrowRight
                    width={24}
                    height={20}
                    strokeWidth={3}
                    className="ml-2"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} Kata Visual. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
