import { motion } from "framer-motion";

export default function MovieCard({ movie }: any) {

  return (

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white shadow-lg rounded-lg p-6 mt-6"
    >

      <div className="flex flex-col md:flex-row gap-6">

        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
          className="w-44 rounded shadow"
        />

        <div>

          <h2 className="text-3xl font-bold">
            {movie.Title}
          </h2>

          <p className="mt-2">
            <strong>Year:</strong> {movie.Year}
          </p>

          <p>
            <strong>Rating:</strong> {movie.imdbRating}
          </p>

          <p className="mt-4 text-gray-700">
            {movie.Plot}
          </p>

          <p className="text-sm mt-3">
            <strong>Cast:</strong> {movie.Actors}
          </p>

        </div>

      </div>

    </motion.div>

  );
}