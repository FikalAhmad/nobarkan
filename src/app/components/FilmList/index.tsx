import Image from "next/image";
import React from "react";

interface DataFilm {
  title: string;
  image: string;
  release_date: string;
}

const FilmList: React.FC<DataFilm> = ({ title, image, release_date }) => {
  return (
    <div>
      <Image
        src={`http://image.tmdb.org/t/p/w200${image}`}
        alt=""
        width={200}
        height={200}
      />
      <div className="text-sm font-semibold truncate">{title}</div>
      <div className="text-xs">{release_date}</div>
    </div>
  );
};

export default FilmList;
