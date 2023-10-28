import FilmList from "../FilmList";

const UpcomingFilm = async () => {
  const response = await fetch(`${process.env.API_MOVIE}/upcoming`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
    },
  });
  const popular_movie = await response.json();

  return (
    <div>
      <h1 className="pl-5 py-5 text-2xl font-semibold sm:text-3xl">Upcoming</h1>
      <FilmList apiData={popular_movie} />
    </div>
  );
};

export default UpcomingFilm;
