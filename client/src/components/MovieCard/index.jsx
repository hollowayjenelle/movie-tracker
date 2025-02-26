import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
  Rating,
  Box,
} from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import RatingDialog from "../RatingDialog";
import { addToWatched } from "../../store/slices/watchedMovieSlice";

const MovieCard = ({
  title,
  imageURL,
  releaseDate,
  voteAvg,
  voteCount,
  id,
}) => {
  const watchedMovies = useSelector((state) => state.watchedMovies.movies);
  const [rating, setRating] = useState(2);
  const [openDialog, setOpenDialog] = useState(false);
  const dispatch = useDispatch();
  const hasWatched = watchedMovies.find((movie) => movie.title === title);

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleAddWatched = () => {
    setOpenDialog(false);
    const watchedMovie = {
      id: id,
      title: title,
      poster: imageURL,
      release_date: releaseDate,
      vote_average: voteAvg,
      vote_count: voteCount,
      user_rating: rating,
    };
    dispatch(addToWatched(watchedMovie));
  };
  return (
    <Card
      sx={{
        width: 300,
        borderRadius: "12px",
        paddingBottom: "30px",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <CardMedia
        image={`https://image.tmdb.org/t/p/original${imageURL}`}
        title={title}
        sx={{ height: 350, width: "100%" }}
      />
      <CardContent>
        <Typography variant="h3" sx={{ marginBottom: 1 }}>
          {title}
        </Typography>
        <Typography variant="body1">
          Released: {moment(releaseDate).format("MMM Do YYYY")}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
          <StarRateIcon color="secondary" sx={{ fontSize: 16 }} />
          <Typography variant="caption" sx={{ marginLeft: "4px" }}>
            {voteAvg.toFixed(1)} - {voteCount} reviews
          </Typography>
        </Box>
        <Box sx={{ marginTop: 1, display: "flex", alignItems: "flex-end" }}>
          <Typography variant="body1" sx={{ marginRight: 1 }}>
            Your Rating:{" "}
          </Typography>
          {hasWatched ? (
            <Rating
              name="user-rating"
              defaultValue={hasWatched.user_rating}
              precision={0.5}
              readOnly
            />
          ) : (
            <Typography variant="body1"> not rated yet</Typography>
          )}
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        {hasWatched ? (
          <Button disabled>Already Watched and Rated!</Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpenDialog}
          >
            Add to Watched List
          </Button>
        )}
      </CardActions>
      <RatingDialog
        onSetRating={setRating}
        rating={rating}
        open={openDialog}
        onClose={handleCloseDialog}
        movieTitle={title}
        onSubmit={handleAddWatched}
      />
    </Card>
  );
};

export default MovieCard;
