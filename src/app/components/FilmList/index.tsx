import Image from "next/image";
import React from "react";
import rating from "@/app/assets/icons/star.png";

interface DataFilm {
  title: string;
  image: string;
  vote_average: string;
}

const FilmList: React.FC<DataFilm> = ({ title, image, vote_average }) => {
  return (
    <div>
      <Image
        src={`http://image.tmdb.org/t/p/w200${image}`}
        alt=""
        width={200}
        height={200}
      />
      <div className="text-sm font-semibold truncate">{title}</div>
      <div className="text-xs flex items-center gap-1">
        <div>
          <Image src={rating} alt="" width={13} height={13} />
        </div>
        <p>{vote_average}</p>
      </div>
    </div>
  );
};

export default FilmList;
