import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import DisplayArea from "../../components/DisplayArea";
import NavBar from "../../components/NavBar";

const WatchedMoviesPage = () => {
  const watchedMovies = useSelector((state) => state.watchedMovies.movies);

  return (
    <div>
      <NavBar />
      <Typography
        variant="h1"
        sx={{ marginTop: 10, marginBottom: 3, padding: 2 }}
      >
        Your Watched Movies - {watchedMovies.length} movies
      </Typography>
      <DisplayArea dataset={watchedMovies} />
    </div>
  );
};

export default WatchedMoviesPage;
