"use client";

import FilmList from "@/app/components/FilmList";
import { useEffect, useState } from "react";

const Home = ({ params }: any) => {
  const { genre } = params;
  const [genreMovieResult, setGenreMovieResult] = useState({ total_pages: 1 });
  const [genrePage, setGenrePage] = useState(1);
  useEffect(() => {
    const fetchGenrePage = async () => {
      const response = await fetch(
        `${process.env.MOVIE_GENRE}?with_genres=${genre}&page=${genrePage}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
          },
        }
      );
      const data_genre = await response.json();

      setGenreMovieResult(data_genre);
    };
    fetchGenrePage();
  }, [genre, genrePage]);

  return (
    <div>
      <h1 className="pl-5 py-5 text-2xl font-semibold sm:text-3xl">{genre}</h1>
      <FilmList apiData={genreMovieResult} />
      <div className="py-20 flex justify-center gap-4">
        <button onClick={() => setGenrePage(genrePage - 1)}>Prev</button>
        <div>
          {genrePage} of {genreMovieResult.total_pages}
        </div>
        <button onClick={() => setGenrePage(genrePage + 1)}>Next</button>
      </div>
    </div>
  );
};

export default Home;
