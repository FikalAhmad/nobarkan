import FilmList from "../FilmList";

const TrendingFilm = async () => {
  const response = await fetch(`${process.env.API_MOVIE}/now_playing`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
    },
  });
  const trending_movie = await response.json();

  return (
    <div>
      <h1 className="pl-5 py-5 text-2xl font-semibold sm:text-3xl">Trending</h1>
      <FilmList apiData={trending_movie} />
    </div>
  );
};

export default TrendingFilm;
