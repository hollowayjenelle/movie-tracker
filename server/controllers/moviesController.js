import Movie from "../models/movie.js";
import { Op } from "sequelize";

export const getAllMovies = (req, res) => {
  Movie.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
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

export const getMovieByKeyword = (req, res) => {
  Movie.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
    where: {
      title: {
        [Op.substring]: req.query.title,
      },
    },
  })
    .then((result) => {
      return res.json(result);
    })
    .catch((error) => {
      console.error(error);
      return res.json({
        message: "Unable to fetch records!",
      });
    });
};
