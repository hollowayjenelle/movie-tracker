import Genre from "../models/genre.js";
import Movie from "../models/movie.js";
import Actor from "../models/actor.js";
import MovieActors from "../models/MovieActors.js";

const associate = () => {
  Movie.belongsToMany(Genre, { through: "MovieGenres" });
  Genre.belongsToMany(Movie, { through: "MovieGenres" });
  Movie.belongsToMany(Actor, { through: MovieActors });
  Actor.belongsToMany(Movie, { through: MovieActors });
};

export default associate;
