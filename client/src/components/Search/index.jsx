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
import { findByTitle } from "../../services/movies.service";
import "./index.css";

const Search = () => {
  const [searchData, setSearchData] = useState({
    searchType: "All",
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
          console.log(response.data);
        });
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
          <MenuItem value={"All"}>All</MenuItem>
          <MenuItem value={"Genre"}>Genre</MenuItem>
          <MenuItem value={"Movie"}>Movie</MenuItem>
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
