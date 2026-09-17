
import { LiaInternetExplorer } from "react-icons/lia";
import { FaPlay } from "react-icons/fa";
import banner1 from "../assets/banner1.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section
      className="relative min-h-[80vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${banner1})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-black/20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl text-white">
          <p className="mb-4 text-sm md:text-base font-semibold uppercase tracking-[4px] text-red-500">
            Welcome to Movie Explore
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Discover
            <span className="block text-red-500">Amazing Movies</span>
          </h1>

          <p className="mt-6 max-w-xl text-gray-300 text-base md:text-lg leading-8">
            Explore and discover your favorite movies from around the world.
            Find the latest releases, timeless classics, popular movies, and
            hidden gems all in one place.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <button
              className="flex items-center gap-3 rounded-full bg-red-600
              px-7 py-3.5 font-semibold text-white
              transition duration-300 hover:bg-red-700 hover:scale-105"
            >
              <LiaInternetExplorer className="text-2xl" />
              <Link to='/movies'>Explore More</Link>
            </button>

            <button
              className="flex items-center gap-3 rounded-full border
              border-white/40 bg-white/10 backdrop-blur-sm
              px-7 py-3.5 font-semibold text-white
              transition duration-300 hover:bg-white hover:text-black"
            >
              <FaPlay className="text-sm" />
              Watch Trailer
            </button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Banner;

