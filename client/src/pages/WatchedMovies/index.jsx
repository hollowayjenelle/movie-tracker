import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import DisplayArea from "../../components/DisplayArea";
import NavBar from "../../components/NavBar";

const WatchedMoviesPage = () => {
  const watchedMovies = useSelector((state) => state.watchedMovies.movies);

  return (
    <div>
      <NavBar />
      <DisplayArea dataset={watchedMovies} />
    </div>
  );
};

export default WatchedMoviesPage;
