import FilmList from "@/app/components/FilmList";

const Home = async ({ params }: any) => {
  const { keyword } = params;
  const response = await fetch(`${process.env.MOVIE_SEARCH}?query=${keyword}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
    },
  });
  const hasilSearch = await response.json();

  return (
    <div>
      <FilmList apiData={hasilSearch} />
    </div>
  );
};

export default Home;
