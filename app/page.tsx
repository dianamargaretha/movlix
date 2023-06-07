"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Input from "@/components/Input";
import Movie from "@/components/Movie";
interface movieProps {
  key?: number;
  data?: [any];
}

export default function Home() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_DB_MOVIE_KEY}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: process.env.NEXT_PUBLIC_API_DB_MOVIE_KEY,
          },
        }
      )
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => console.log({ err }));
  }, [isSearch]);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1&api_key=${process.env.NEXT_PUBLIC_API_DB_MOVIE_KEY}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: process.env.NEXT_PUBLIC_API_DB_MOVIE_KEY,
            },
          }
        )
        .then((res) => {
          setSearchData(res.data.results);
        })
        .catch((err) => console.log({ err }));
    };
    const timer = setTimeout(() => {
      fetchData();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const handleChange = (e: any) => {
    e.preventDefault();
    setSearch(e.target.value);
    if (e.target.value === "") {
      setIsSearch(false);
    } else {
      setIsSearch(true);
    }
  };
  return (
    <div className="container mb-20">
      <div className="flex mb-6">
        <div className="flex-initial w-1/2">
          <h2 className="font-semibold mb-4 text-grey-50 text-6xl">MOVLIX</h2>
          <p className="text-gray-300">
            List of movies and TV Shows, I,{" "}
            <span className="text-primary-300">Pramod Poudel</span> have watched
            till date. Explore what I have watched and also feel free to make a
            suggestion. 😉
          </p>
        </div>
      </div>
      <div className="mb-20">
        <Input onChange={(e: any) => handleChange(e)} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-8">
        {isSearch
          ? searchData?.map((list: any) => {
              return (
                <div key={list.id}>
                  <Movie data={list} />
                </div>
              );
            })
          : data?.map((list: any) => {
              return (
                <div key={list.id}>
                  <Movie data={list} />
                </div>
              );
            })}
      </div>
    </div>
  );
}
