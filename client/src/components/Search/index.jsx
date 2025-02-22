import React, { useState } from "react";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  FormGroup,
  Button,
  TextField,
} from "@mui/material";
import { findByTitle, getAll } from "../../services/movies.service";
import { findByActor } from "../../services/actors.service";
import "./index.css";

const Search = ({ handleUpdate }) => {
  const [searchData, setSearchData] = useState({
    searchType: "Movie",
    searchWord: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearchData({ ...searchData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { searchType, searchWord } = searchData;

    switch (searchType) {
      case "Movie":
        findByTitle(searchWord).then((response) => {
          handleUpdate(response.data);
        });
        break;
      case "Actor":
        findByActor(searchWord).then((response) => {
          const data = response.data;
          let movies = [];
          data.forEach((actor) => {
            movies = movies.concat(actor.movies);
          });
          handleUpdate(movies);
        });
        break;
    }
  };
  return (
    <Box component="nav" className="parent-container" sx={{ padding: "24px" }}>
      <form className="content-container search-form" onSubmit={handleSubmit}>
        <Select
          id="search-select"
          name="searchType"
          value={searchData.searchType}
          label="Search"
          onChange={handleChange}
        >
          <MenuItem value={"Genre"}>Genre</MenuItem>
          <MenuItem value={"Movie"}>Movie</MenuItem>
          <MenuItem value={"Actor"}>Actor</MenuItem>
        </Select>
        <TextField
          required
          id="outlined"
          placeholder="Search"
          value={searchData.searchWord}
          name="searchWord"
          variant="outlined"
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          size="medium"
          sx={{ padding: "14px 24px", marginLeft: "12px" }}
        >
          Search
        </Button>
      </form>
    </Box>
  );
};

export default Search;
