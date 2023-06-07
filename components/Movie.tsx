import React from "react";
import Image from "next/image";
import Link from "next/link";

interface customProps {
  data?: any;
}

const Movie = ({ data }: customProps) => {
  const id = data.id.toString();
  return (
    <div className="list-movie rounded-2xl">
      <Link href={`/movie/${id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
          alt={data.title}
          width={200}
          height={200}
          className="w-full mb-4"
        />
        <p className="h-12 text-sm">{data.title}</p>
      </Link>
    </div>
  );
};

export default Movie;
