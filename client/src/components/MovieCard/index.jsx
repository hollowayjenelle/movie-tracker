import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import RatingDialog from "../RatingDialog";

const MovieCard = ({ title, imageURL, releaseDate, voteAvg, voteCount }) => {
  const watchedMovies = useSelector((state) => state.watchedMovies.movies);
  const [rating, setRating] = useState(2);
  const [openDialog, setOpenDialog] = useState(false);
  const hasWatched = watchedMovies.find((movie) => movie.title === title);

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleAddWatched = () => {
    console.log("Time to add to watched list");
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
      </CardContent>
      <CardActions>
        <Button onClick={handleOpenDialog}>Add to Watch List</Button>
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
