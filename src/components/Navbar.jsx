import { IoTvSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyle = ({ isActive }) =>
    `relative px-4 py-2 text-sm md:text-base font-medium transition-all duration-300
    ${isActive ? "text-red-500" : "text-gray-300 hover:text-white"}`;

  const Navlinks = (
    <>
      <li>
        <NavLink to="/" className={navLinkStyle}>
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/movies" className={navLinkStyle}>
          Movies
        </NavLink>
      </li>

      <li>
        <NavLink to="/trending" className={navLinkStyle}>
          Trending
        </NavLink>
      </li>

      <li>
        <NavLink to="/popular" className={navLinkStyle}>
          Popular
        </NavLink>
      </li>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur-md">
      <div className="navbar max-w-7xl mx-auto px-4 md:px-6">
        {/* Logo + Mobile Menu */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-56
              rounded-xl border border-white/10 bg-black/95
              p-3 shadow-2xl"
            >
              {Navlinks}
            </ul>
          </div>

          {/* Logo */}
          <NavLink
            to="/"
            className="btn btn-ghost gap-2 px-2 text-xl font-bold
            text-white hover:bg-transparent"
          >
            <span
              className="flex h-10 w-10 items-center justify-center
              rounded-lg bg-red-600 shadow-lg shadow-red-600/30"
            >
              <IoTvSharp className="text-2xl" />
            </span>

            <span>
              Movie<span className="text-red-500">Explorer</span>
            </span>
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal items-center gap-1">
            {Navlinks}
          </ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end gap-2">
          {/* Search */}
          <button
            className="hidden md:flex h-10 w-10 items-center justify-center
            rounded-full border border-white/10 bg-white/5 text-gray-300
            transition-all duration-300 hover:border-red-500
            hover:bg-red-600 hover:text-white"
          >
            <FaSearch />
          </button>

          {/* Explore Button */}
          <NavLink
            to="/movies"
            className="hidden sm:flex items-center rounded-full
            bg-red-600 px-5 py-2.5 text-sm font-semibold text-white
            shadow-lg shadow-red-600/20 transition-all duration-300
            hover:scale-105 hover:bg-red-700"
          >
            Explore Movies
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
