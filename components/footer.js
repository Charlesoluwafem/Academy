import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1b6e42] py-10 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-wrap justify-between">
        {/* Left Section - Academy Logo */}
        <div className="w-full md:w-1/4 text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-xl font-semibold text-yellow-400">Academy</h2>
          <p className="text-sm opacity-90">Powered by</p>
          <img src="/images/logo-2.svg" alt="YN Logo" className="w-24 mt-2 mx-auto md:mx-0" />
        </div>

        {/* Middle Section - Links */}
        <div className="w-full md:w-1/2 flex flex-wrap justify-between text-center md:text-left">
          {/* Column 1 */}
          <div className="w-1/3">
            <Link href="/aboutus" className="block text-white no-underline hover:opacity-80">
              About Us
            </Link>
            <Link href="/candidates" className="block text-white no-underline hover:opacity-80">
              Candidates
            </Link>
            <Link href="/schedule-call" className="block text-white no-underline hover:opacity-80">
              Schedule A Call
            </Link>
          </div>

          {/* Column 2 */}
          <div className="w-1/3">
            <Link href="/advertise" className="block text-white no-underline hover:opacity-80">
              Advertise With Us
            </Link>
            <Link href="/login" className="block text-white no-underline hover:opacity-80">
              Login
            </Link>
            <Link href="/signup" className="block text-white no-underline hover:opacity-80">
              Sign Up
            </Link>
          </div>

          {/* Column 3 */}
          <div className="w-1/3">
            <Link href="/launch-program" className="block text-white no-underline hover:opacity-80">
              Launch A Virtual Program With Us
            </Link>
            <Link href="/terms" className="block text-white no-underline hover:opacity-80">
              Terms of Use
            </Link>
            <Link href="/privacy" className="block text-white no-underline hover:opacity-80">
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Right Section - Social Icons */}
        <div className="w-full md:w-1/4 flex justify-center md:justify-end space-x-4 mt-6 md:mt-0">
          {[
            { href: "#", src: "/images/instagram.jpg", alt: "Instagram" },
            { href: "#", src: "/images/linkedin.svg", alt: "LinkedIn" },
            { href: "#", src: "/images/facebook.svg", alt: "Facebook" },
            { href: "#", src: "/images/twitter.svg", alt: "Twitter" },
          ].map((icon, index) => (
            <Link key={index} href={icon.href} className="hover:opacity-80 transition">
              <img src={icon.src} alt={icon.alt} className="w-6 h-6" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;



