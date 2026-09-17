
import {
  FaStar,
  FaCalendarAlt,
  FaClock,
  FaGlobe,
  FaFilm,
  FaTimes,
} from "react-icons/fa";


const Models = ({isModalOpen,setIsModalOpen,move, releaseDate}) => {
    if (!isModalOpen) return null;

    return (
      <div>
        {isModalOpen && (
          <div
            className="fixed inset-0 z-999 flex items-center justify-center
          bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            {/* Modal */}
            <div
              className="relative max-h-[90vh] w-full max-w-4xl
            overflow-y-auto rounded-2xl border border-white/10
            bg-gray-950 text-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* ================= CLOSE ICON ================= */}
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute right-4 top-4 z-50 flex h-10 w-10
              items-center justify-center rounded-full
              bg-black/70 text-white transition
              hover:bg-red-600"
                aria-label="Close modal"
              >
                <FaTimes />
              </button>

              {/* ================= BACKDROP ================= */}
              <div className="relative h-64 sm:h-80 md:h-96">
                <img
                  src={
                    move.image?.original ||
                    move.image?.medium ||
                    "https://via.placeholder.com/1000x500?text=No+Image"
                  }
                  alt={move.name}
                  className="h-full w-full object-cover"
                />

                {/* Gradient */}
                <div
                  className="absolute inset-0
                bg-linear-to-t
                from-gray-950 via-gray-950/30
                to-transparent"
                />

                {/* Movie Name */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-3xl font-bold sm:text-4xl">
                    {move.name}
                  </h2>
                </div>
              </div>

              {/* ================= CONTENT ================= */}
              <div className="p-6 sm:p-8">
                {/* Rating + Release */}
                <div
                  className="mb-6 flex flex-wrap items-center gap-3
                text-sm"
                >
                  <div
                    className="flex items-center gap-2 rounded-full
                  bg-yellow-500/10 px-4 py-2 text-yellow-400"
                  >
                    <FaStar />
                    <span>Rating: {move.rating?.average || "N/A"}</span>
                  </div>

                  <div
                    className="flex items-center gap-2 rounded-full
                  bg-white/5 px-4 py-2 text-gray-300"
                  >
                    <FaCalendarAlt className="text-red-500" />
                    <span>Release: {releaseDate}</span>
                  </div>
                </div>

                {/* ================= OVERVIEW ================= */}
                {move.summary && (
                  <div className="mb-7">
                    <h3 className="mb-3 text-xl font-bold">Overview</h3>

                    <div
                      className="leading-7 text-gray-400"
                      dangerouslySetInnerHTML={{
                        __html: move.summary,
                      }}
                    />
                  </div>
                )}

                {/* ================= EXTRA INFORMATION ================= */}
                <h3 className="mb-4 text-xl font-bold">Movie Information</h3>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {/* Genre */}
                  {move.genres?.length > 0 && (
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="mb-2 text-sm text-gray-500">Genre</p>

                      <div className="flex flex-wrap gap-2">
                        {move.genres.map((genre) => (
                          <span
                            key={genre}
                            className="rounded-full bg-red-600/20
                          px-3 py-1 text-xs text-red-400"
                          >
                            {genre}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Language */}
                  {move.language && (
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center gap-3">
                        <FaGlobe className="text-red-500" />

                        <div>
                          <p className="text-sm text-gray-500">Language</p>
                          <p className="font-semibold">{move.language}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Runtime */}
                  {move.runtime && (
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center gap-3">
                        <FaClock className="text-red-500" />

                        <div>
                          <p className="text-sm text-gray-500">Runtime</p>
                          <p className="font-semibold">
                            {move.runtime} minutes
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Type */}
                  {move.type && (
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center gap-3">
                        <FaFilm className="text-red-500" />

                        <div>
                          <p className="text-sm text-gray-500">Type</p>
                          <p className="font-semibold">{move.type}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Status */}
                  {move.status && (
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm text-gray-500">Status</p>
                      <p className="mt-1 font-semibold">{move.status}</p>
                    </div>
                  )}

                  {/* Network */}
                  {move.network?.name && (
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm text-gray-500">Network</p>
                      <p className="mt-1 font-semibold">{move.network.name}</p>
                    </div>
                  )}

                  {/* Country */}
                  {move.country?.name && (
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm text-gray-500">Country</p>
                      <p className="mt-1 font-semibold">{move.country.name}</p>
                    </div>
                  )}
                </div>

                {/* ================= CLOSE BUTTON ================= */}
                <div className="mt-8 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex items-center gap-2 rounded-lg
                  bg-red-600 px-6 py-2.5 font-semibold
                  transition hover:bg-red-700"
                  >
                    <FaTimes />
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
};

export default Models;
