import { Op } from "sequelize";
import Movie from "../models/movie.js";
import Genre from "../models/genre.js";

const getAllMoviesByGenre = (req, res) => {
  const genre = req.query.genre;
  Genre.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
    where: {
      name: {
        [Op.iLike]: genre,
      },
    },
    include: [
      {
        model: Movie,
        attributes: { exclude: ["createdAt", "updatedAt"] },
      },
    ],
  })

    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((error) => {
      return res.status(500).json(error.message);
    });
};

export default getAllMoviesByGenre;
