import { IoTvSharp } from "react-icons/io5";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <NavLink to="/" className="mb-5 inline-flex items-center gap-3">
              <span
                className="flex h-11 w-11 items-center justify-center
                rounded-xl bg-red-600 text-white
                shadow-lg shadow-red-600/30"
              >
                <IoTvSharp className="text-2xl" />
              </span>

              <span className="text-2xl font-bold text-white">
                Movie<span className="text-red-500">Explorer</span>
              </span>
            </NavLink>

            <p className="max-w-sm text-sm leading-7 text-gray-400">
              Discover amazing movies from around the world. Explore trending
              movies, popular releases, and timeless classics all in one place.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center
                rounded-full border border-white/10 bg-white/5
                transition-all duration-300 hover:border-red-500
                hover:bg-red-600 hover:text-white"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center
                rounded-full border border-white/10 bg-white/5
                transition-all duration-300 hover:border-red-500
                hover:bg-red-600 hover:text-white"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center
                rounded-full border border-white/10 bg-white/5
                transition-all duration-300 hover:border-red-500
                hover:bg-red-600 hover:text-white"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center
                rounded-full border border-white/10 bg-white/5
                transition-all duration-300 hover:border-red-500
                hover:bg-red-600 hover:text-white"
              >
                <FaYoutube />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center
                rounded-full border border-white/10 bg-white/5
                transition-all duration-300 hover:border-red-500
                hover:bg-red-600 hover:text-white"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
              Explore
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <NavLink
                  to="/"
                  className="transition-colors hover:text-red-500"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/movies"
                  className="transition-colors hover:text-red-500"
                >
                  All Movies
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/trending"
                  className="transition-colors hover:text-red-500"
                >
                  Trending Movies
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/popular"
                  className="transition-colors hover:text-red-500"
                >
                  Popular Movies
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
              Company
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="transition-colors hover:text-red-500">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="transition-colors hover:text-red-500">
                  Contact Us
                </a>
              </li>

              <li>
                <a href="#" className="transition-colors hover:text-red-500">
                  Careers
                </a>
              </li>

              <li>
                <a href="#" className="transition-colors hover:text-red-500">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
              Stay Updated
            </h3>

            <p className="mb-4 text-sm leading-6 text-gray-400">
              Subscribe to get the latest movie news, releases and
              recommendations.
            </p>

            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-white/10
                bg-white/5 px-4 py-3 text-sm text-white
                outline-none placeholder:text-gray-500
                focus:border-red-500"
              />

              <button
                className="rounded-lg bg-red-600 px-5 py-3
                text-sm font-semibold text-white
                transition-all duration-300
                hover:bg-red-700 hover:shadow-lg
                hover:shadow-red-600/20"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} MovieExplorer. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-red-500">
              Privacy Policy
            </a>

            <a href="#" className="transition-colors hover:text-red-500">
              Terms of Service
            </a>

            <a href="#" className="transition-colors hover:text-red-500">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
