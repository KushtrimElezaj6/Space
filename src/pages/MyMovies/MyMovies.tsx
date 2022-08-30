import { Box, Toolbar } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Header } from "../../layout/Header/Header";
import { MoviesSidebar } from "../../layout/SideBar/MoviesSidebar";

const MyMovies = () => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Header />
      <MoviesSidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Toolbar />
        <h1>Movies</h1>
        <Outlet />
      </Box>
    </Box>
  );
};

export default MyMovies;
