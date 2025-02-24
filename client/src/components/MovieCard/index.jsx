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
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        image={`https://image.tmdb.org/t/p/original${imageURL}`}
        title={title}
        sx={{ height: 350 }}
      />
      <CardContent>
        <Typography>{title}</Typography>
        <Typography>{releaseDate}</Typography>
        <Typography>
          {voteAvg.toFixed(1)} - {voteCount}
        </Typography>
        <Box>
          {hasWatched && (
            <Rating
              name="user-rating"
              defaultValue={hasWatched.user_rating}
              precision={0.5}
              readOnly
            />
          )}
        </Box>
      </CardContent>
      <CardActions>
        {hasWatched ? (
          <Button disabled>Already Watched and Rated!</Button>
        ) : (
          <Button onClick={handleOpenDialog}>Add to Watch List</Button>
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
