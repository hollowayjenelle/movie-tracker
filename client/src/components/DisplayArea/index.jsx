import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";

const DisplayArea = ({ dataset }) => {
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [page, setPage] = useState(1);
  const moviesPerPage = 15;
  const pages = Math.floor(dataset.length / moviesPerPage);

  useEffect(() => {
    if (dataset.length > 0) {
      setDisplayedMovies(dataset.slice(0, moviesPerPage));
    }
  }, [dataset, moviesPerPage]);

  const handleChange = (event) => {
    if (displayedMovies.length >= dataset.length) {
      return;
    }

    setTimeout(() => {
      setDisplayedMovies((prevMovies) => [
        ...prevMovies,
        ...dataset.slice(prevMovies.length, prevMovies.length + moviesPerPage),
      ]);
      setPage((prevPage) => prevPage + 1);
    }, 500);
  };

  return (
    <Box>
      <InfiniteScroll
        dataLength={displayedMovies.length}
        next={handleChange}
        hasMore={page < pages}
        loader={<h4>Loading</h4>}
        endMessage={<p>That's all folks! No more movies to see!</p>}
      >
        <Box>
          {displayedMovies.map((movie) => (
            <div key={movie.id}>
              <h3>{movie.title}</h3>
            </div>
          ))}
        </Box>
      </InfiniteScroll>
    </Box>
  );
};

export default DisplayArea;
