import FilmList from "../FilmList";
import HeaderTitle from "../HeaderTitle";

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
      <HeaderTitle title="Upcoming" link="/upcoming" />
      <FilmList apiData={popular_movie} />
    </div>
  );
};

export default UpcomingFilm;
