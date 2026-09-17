import { useEffect, useState } from "react";
import Move from "./Move";
import { IoIosSearch } from "react-icons/io";

const Movies = () => {
  const [moves, setMoves] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  

  const fetchData = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("https://api.tvmaze.com/shows");

      if (!res.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await res.json();
      setMoves(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchSearchData = async (name) => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        `https://api.tvmaze.com/singlesearch/shows?q=${name}`,
      );

      if (!res.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await res.json();
      setMoves([data]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const handleSearch = (e) => {
    e.preventDefault();

    const searchName = e.target.name.value.trim();

    if (searchName) {
      fetchSearchData(searchName);
    } else {
      fetchData();
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchData();
  }, []);

  /* loading ui */
  if (loading) {
    return (
      <section className="min-h-screen bg-black px-6 py-16">
        <div className="mx-auto max-w-7xl">
          {/* Header Skeleton */}
          <div className="mb-10">
            <div className="h-10 w-64 animate-pulse rounded bg-white/10" />
            <div className="mt-3 h-4 w-80 animate-pulse rounded bg-white/10" />
          </div>

          {/* Skeleton Grid */}
          <div
            className="grid grid-cols-2 gap-5
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
            xl:grid-cols-6"
          >
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl bg-white/5"
              >
                <div className="aspect-2/3 animate-pulse bg-white/10" />

                <div className="space-y-3 p-4">
                  <div className="h-4 animate-pulse rounded bg-white/10" />
                  <div className="h-3 w-2/3 animate-pulse rounded bg-white/10" />
                  <div className="h-9 animate-pulse rounded bg-white/10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* error element show*/
  if (error) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-black px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white">
            Something went wrong
          </h2>

          <p className="mt-3 text-gray-400">{error}</p>

          <button
            onClick={fetchData}
            className="mt-6 rounded-full bg-red-600 px-6 py-3
            font-semibold text-white transition hover:bg-red-700"
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

//   main 
  return (
    <main className="min-h-screen bg-black px-6 py-14 md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex justify-center px-4">
          <form
            onSubmit={handleSearch}
            className="flex w-full max-w-2xl items-center overflow-hidden rounded-full border border-white/10 bg-white/5 p-1.5 shadow-lg focus-within:border-red-500/50 focus-within:shadow-red-500/10"
          >
            <input
              type="text"
              placeholder="Search movie name..."
              className="min-w-0 flex-1 bg-transparent px-5 py-3 text-sm text-white outline-none placeholder:text-gray-500"
              name="name"
            />

            <button
              type="submit"
              className="rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white  transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/20 flex justify-center items-center gap-3"
            >
              <IoIosSearch className="text-2xl font-bold " />
              Search
            </button>
          </form>
        </div>

        {/* Header */}
        <div
          className="mb-10 flex flex-col justify-between gap-4
          md:flex-row md:items-end"
        >
          <div>
            <p
              className="mb-2 text-sm font-semibold uppercase
              tracking-[4px] text-red-500"
            >
              Movie Collection
            </p>

            <h1 className="text-4xl font-extrabold text-white md:text-5xl">
              Explore Movies
            </h1>

            <p className="mt-3 max-w-xl text-gray-400">
              Discover your favorite shows and explore amazing movies from
              around the world.
            </p>
          </div>

          {/* Movie Count */}
          <div
            className="w-fit rounded-full border border-white/10
            bg-white/5 px-5 py-2"
          >
            <span className="text-sm text-gray-400">Total Movies: </span>

            <span className="font-bold text-red-500">{moves.length}</span>
          </div>
        </div>

        {/* grid layout  */}
        <div
          className="grid grid-cols-2 gap-5
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          xl:grid-cols-6"
        >
          {moves.map((move) => (
            <Move key={move.id} move={move} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Movies;
