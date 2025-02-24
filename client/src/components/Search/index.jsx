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
import { getByTitle } from "../../store/thunks/getByTitlethunk";
import { getByActor } from "../../store/thunks/getByActorthunk";
import { getByGenre } from "../../store/thunks/getByGenrethunk";
import { useDispatch } from "react-redux";
import "./index.css";

const Search = ({ handleUpdate }) => {
  const dispatch = useDispatch();
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
        dispatch(getByTitle(searchWord));
        break;
      case "Actor":
        dispatch(getByActor(searchWord));
        break;
      case "Genre":
        dispatch(getByGenre(searchWord));
        break;
    }
  };
  return (
    <Box className="parent-container" sx={{ padding: "24px", marginTop: 10 }}>
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
