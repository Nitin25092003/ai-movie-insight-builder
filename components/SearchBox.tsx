"use client";

import { useState } from "react";

export default function SearchBox({ onSearch }) {

  const [id, setId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id) return;
    onSearch(id);
  };

  return (

    <form onSubmit={handleSubmit} className="flex gap-3 mb-6">

      <input
        className="border p-3 rounded w-full"
        placeholder="Enter IMDb ID (example: tt0133093)"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <button className="bg-black text-white px-5 rounded">

        Search

      </button>

    </form>
  );
}