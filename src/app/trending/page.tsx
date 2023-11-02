"use client";

import { useEffect, useState } from "react";
import FilmList from "../components/FilmList";

const Home = () => {
  const [filmTrending, setFilmTrending] = useState({ total_pages: 1 });
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchTrending = async () => {
      const response = await fetch(
        `${process.env.API_MOVIE}/now_playing?page=${page}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
          },
        }
      );
      const data = await response.json();
      setFilmTrending(data);
    };
    fetchTrending();
  }, [page]);

  return (
    <div>
      <h1 className="pl-5 py-5 text-2xl font-semibold sm:text-3xl">Trending</h1>
      <FilmList apiData={filmTrending} />
      <div className="py-20 flex justify-center gap-4">
        <button onClick={() => setPage(page - 1)}>Prev</button>
        <div>
          {page} of {filmTrending.total_pages}
        </div>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default Home;
