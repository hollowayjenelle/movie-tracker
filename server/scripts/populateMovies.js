import axios from "axios";
import Movie from "../models/movie.js";
import Genre from "../models/genre.js";
import "dotenv/config";

const populateMovies = async () => {
  try {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/popular",
      params: { language: "en" },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`,
      },
    };
    for (let i = 1; i <= 5; i++) {
      const updatedOptions = {
        ...options,
        params: { language: "en", page: i.toString() },
      };
      const response = await axios.request(updatedOptions);
      const movies = response.data.results || {};

      if (!movies) {
        console.error("No movies available");
      }

      movies.forEach(async (movie) => {
        const doesMovieExist = await Movie.findOne({ where: { id: movie.id } });
        //Rename variable
        if (!doesMovieExist) {
          const newMovieEntry = await Movie.create({
            id: movie.id,
            title: movie.title,
            poster: movie.poster_path,
            release_date: movie.release_date,
            vote_average: movie.vote_average,
            vote_count: movie.vote_count,
          });

          if (movie.genre_ids.length > 0) {
            movie.genre_ids.forEach(async (id) => {
              const genre = await Genre.findByPk(id);
              await newMovieEntry.addGenre(genre);
            });
          }
        } else {
          console.log(`Movie ${movie.id} already exists in database`);
        }
      });

      console.log(`Page ${i} added successfully`);
    }
    console.log("Movies added succesfully");
  } catch (error) {
    console.error("Unable to fetch movies", error);
  }
};

export default populateMovies;
