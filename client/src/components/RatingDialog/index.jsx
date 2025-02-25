import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  Rating,
  Box,
  DialogActions,
  Button,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const RatingDialog = ({
  onSetRating,
  rating,
  open,
  onClose,
  movieTitle,
  onSubmit,
}) => {
  const [hover, setHover] = useState(-1);
  const ratings = {
    0.5: "Worst movie ever!",
    1: "Hate it",
    1.5: "Horrible",
    2: "Meh",
    2.5: "Not too bad",
    3: "It was okay",
    3.5: "It was good",
    4: "It was great",
    4.5: "Excellent movie",
    5: "Best movie ever!",
  };

  const getLabelText = (value) => {
    return `${value} Star${value !== 1 ? "s" : ""}, ${ratings[value]}`;
  };

  return (
    <Dialog
      onClose={onClose}
      open={open}
      sx={{
        ".MuiDialog-paper": {
          height: 170,
          width: 400,
          alignItems: "center",
          overflow: "hidden",
          textAlign: "center",
        },
      }}
    >
      <DialogTitle>How would you rate {movieTitle}?</DialogTitle>
      <Box
        sx={{
          width: 280,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Rating
          name="movie-rating"
          value={rating}
          precision={0.5}
          getLabelText={(value) => getLabelText(value)}
          onChange={(event, value) => {
            onSetRating(value);
          }}
          onChangeActive={(event, value) => {
            setHover(value);
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        {rating !== null && (
          <Box sx={{ ml: 2 }}>{ratings[hover !== -1 ? hover : rating]}</Box>
        )}
      </Box>
      <DialogActions>
        <Button onClick={onSubmit}>Submit Rating</Button>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default RatingDialog;
