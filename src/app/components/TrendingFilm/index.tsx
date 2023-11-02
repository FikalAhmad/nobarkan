import FilmList from "../FilmList";
import HeaderTitle from "../HeaderTitle";

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
      <HeaderTitle title="Trending" link="/trending" />
      <FilmList apiData={trending_movie} />
    </div>
  );
};

export default TrendingFilm;
