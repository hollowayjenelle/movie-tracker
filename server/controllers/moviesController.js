import Movie from "../models/movie.js";
import { Op } from "sequelize";

export const getAllMovies = (req, res) => {
  const title = req.query.title;
  const condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
  Movie.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
    where: condition,
  })
    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
      });
    });
};
