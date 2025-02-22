import axios from "axios";
import Genre from "../models/genre.js";
import "dotenv/config";

const populateGenres = async () => {
  try {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/genre/movie/list",
      params: { language: "en" },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`,
      },
    };
    const response = await axios.request(options);

    const genres = response.data.genres || {};

    if (!genres) {
      console.error("No genres available");
    }
    await Genre.bulkCreate(genres, { ignoreDuplicates: true });
    console.log("Genres successfully added!");
  } catch (error) {
    console.error("Unable to fetch movie genres", error);
  }
};

export default populateGenres;
