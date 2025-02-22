import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const MovieActors = sequelize.define("MovieActors", {
  movieId: {
    type: DataTypes.INTEGER,
    references: {
      model: "movies",
      key: "id",
    },
    primaryKey: true,
    onDelete: "CASCADE",
  },
  actorId: {
    type: DataTypes.INTEGER,
    references: {
      model: "actors",
      key: "id",
    },
    primaryKey: true,
    onDelete: "CASCADE",
  },
});

export default MovieActors;
