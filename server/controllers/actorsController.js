import express from "express";
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
      console.log(result);
      return res.json(result);
    })
    .catch((error) => {
      console.log(error);
      return res.json({
        message: "Unable to fetch records!",
      });
    });
};
