import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const MovieGenres = sequelize.define("MovieGenres", {
  movieId: {
    type: DataTypes.INTEGER,
    references: {
      model: "movies",
      key: "id",
    },
    onDelete: "CASCADE",
  },
  genreId: {
    type: DataTypes.INTEGER,
    references: {
      model: "genres",
      key: "id",
    },
    onDelete: "CASCADE",
  },
});

export default MovieGenres;
