import Genre from "../models/genre.js";
import Movie from "../models/movie.js";

const associate = () => {
  Movie.belongsToMany(Genre, { through: "MovieGenres" });
  Genre.belongsToMany(Movie, { through: "MovieGenres" });
};

export default associate;
