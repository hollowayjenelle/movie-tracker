import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

const MovieCard = ({ title, imageURL, releaseDate, voteAvg, voteCount }) => {
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
        <Button>Add to Watch List</Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
