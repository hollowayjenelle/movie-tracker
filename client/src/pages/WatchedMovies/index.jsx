import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import DisplayArea from "../../components/DisplayArea";

const WatchedMoviesPage = () => {
  const watchedMovies = useSelector((state) => state.watchedMovies.movies);

  return <DisplayArea dataset={watchedMovies} />;
};

export default WatchedMoviesPage;
