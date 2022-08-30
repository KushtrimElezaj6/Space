import { Box, Toolbar } from "@mui/material";
import axios from "axios";
import React from "react";
import { isError, useQuery } from "react-query";
import { Outlet } from "react-router-dom";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Header } from "../../layout/Header/Header";
import { Sidebar } from "../../layout/SideBar/SideBar";

interface HorrorMovies {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}
const base_url = "https://image.tmdb.org/t/p/original/";

export const MyMoviesHorror = () => {
  const { isLoading, error, isError, data, isFetching } = useQuery<
    HorrorMovies[]
  >(
    "horrorMovies",
    () =>
      axios
        .get(
          "https://api.themoviedb.org/3/discover/movie?api_key=7403702db28a7c2f453dcbf75852e0f1&with_genres=27",
          {
            params: {
              _limit: 50,
            },
          }
        )
        .then((res) => res.data.results),
    {
      // refetchOnMount: false,
      // cacheTime: 10000,
      // enabled: false,
    }
  );

  if (isLoading) {
    return <div>Loading horror movies...</div>;
  }
  if (isError) {
    console.log(error);

    return <div>Horror movies could't be loaded</div>;
  }

  return (
    <>
      <h2>Welcome to your Horror movies</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          rowGap: "30px",
          columnGap: "40px",
          justifyContent: "center",
        }}
      >
        {data?.map((item) => (
          <CardComponent
            image={`${base_url}${item.poster_path}`}
            title={item.title}
            body={item.overview}
          />
        ))}
      </div>
    </>
  );
};
