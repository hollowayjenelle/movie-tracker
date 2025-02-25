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

const Search = () => {
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
      <form
        className="content-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <Select
          id="search-select"
          data-testid="search-select"
          name="searchType"
          value={searchData.searchType}
          label="Search"
          onChange={handleChange}
          inputProps={{ MenuProps: { disableScrollLock: true } }}
        >
          <MenuItem data-testid="search-genre" value={"Genre"}>
            Genre
          </MenuItem>
          <MenuItem data-testid="search-movie" value={"Movie"}>
            Movie
          </MenuItem>
          <MenuItem data-testid="search-actor" value={"Actor"}>
            Actor
          </MenuItem>
        </Select>
        <TextField
          required
          id="search-field"
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
          label="search-button"
          sx={{ padding: "12px 28px", marginLeft: "12px" }}
        >
          Search
        </Button>
      </form>
    </Box>
  );
};

export default Search;
