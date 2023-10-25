import PopularFilm from "./components/PopularFilm";
import TrendingFilm from "./components/TrendingFilm";
import UpcomingFilm from "./components/UpcomingFilm";

export default function Home() {
  return (
    <>
      <TrendingFilm />
      <PopularFilm />
      <UpcomingFilm />
    </>
  );
}
