import FilmList from "../FilmList";
import HeaderTitle from "../HeaderTitle";

const PopularFilm = async () => {
  const response = await fetch(`${process.env.API_MOVIE}/popular`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
    },
  });
  const popular_movie = await response.json();

  return (
    <div>
      <HeaderTitle title="Popular" link="/popular" />
      <FilmList apiData={popular_movie} />
    </div>
  );
};

export default PopularFilm;
