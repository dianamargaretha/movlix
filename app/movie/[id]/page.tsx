"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Detail = () => {
  const pathname = usePathname();
  const id = parseInt(pathname.split("/").slice(-1)[0]);
  const [list, setList] = useState<any>([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${process.env.NEXT_PUBLIC_API_DB_MOVIE_KEY}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: process.env.NEXT_PUBLIC_API_DB_MOVIE_KEY,
          },
        }
      )
      .then((res) => setList(res.data))
      .catch((e) => console.log(e));
  }, []);
  const {
    backdrop_path,
    title,
    poster_path,
    tagline,
    overview,
    release_date,
    runtime,
    genres,
  } = list;
  let listGenre = genres?.map((list: any) => list.name);
  return (
    <div className="container px-4">
      <div className="relative mb-[132px] w-full">
        <Image
          src={`https://image.tmdb.org/t/p/w780/${backdrop_path}`}
          alt={"banner"}
          width={1000}
          height={200}
          className="rounded-2xl w-full"
        />
        <div className="absolute bottom-[-52px] left-20 bg-[#20283E]/80 p-10 rounded-3xl backdrop-blur-md text-2xl md:text-4xl">
          {title}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-20 p-20">
        <div className="flex-1">
          <Image
            src={`https://image.tmdb.org/t/p/w780/${poster_path}`}
            alt={"poster"}
            width={520}
            height={780}
            className="rounded-2xl"
          />
        </div>
        <div className="flex-1">
          <div className="flex gap-6 flex-col">
            <h3 className="text-2xl font-bold text-grey-50">{tagline}</h3>
            <p className="text-xl text-grey-300">{overview}</p>
            <div>
              <p className="text-grey-400 mb-2">Release Date</p>
              <p className="text-grey-100 text-xl">{release_date}</p>
            </div>
            <div>
              <p className="text-grey-400 mb-2">Run Time</p>
              <p className="text-grey-100 text-xl">{runtime} min</p>
            </div>
            <div>
              <p className="text-grey-400 mb-2">Genre</p>
              <p className="text-grey-100 text-xl">{listGenre?.join(", ")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
