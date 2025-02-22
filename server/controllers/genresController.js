import { Op } from "sequelize";
import Movie from "../models/movie.js";
import Genre from "../models/genre.js";

const getAllMoviesByGenre = (req, res) => {
  const genre = req.query.genre;
  console.log(genre);
  Genre.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
    where: {
      name: {
        [Op.iLike]: genre,
      },
    },
    include: Movie,
  })
    .then((result) => {
      return res.json(result);
    })
    .catch((error) => {
      console.log(error);
      return res.json({
        message: "Unable to fetch records!",
      });
    });
};

export default getAllMoviesByGenre;
