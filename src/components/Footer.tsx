const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-10 py-10">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              {/* Logo */}
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#D642A6] text-sm font-bold text-white">
                DS
              </div>

              {/* Brand Name */}
              <h2 className="text-[22px] font-bold text-[#11182F]">
                Dev <span className="text-[#D642A6]">Stack</span>
              </h2>
            </div>

            <p className="mt-5 max-w-md text-[15px] leading-6 text-[#657693]">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            {/* Social Links */}
            <div className="mt-7 flex gap-6">
              <a
                href="#"
                className="text-[15px] font-medium text-[#40516B] hover:text-[#D642A6]"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-[15px] font-medium text-[#40516B] hover:text-[#D642A6]"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-[15px] font-medium text-[#40516B] hover:text-[#D642A6]"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-[15px] font-semibold uppercase tracking-wide text-[#11182F]">
              Product
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-[15px] text-[#657693] hover:text-[#D642A6]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[15px] text-[#657693] hover:text-[#D642A6]"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[15px] text-[#657693] hover:text-[#D642A6]"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[15px] font-semibold uppercase tracking-wide text-[#11182F]">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-[15px] text-[#657693] hover:text-[#D642A6]"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[15px] text-[#657693] hover:text-[#D642A6]"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[15px] text-[#657693] hover:text-[#D642A6]"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[15px] font-semibold uppercase tracking-wide text-[#11182F]">
              Legal
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-[15px] text-[#657693] hover:text-[#D642A6]"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[15px] text-[#657693] hover:text-[#D642A6]"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-gray-200"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 pt-7 text-sm md:flex-row md:items-center md:justify-between">
          <p className="text-[#94A3B8]">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-8">
            <a href="#" className="text-[#94A3B8] hover:text-[#D642A6]">
              Privacy
            </a>

            <a href="#" className="text-[#94A3B8] hover:text-[#D642A6]">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
