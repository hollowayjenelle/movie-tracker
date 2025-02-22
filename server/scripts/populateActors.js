import axios from "axios";
import Movie from "../models/movie.js";
import Actor from "../models/actor.js";
import "dotenv/config";

const populateActors = async () => {
  try {
    const allMovies = await Movie.findAll();
    const options = {
      method: "GET",
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`,
      },
    };
    for (let i = 0; i <= allMovies.length - 1; i++) {
      const updatedOptions = {
        ...options,
        url: `https://api.themoviedb.org/3/movie/${allMovies[i].id}/credits`,
      };
      const response = await axios.request(updatedOptions);
      const actors = response.data.cast || {};

      if (!actors) {
        console.error("No cast present");
        continue;
      }

      for (let j = 0; j <= 2; j++) {
        const actor = actors[j];
        if (!actor) {
          console.log(`Skipping actor at index ${j}, actor is undefined.`);
          continue;
        }
        const doesActorExist = await Actor.findOne({ where: { id: actor.id } });
        if (!doesActorExist) {
          const newActor = await Actor.create({
            id: actor.id,
            name: actor.name,
          });
          await newActor.addMovie(allMovies[i]);
        } else {
          console.log(`Actor ${actor.name} already exists in database`);
        }
      }
    }
    console.log("Actors added successfully");
  } catch (error) {
    console.error("Unable to fetch actors", error);
  }
};

export default populateActors;
