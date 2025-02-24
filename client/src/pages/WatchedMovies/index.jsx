import React from "react";
import { useDispatch, useSelector } from "react-redux";

const WatchedMoviesPage = () => {
  const watchedMovies = useSelector((state) => state.watchedMovies.movies);
  const dispatch = useDispatch();

  return <div></div>;
};

export default WatchedMoviesPage;
