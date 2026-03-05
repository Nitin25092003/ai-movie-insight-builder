"use client";

import { useState } from "react";
import SearchBox from "../components/SearchBox";
import MovieCard from "../components/MovieCard";
import SentimentBox from "../components/SentimentBox";

export default function Home() {

  const [movie, setMovie] = useState<any>(null);
  const [sentiment, setSentiment] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const searchMovie = async (id: string) => {

    try {

      setLoading(true);
      setMovie(null);
      setSentiment(null);

      const movieRes = await fetch(`/api/movie?id=${id}`);
      const movieData = await movieRes.json();

      if (movieData.error) {
        alert("Movie not found. Please check IMDb ID.");
        setLoading(false);
        return;
      }

      setMovie(movieData);

      // Sample audience reviews
      const reviews = [
        "Amazing movie with great acting",
        "Mind blowing visuals and storytelling",
        "A masterpiece of sci-fi cinema",
        "Story is very engaging and exciting"
      ];

      const sentimentRes = await fetch("/api/sentiment", {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({ reviews })

      });

      const sentimentData = await sentimentRes.json();

      setSentiment(sentimentData);

      setLoading(false);

    } catch (error) {

      console.error(error);
      alert("Something went wrong.");
      setLoading(false);

    }

  };

  return (

    <main className="max-w-3xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-8 text-center">

        AI Movie Insight Builder

      </h1>

      <SearchBox onSearch={searchMovie} />

      {loading && (

        <p className="mt-4 text-gray-600">
          Loading movie data...
        </p>

      )}

      {movie && <MovieCard movie={movie} />}

      {sentiment && <SentimentBox sentiment={sentiment} />}

    </main>

  );
}