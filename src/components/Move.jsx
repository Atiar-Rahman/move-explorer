import { useState } from "react";
import {
    FaBook,
} from "react-icons/fa";
import Models from "./Models";
import { CiStar } from "react-icons/ci";

const Move = ({ move }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const releaseDate = move.premiered
    ? new Date(move.premiered).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "N/A";

  return (
    <>
      <div
        className="group overflow-hidden rounded-xl border border-white/10
        bg-white/5 transition-all duration-300
        hover:-translate-y-2 hover:border-red-500/50
        hover:shadow-xl hover:shadow-red-600/10"
      >
        {/* Poster */}
        <div className="relative aspect-2/3 overflow-hidden bg-gray-900">
          <img
            src={
              move.image?.original ||
              move.image?.medium ||
              "https://via.placeholder.com/300x450?text=No+Image"
            }
            alt={move.name}
            className="h-full w-full object-cover transition duration-500
            group-hover:scale-110"
          />

          {/* Overlay */}
          <div
            className="absolute inset-0
            bg-linear-to-t from-black/80
            via-transparent to-transparent"
          />

          {/* Rating */}
          {/* {move.rating?.average && (
            <div
              className="absolute right-3 top-3 flex items-center gap-1
              rounded-full bg-black/80 px-3 py-1.5
              text-sm font-semibold text-yellow-400"
            >
              <FaStar />
              {move.rating.average}
            </div>
          )} */}
        </div>

        {/* Card Info */}
        <div className="p-4">
          <h2
            className="truncate text-lg font-bold text-white
            transition-colors group-hover:text-red-500"
          >
            {move.name}
          </h2>

          <div className="mt-2 flex items-center gap-3 text-sm text-gray-400">
            <span className="flex text-center justify-center items-center gap-3"><CiStar className="text-yellow-500"/> {move.rating?.average || "N/A"}</span>
            <span>•</span>
            <span className="flex justify-center items-center gap-3">
              <FaBook className="text-yellow-900"/>
              {move.premiered ? new Date(move.premiered).getFullYear() : "N/A"}
            </span>
          </div>

          {/* See Details */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 w-full rounded-lg bg-red-600
            px-4 py-2.5 text-sm font-semibold text-white
            transition-all duration-300
            hover:bg-red-700"
          >
            See Details
          </button>
        </div>
      </div>

    
      <Models isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} releaseDate={releaseDate} move={move}/>
    </>
  );
};

export default Move;
