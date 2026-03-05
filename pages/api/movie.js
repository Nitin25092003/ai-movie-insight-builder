import axios from "axios";

export default async function handler(req, res) {

  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: "IMDb ID required" });
  }

  try {

    const response = await axios.get(
      `http://www.omdbapi.com/?i=${id}&apikey=${process.env.OMDB_API_KEY}&plot=short`
    );

    const movie = response.data;

    if (movie.Response === "False") {
      return res.status(404).json({ error: "Movie not found" });
    }

    res.status(200).json(movie);

  } catch (error) {

    res.status(500).json({ error: "Failed to fetch movie data" });

  }
}