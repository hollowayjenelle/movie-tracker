import { Op } from "sequelize";
import Actor from "../models/actor.js";
import Movie from "../models/movie.js";

export const getAllMoviesByActor = (req, res) => {
  const actor = req.query.name;
  Actor.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
    where: {
      name: {
        [Op.substring]: actor,
      },
    },
    include: Movie,
  })
    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((error) => {
      return res.status(500).json(error.message);
    });
};
