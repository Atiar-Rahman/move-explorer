import { Link } from "react-router-dom";
import { FaHome, FaFilm } from "react-icons/fa";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-white/3 px-6 py-16 text-center shadow-2xl sm:px-10">
        {/* Background Glow */}
        <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-red-600/10 blur-3xl" />

        {/* Film Icon */}
        <div
          className="relative mx-auto mb-6 flex h-20 w-20 items-center
          justify-center rounded-2xl bg-red-600/10
          text-4xl text-red-500"
        >
          <FaFilm />
        </div>

        {/* 404 */}
        <h1
          className="relative text-8xl font-black tracking-tight
          text-red-600 sm:text-9xl"
        >
          404
        </h1>

        {/* Title */}
        <h2 className="relative mt-4 text-2xl font-bold text-white sm:text-3xl">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="relative mx-auto mt-4 max-w-md text-sm leading-6 text-gray-400 sm:text-base">
          Oops! The page you are looking for doesn't exist or may have been
          moved. Let's get you back to the movies.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="relative mt-8 inline-flex items-center gap-2
          rounded-lg bg-red-600 px-6 py-3
          font-semibold text-white
          transition-all duration-300
          hover:bg-red-700
          hover:shadow-lg hover:shadow-red-600/20"
        >
          <FaHome />
          Back to Home
        </Link>

        {/* Bottom Text */}
        <p className="relative mt-8 text-xs text-gray-600">Error Code: 404</p>
      </div>
    </main>
  );
};

export default NotFound;
