import Image from "next/image";
import rating from "@/app/assets/icons/star.png";

interface DataFilm {
  apiData: any;
}

const FilmList = ({ apiData }: DataFilm) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-5 px-5">
      {apiData.results.map((data: any) => {
        return (
          <div key={data.id}>
            <Image
              src={`http://image.tmdb.org/t/p/w200${data.poster_path}`}
              alt=""
              width={200}
              height={200}
            />
            <div className="text-sm font-semibold truncate">{data.title}</div>
            <div className="text-xs flex items-center gap-1">
              <div>
                <Image src={rating} alt="" width={13} height={13} />
              </div>
              <p>{data.vote_average}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FilmList;
