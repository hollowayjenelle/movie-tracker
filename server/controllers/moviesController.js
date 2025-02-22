import Movie from "../models/movie.js";
import { Op } from "sequelize";

export const getAllMovies = (req, res) => {
  const title = req.query.title;
  const condition = title
    ? { title: { [Op.substring]: req.query.title } }
    : null;
  Movie.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
    where: condition,
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
