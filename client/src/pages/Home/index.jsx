import React, { useState, useEffect } from "react";
import Search from "../../components/Search";
import DisplayArea from "../../components/DisplayArea";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../../store/thunks/getAllMoviesthunk";

const HomePage = () => {
  const currentData = useSelector((state) => state.movies.allMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies());
  }, []);

  return (
    <div>
      <Search />
      <DisplayArea dataset={currentData} />
    </div>
  );
};

export default HomePage;
