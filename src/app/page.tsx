import PopularFilm from "./components/PopularFilm";
import TrendingFilm from "./components/TrendingFilm";
import UpcomingFilm from "./components/UpcomingFilm";
import Pagination from "./utilities/Pagination";

export default function Home() {
  return (
    <>
      <TrendingFilm />
      <PopularFilm />
      <UpcomingFilm />
    </>
  );
}
