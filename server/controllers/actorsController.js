import { Op } from "sequelize";
import Actor from "../models/actor.js";
import Movie from "../models/movie.js";

export const getAllMoviesByActor = (req, res) => {
  const actor = req.query.name;
  Actor.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
    where: {
      name: {
        [Op.iLike]: `%${actor}%`,
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
