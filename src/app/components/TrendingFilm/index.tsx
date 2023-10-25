import FilmList from "../FilmList";

const TrendingFilm = async () => {
  const response = await fetch(`${process.env.API_MOVIE}/now_playing`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTA5NTU2YzhhYzAyYzFkNjBmMzAxYmNhYjBkYWQ0YSIsInN1YiI6IjYzYWIzOGMwYzU2ZDJkMDA5NmQxY2MzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l-BpeH-Ah7Wi9t70Rz04j-Mtg9263XYGP2ZKNR9qT2A",
    },
  });
  const trending_movie = await response.json();

  return (
    <div>
      <h1 className="pl-5 py-5 text-2xl font-semibold sm:text-3xl">Trending</h1>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-5 px-5">
        {trending_movie.results.map((item: any) => {
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

export default TrendingFilm;
