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
      <h1 className="pl-5 py-5 text-2xl font-semibold sm:text-3xl">Popular</h1>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-5 px-5">
        {popular_movie.results.map((item: any) => {
          return (
            <div key={item.id}>
              <FilmList
                title={item.title}
                image={item.poster_path}
                release_date={item.release_date}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpcomingFilm;
