import FilmList from "../components/FilmList";

const Home = async () => {
  const movie_id = Math.floor(Math.random() * 900 + 2);
  const response = await fetch(
    `${process.env.API_MOVIE}/${movie_id}/recommendations`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
      },
    }
  );
  const data = await response.json();

  return (
    <div>
      <h1 className="pl-5 py-5 text-2xl font-semibold sm:text-3xl">
        Recommendations
      </h1>
      <FilmList apiData={data} />
    </div>
  );
};

export default Home;
