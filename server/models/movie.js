import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Movie = sequelize.define("movies", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
  },
  title: {
    type: DataTypes.STRING,
  },
  poster: {
    type: DataTypes.STRING,
  },
  release_date: {
    type: DataTypes.STRING,
  },
  vote_average: {
    type: DataTypes.FLOAT,
  },
  vote_count: {
    type: DataTypes.INTEGER,
  },
});

export default Movie;
